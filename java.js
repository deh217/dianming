document.addEventListener('DOMContentLoaded', function() {
      const startBtn = document.getElementById('startBtn');
      const stopBtn = document.getElementById('stopBtn');
      const studentsList = document.getElementById('students');
      const selectedStudent = document.getElementById('selectedStudent');
      const studentItems = studentsList.querySelectorAll('li');
      
      let intervalId = null;
      let isSelecting = false;
      
      // 为每个学生项添加点击选中效果
      studentItems.forEach(student => {
        student.addEventListener('click', function() {
          if (!isSelecting) {
            selectedStudent.textContent = this.textContent;
            removeSelectedClass();
            this.classList.add('selected');
          }
        });
      });
      
      // 移除所有学生的选中状态
      function removeSelectedClass() {
        studentItems.forEach(student => {
          student.classList.remove('selected');
        });
      }
      
      // 随机选择学生
      function selectRandomStudent() {
        removeSelectedClass();
        const randomIndex = Math.floor(Math.random() * studentItems.length);
        const randomStudent = studentItems[randomIndex];
        randomStudent.classList.add('selected');
        selectedStudent.textContent = randomStudent.textContent;
      }
      
      // 开始随机选择
      startBtn.addEventListener('click', function() {
        if (!isSelecting) {
          isSelecting = true;
          startBtn.disabled = true;
          stopBtn.disabled = false;
          intervalId = setInterval(selectRandomStudent, 100);
        }
      });
      
      // 停止随机选择
      stopBtn.addEventListener('click', function() {
        if (isSelecting) {
          isSelecting = false;
          startBtn.disabled = false;
          stopBtn.disabled = true;
          clearInterval(intervalId);
        }
      });
    });
  