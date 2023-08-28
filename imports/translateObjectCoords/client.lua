---@param obj number
---@param destination vector3
---@param duration number
function lib.translateObjectCoords(obj, destination, duration)
    local startCoords = GetEntityCoords(obj)
    local startTimer = GetNetworkTimeAccurate()
    local timer = GetNetworkTimeAccurate()
    local done = false
    local space = destination - startCoords
    local axis = { "x", "y", "z" }

    while not done and (timer - startTimer) < duration do
        Wait(0) -- wait 1 tick
        local timeAccurate = GetNetworkTimeAccurate()

        if timer ~= 0 and (timeAccurate - timer) ~= 0 then -- if it elapsed some time from the last call
            local deltaTime = (timeAccurate - timer)
            local time = deltaTime / duration
            local speed = {}

            for k, v in pairs(axis) do
                if space[v] == 0 then
                    speed[v] = 0
                else
                    speed[v] = math.abs(space[v]) * time
                end
            end

            done = SlideObject(obj, destination, speed.x, speed.y, speed.z, false)
        end

        timer = timeAccurate
    end

    --print(obj, "Done")
    SetEntityCoords(obj, destination)
end

return lib.translateObjectCoords
