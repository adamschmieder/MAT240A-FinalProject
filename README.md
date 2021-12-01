# MAT240A-FinalProject

Final project for MAT240A 

This project calculates the Fast Fourier Transform of a given audio signal, and transforms that information into useful data to generate visuals whilst live.

This project is intended to be used as a visual generative medium in response to the sound of a piano; the aspects of what data generates what response has been creatively chosen to cater to the frequecy ranges that a piano elicits the most. 

The information that will be used to generate visuals are:
- The FFT analysis of the audio signal, converted from a buffer to a list, split into 9 bands of data
- The onset detections of each frequency band, that sends a bang if a current frequency, compared to a past frequency, has exceeded that onset threshold
- The detection of simultaneous onsets; if these three bands have an onset at the same time, send a bang to a generative feature


