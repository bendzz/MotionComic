@echo off

REM "HandBrake_CLI/HandBrakeCLI.exe" --help


echo MP4 files found:
for %%f in (*.mp4) do (
	echo %%~nf
)
echo This batch file will convert all .MP4 files in this folder.

PAUSE


for %%f in (*.mp4) do (
	echo %%~nf.mp4
	echo CONVERT TO .mp4
	"HandBrake_CLI/HandBrakeCLI.exe" -i "%%~nf.mp4" -o "Converted_Videos/%%~nf.mp4"
	echo CONVERT TO .webm
	"ffmpeg/bin/ffmpeg.exe" -i "%%~nf.mp4" -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "Converted_Videos/%%~nf.webm"
)


PAUSE