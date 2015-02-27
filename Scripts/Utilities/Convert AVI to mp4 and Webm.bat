@echo off

REM "HandBrake_CLI/HandBrakeCLI.exe" --help


echo AVI files found:
for %%f in (*.avi) do (
	echo %%~nf
)
echo This batch file will convert all .AVI files in this folder.

PAUSE


for %%f in (*.avi) do (
	echo %%~nf.avi
	echo CONVERT TO .mp4
	"HandBrake_CLI/HandBrakeCLI.exe" -i "%%~nf.avi" -o "Converted_Videos/%%~nf.mp4"
	echo CONVERT TO .webm
	"ffmpeg/bin/ffmpeg.exe" -i "%%~nf.avi" -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "Converted_Videos/%%~nf.webm"
)


PAUSE