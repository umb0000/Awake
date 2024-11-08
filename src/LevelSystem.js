import './output.css';

// LevelSystem.js
class LevelSystem {
    constructor() {
      this.level = 1;
      this.currentScore = 0;
      this.scoreToNextLevel = this.calculateScoreToNextLevel();
    }
  
    calculateScoreToNextLevel() {
      return 10 + Math.pow(this.level - 1, 2) * 5;
    }
  
    completeTask(priority, isHighPriorityCompleted) {
      const taskScore = this.calculateTaskScore(priority);
      const bonus = this.calculateBonus(priority, isHighPriorityCompleted);
      this.currentScore += taskScore + bonus;
      return this.checkLevelUp();
    }
  
    uncompleteTask(priority, isHighPriorityCompleted) {
      const taskScore = this.calculateTaskScore(priority);
      const bonus = this.calculateBonus(priority, isHighPriorityCompleted);
      this.currentScore -= (taskScore + bonus);
      this.currentScore = Math.max(0, this.currentScore); // 음수 방지


    // 레벨 다운 처리
      while (this.currentScore < 0 && this.level > 1) {
        this.level -= 1;
        this.scoreToNextLevel = this.calculateScoreToNextLevel();
        this.currentScore += this.scoreToNextLevel; // 레벨 다운 시 부족한 점수 채우기
    }
      return this.checkLevelUp();
    }
  
    calculateBaseScore() {
      return Math.max(10 - Math.floor(this.level / 5), 2);
    }
  
    calculateTaskScore(priority) {
      const baseScore = this.calculateBaseScore();
      let taskScore = baseScore;
      if (priority === '상') taskScore += 5;
      else if (priority === '중') taskScore += 3;
      else if (priority === '하') taskScore += 1;
      return taskScore;
    }
  
    calculateBonus(priority, isHighPriorityCompleted) {
      let bonus = 0;
      if (priority === '상') {
        bonus += 3;
        if (isHighPriorityCompleted) bonus += 5;
      } else if (priority === '중') bonus += 2;
      else if (priority === '하') bonus += 1;
      return bonus;
    }
  
    checkLevelUp() {
      const leveledUp = this.currentScore >= this.scoreToNextLevel;
      if (leveledUp) {
        this.level += 1;
        this.currentScore -= this.scoreToNextLevel;
        this.scoreToNextLevel = this.calculateScoreToNextLevel();
    }
        else if (this.currentScore < 0 && this.level > 1) {
            // 레벨 다운 로직 추가
            this.level -= 1;
            this.scoreToNextLevel = this.calculateScoreToNextLevel();
            this.currentScore += this.scoreToNextLevel;
          }
      return { level: this.level, currentScore: this.currentScore, scoreToNextLevel: this.scoreToNextLevel };
    }


    uncompleteTask(priority, isHighPriorityCompleted) {
        const taskScore = this.calculateTaskScore(priority);
        const bonus = this.calculateBonus(priority, isHighPriorityCompleted);
        this.currentScore -= (taskScore + bonus);
        this.currentScore = Math.max(0, this.currentScore); // 음수 방지
    
        // 레벨 다운 로직 추가
        while (this.currentScore < 0 && this.level > 1) {
          this.level -= 1;
          this.scoreToNextLevel = this.calculateScoreToNextLevel();
          this.currentScore += this.scoreToNextLevel; // 레벨 다운 시 다음 레벨에 필요한 점수만큼 채움
        }
    
        return this.checkLevelUp();
      }
  }
  
  export default LevelSystem;
  