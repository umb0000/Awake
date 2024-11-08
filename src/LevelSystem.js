class LevelSystem {
    constructor() {
        this.level = 1;
        this.currentScore = 0;
        this.scoreToNextLevel = this.calculateScoreToNextLevel();
    }

    calculateScoreToNextLevel() {
        return 100 + Math.pow(this.level - 1, 2) * 20;
    }

    completeTask(priority, isHighPriorityCompleted) {
        const taskScore = this.calculateTaskScore(priority);
        const bonus = isHighPriorityCompleted ? this.calculateBonus(priority) : 0;

        this.currentScore += taskScore + bonus;
        return this.updateLevel();
    }

    uncompleteTask(priority, isHighPriorityCompleted) {
        const taskScore = this.calculateTaskScore(priority);
        const bonus = isHighPriorityCompleted ? this.calculateBonus(priority) : 0;

        this.currentScore = Math.max(0, this.currentScore - (taskScore + bonus));
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

        // 점수가 0일 때 레벨과 점수를 초기화
        if (this.currentScore === 0) {
            this.level = 1;
            this.scoreToNextLevel = this.calculateScoreToNextLevel();
        }

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
        if (priority === "상") taskScore += 10;
        else if (priority === "중") taskScore += 5;
        else if (priority === "하") taskScore += 2;
        return taskScore;
    }

    calculateBonus(priority) {
        if (priority === "상") return 10;
        if (priority === "중") return 5;
        if (priority === "하") return 2;
        return 0;
    }
}

export default LevelSystem;
