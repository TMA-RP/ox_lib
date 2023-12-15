---@param sender string
---@param subject string
---@param msg string
---@param textureDict string
---@param iconType number
---@param flash boolean
---@param saveToBrief boolean
---@param hudColorIndex number
function lib.advancedNotify(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
    if saveToBrief == nil then
        saveToBrief = true
    end
    AddTextEntry('esxAdvancedNotification', msg)
    BeginTextCommandThefeedPost('esxAdvancedNotification')
    if hudColorIndex then
        ThefeedSetNextPostBackgroundColor(hudColorIndex)
    end
    EndTextCommandThefeedPostMessagetext(textureDict, textureDict, false, iconType, sender, subject)
    EndTextCommandThefeedPostTicker(flash or false, saveToBrief)
end

return lib.advancedNotify
