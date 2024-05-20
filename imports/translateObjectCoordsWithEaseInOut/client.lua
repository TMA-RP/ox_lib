---@param obj number
---@param destination vector3
---@param duration number
function lib.translateObjectCoordsWithEaseInOut(obj, destination, duration)
    local startPos = GetEntityCoords(obj)
    local startTime = GetGameTimer()

    while true do
        Wait(0)
        if not DoesEntityExist(obj) then break end

        local currentTime = GetGameTimer() - startTime

        if currentTime > duration then
            SetEntityCoordsNoOffset(obj, destination.x, destination.y, destination.z, true, true, true)
            break
        else
            local t = currentTime / duration
            t = lib.math.easeInOutQuad(t, 0, 1, 1) -- Apply ease-in and ease-out

            local newPosition = {
                x = math.interp(startPos.x, destination.x, t),
                y = math.interp(startPos.y, destination.y, t),
                z = math.interp(startPos.z, destination.z, t)
            }
            SetEntityCoordsNoOffset(obj, newPosition.x, newPosition.y, newPosition.z, true, true, true)
        end
    end
end

return lib.translateObjectCoordsWithEaseInOut
