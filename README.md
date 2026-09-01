# Lab 31 
Compare buffering the whole file, stream and using bun

|Approach | Memory use | Suitable for|
|-      | -| -|
|buffer | Whole file in RAM | Small files(<~ 100 MB)|
|stream |constant, small | Huge files, production|
|bun    | varies | Fast script, TS included|


On bumping rows to 1_000_000
Approach | Time taken (ms)
   --     |    --
buffer |  796.85
stream |  911.95
bun (bun parse-stream.js) | 1084.73
bun (bun parse-bun.ts)| 459.65