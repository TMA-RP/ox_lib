---Load a model. When called from a thread, it will yield until it has loaded.
---@param model number | string
---@param timeout number? Approximate milliseconds to wait for the model to load. Default is 1000.
---@return number? model
function lib.requestModel(model, timeout)
    local modelName = model
    if not tonumber(model) then model = joaat(model) end
    ---@cast model -string
    if HasModelLoaded(model) then return model end

    if not IsModelValid(model) then
        return error(("attempted to load invalid model '%s'"):format(modelName))
    end

    RequestModel(model)

    if not coroutine.isyieldable() then return model end

    return lib.waitFor(function()
        if HasModelLoaded(model) then return model end
    end, ("failed to load model '%s'"):format(modelName), timeout)
end

return lib.requestModel
