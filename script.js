let timer;
    let isRunning = false;
    let seconds = 0;
    let lapCount = 0;

    function updateDisplay() {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
    }

    function start() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }

    function stop() {
      isRunning = false;
      clearInterval(timer);
    }

    function reset() {
      stop();
      seconds = 0;
      lapCount = 0;
      updateDisplay();
      document.getElementById('laps').innerHTML = '';
    }

    function recordLap() {
      if (!isRunning) return;
      lapCount++;
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      const lapTime = `${hrs}:${mins}:${secs}`;
      const lapEntry = document.createElement('div');
      lapEntry.className = 'lap-item';
      lapEntry.textContent = `Lap ${lapCount}: ${lapTime}`;
      document.getElementById('laps').prepend(lapEntry); // Show latest lap on top
    }

    updateDisplay();
