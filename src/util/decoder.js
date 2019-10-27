const decodeQuestion = (question) => {
    return question
        .replace(/&quot;/g,'"')
        .replace(/&#039;/g,"'");
};

export default decodeQuestion;