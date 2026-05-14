Add-Type -AssemblyName System.Drawing
$path = "public\assets\profissionais\logo.ico"
$out = "public\assets\profissionais\logo.png"
if (Test-Path $path) {
    $icon = New-Object System.Drawing.Icon($path)
    $bmp = $icon.ToBitmap()
    $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $icon.Dispose()
    Write-Host "Conversão concluída: $out"
} else {
    Write-Error "Arquivo não encontrado: $path"
}
