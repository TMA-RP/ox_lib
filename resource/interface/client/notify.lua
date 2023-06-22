---@alias NotificationPosition 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left' | 'center-right' | 'center-left'
---@alias NotificationType 'info' | 'warning' | 'success' | 'error'

---@class NotifyProps
---@field id? string
---@field title? string
---@field description? string
---@field duration? number
---@field position? NotificationPosition
---@field type? NotificationType
---@field style? { [string]: any }
---@field icon? string | {[1]: IconProp, [2]: string};
---@field iconColor? string;

---@param data NotifyProps
function lib.notify(data)
    data.position = "bottom-left"
    data.style = {
        background = "rgba(0, 0, 0, .5)",
        borderRadius = "0 0.5em 0.5em 0",
        borderLeft = "0.3em solid #2a7aff",
        marginLeft = "0"
    }
    SendNUIMessage({
        action = 'notify',
        data = data
    })
end

---@class DefaultNotifyProps
---@field title? string
---@field description? string
---@field duration? number
---@field position? NotificationPosition
---@field status? 'info' | 'warning' | 'success' | 'error'
---@field id? number

---@param data DefaultNotifyProps
function lib.defaultNotify(data)
    -- Backwards compat for v3 
    data.position = "bottom-left"
    data.style = {
        background = "rgba(0, 0, 0, .5)",
        borderRadius = "0 0.5em 0.5em 0",
        borderLeft = "0.3em solid #2a7aff",
        marginLeft = "0"
    }
    data.type = data.status
    if data.type == 'inform' then data.type = 'info' end
    return lib.notify(data)
end

RegisterNetEvent('ox_lib:notify', lib.notify)
RegisterNetEvent('ox_lib:defaultNotify', lib.defaultNotify)