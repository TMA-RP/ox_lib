---@param message string
function lib.helpNotify(message)
    AddTextEntry("HelpMsg", message)
    BeginTextCommandDisplayHelp("HelpMsg")
    EndTextCommandDisplayHelp(0, false, false, -1)
end

return lib.helpNotify
