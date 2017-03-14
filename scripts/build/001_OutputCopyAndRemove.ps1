param([string]$sourcePath, [string]$targetPath) #Must be the first statement in your script

Remove-Item -Recurse -Force ([IO.Path]::Combine($targetPath, "*"))
Copy-Item ([IO.Path]::Combine($sourcePath, "dist\*")) $targetPath