---@param message string
function lib.helpNotify(message)
    AddTextEntry("HelpMsg", message)
    BeginTextCommandDisplayHelp("HelpMsg")
    EndTextCommandDisplayHelp(0, false, true, -1)
end

return lib.helpNotify
