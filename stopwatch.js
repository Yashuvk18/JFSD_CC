<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Stopwatch</title>
    <style>
        #display {
            font-size: 2em;
        }
        button {
            font-size: 1em;
        }
    </style>
</head>
<body>
    <div id="display">00:00:00</div>
    <button onclick="start()">Start</button>
    <button onclick="stop()">Stop</button>
    <button onclick="reset()">Reset</button>

    <script>
        let startTime = 0;
        let elapsedTime = 0;
        let intervalID;

        function updateDisplay() {
            const time = Date.now() - startTime + elapsedTime;
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / (1000 * 60)) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

            document.getElementById('display').textContent = 
                (hours < 10 ? '0' : '') + hours + ':' +
                (minutes < 10 ? '0' : '') + minutes + ':' +
                (seconds < 10 ? '0' : '') + seconds;
        }

        function start() {
            startTime = Date.now();
            intervalID = setInterval(updateDisplay, 1000);
        }

        function stop() {
            elapsedTime += Date.now() - startTime;
            clearInterval(intervalID);
        }

        function reset() {
            startTime = 0;
            elapsedTime = 0;
            clearInterval(intervalID);
            document.getElementById('display').textContent = '00:00:00';
        }
    </script>
</body>
</html>
