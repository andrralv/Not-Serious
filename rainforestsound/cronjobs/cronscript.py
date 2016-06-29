#!/usr/bin/env python

import json

playlist = json.loads(open("playlist.json").read())
filecounter = open("counter.txt")
counter = filecounter.read()
counter = int(counter)
filecounter.close()
if (counter > 30):
    counter = 0
else:
    counter = counter + 1
    
# rest of code in here

artist = playlist[counter]["artist"]
album = playlist[counter]["album"]
url = playlist[counter]["url"]

selected = {"artist": artist, "album" : album, "url" : url}
 
jsonWriter = open("selectedAlbum.json", "w")
jsonWriter.write(json.dumps(selected))
# end of code

writer = open("counter.txt", "w")
writer.write(str(counter))
jsonWriter.close()
writer.close()

