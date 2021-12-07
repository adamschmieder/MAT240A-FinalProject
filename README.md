# MAT240A-FinalProject

Final project for MAT240A 

This project calculates the Fast Fourier Transform of a given audio signal, and transforms that information into useful data to generate visuals whilst live.

This project is intended to be used as a visual generative medium in response to the sound of a piano; the aspects of what data generates what response has been creatively chosen to cater to the frequecy ranges that a piano elicits the most. 

The information that will be used to generate visuals are:
- The FFT analysis of the audio signal, converted from a buffer to a list, split into 9 bands of data
- The onset detections of each frequency band, that sends a bang if a current frequency, compared to a past frequency, has exceeded that onset threshold
- The detection of simultaneous onsets; if these three bands have an onset at the same time, send a bang to a generative feature
- The calculation of "presence," or the frequency of onsets: the average time it takes for onsets to occur, measuring the multiple consecutive onset distances from eachother, and computing the average of those

The generative methods used for each shape are:

_**"Main" shape**_:

**Direct FFT Data**:
- Shape will turn according to volume amount; higher volume, faster turn, and vice versa
**Onset Detection**:
- Shape changes if onset in bands 6, 7, or 8
- Color changes if onset in band 1
- Shape will “bounce” if onset in bands 4, 5, 6
**Simultaneous Onset Detection** (>1 at same time)
- Color mode changes if onset in bands 5, 6, 7, 8
- Draw mode changes if onset in bands 3, 4, 5, or 4, 5, 6, or 5, 6, 7

_**"Lines" Shape:**_
**Direct FFT Data**:
- FFT list is fed into a jit.matrix, which is fed into jit.gen, where sin and cos transformations take place to give the lines their shape. Makes the lines jump and move in response to the audio
**Onset Detection:**
- Color changes if onset in band 2
- Color mode changes if onset in band 1
**Presence Detection:**
- Changes draw mode according to presence of bands 5 and 6. More complex drawing modes are chosen for higher presences, and vice versa
-



