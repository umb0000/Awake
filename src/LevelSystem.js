class LevelSystem {
    constructor() {
        this.level = 1;
        this.currentScore = 0;
        this.scoreToNextLevel = this.calculateScoreToNextLevel();
    }

    calculateScoreToNextLevel() {
        return 10 + Math.pow(this.level - 1, 1.5) * 15;
    }

    completeTask(priority, isHighPriorityCompleted) {
        const taskScore = this.calculateTaskScore(priority) + (isHighPriorityCompleted ? 10 : 0);
        
        
        this.currentScore += taskScore;
        return this.updateLevel();
    }

    uncompleteTask(priority, isHighPriorityCompleted) {
        const taskScore = this.calculateTaskScore(priority) + (isHighPriorityCompleted ? 10 : 0);
        this.currentScore = Math.max(0, this.currentScore - taskScore); // 올바른 감소 처리
        return this.updateLevel();
    }

    updateLevel() {
        // 레벨 업 루프
        while (this.currentScore >= this.scoreToNextLevel) {
            this.currentScore -= this.scoreToNextLevel;
            this.level += 1;
            this.scoreToNextLevel = this.calculateScoreToNextLevel();
        }

        // 레벨 다운 루프
        while (this.currentScore < 0 && this.level > 1) {
            this.level -= 1;
            this.scoreToNextLevel = this.calculateScoreToNextLevel();
            this.currentScore += this.scoreToNextLevel;
        }

        // 점수가 음수로 떨어지지 않도록 제한
        this.currentScore = Math.max(0, this.currentScore);

        return {
            level: this.level,
            currentScore: this.currentScore,
            scoreToNextLevel: this.scoreToNextLevel
        };
    }

    calculateBaseScore() {
        return Math.max(5 - Math.floor(this.level / 5), 1);
    }

    calculateTaskScore(priority) {
        const baseScore = this.calculateBaseScore();
        let taskScore = baseScore;
        if (priority === "상") taskScore += 15;
        else if (priority === "중") taskScore += 7;
        else if (priority === "하") taskScore += 3;

        
        return taskScore;
    }

   
}

export default LevelSystem;
