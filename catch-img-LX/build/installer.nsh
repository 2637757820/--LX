!macro customInstall
   ; WriteRegStr HKCR "Directory\shell\CatchImg" "" "Save screenshot here w&ith CatchImg"
   ; WriteRegStr HKCR "Directory\shell\CatchImg" "Icon" "$INSTDIR\CatchImg.exe"
   ; WriteRegStr HKCR "Directory\shell\CatchImg\command" "" '"$INSTDIR\CatchImg.exe" "save" "%V"'

   ; WriteRegStr HKCR "Directory\Background\shell\CatchImg" "" "Save screenshot here w&ith CatchImg"
   ; WriteRegStr HKCR "Directory\Background\shell\CatchImg" "Icon" "$INSTDIR\CatchImg.exe"
   ; WriteRegStr HKCR "Directory\Background\shell\CatchImg\command" "" '"$INSTDIR\CatchImg.exe" "save" "%V"'
   SetRegView 64
   WriteRegStr HKCR "*\shell\CatchImg" "" "Upload img w&ith CatchImg"
   WriteRegStr HKCR "*\shell\CatchImg" "Icon" "$INSTDIR\CatchImg.exe"
   WriteRegStr HKCR "*\shell\CatchImg\command" "" '"$INSTDIR\CatchImg.exe" "upload" "%1"'
   SetRegView 32
   WriteRegStr HKCR "*\shell\CatchImg" "" "Upload img w&ith CatchImg"
   WriteRegStr HKCR "*\shell\CatchImg" "Icon" "$INSTDIR\CatchImg.exe"
   WriteRegStr HKCR "*\shell\CatchImg\command" "" '"$INSTDIR\CatchImg.exe" "upload" "%1"'
!macroend
!macro customUninstall
   DeleteRegKey HKCR "*\shell\CatchImg"
   ; DeleteRegKey HKCR "Directory\shell\CatchImg"
   ; DeleteRegKey HKCR "Directory\Background\shell\CatchImg"
!macroend
