class Site {
    constructor() {
        this.boards = [];
    }
    
    addBoard(board) {
        if (this.boards.find((b) => b.getnames === board.getnames)) {
            throw new Error('하나의 Site에 동일한 이름의 Board를 추가할 수 없다.');
        } else {
            this.boards.push(board);
            board.adding = true;
        }
    }

    findBoardByName(board) {
        return this.boards.find((b) => b.name === board);
    }
}

class Board {
    constructor(name) {
        this.name = name;
        this.articles = [];
        this.adding = false;
        if(!this.name&&this.name===null||this.name==='') {
            throw new Error('Board는 name 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        } 
    }

    publish(article) {
        if(!this.adding) {
            throw new Error('Site 에 추가된 Board만 사용 가능한 것으로 간주하며 사용 불가능한 Board에는 Article을 추가할 수 없다.');
        } else {
            const id = `${this.name}-${Math.random()}`;
            article.setId = id; 
            const day = new Date();
            article.setarticleDay = day.toISOString();
            this.articles.push(article);
            article.adding2 = true;
        }
    }

    getAllArticles() {
        return this.articles;
    }

    get getnames() {
        return this.name;
    }
}

class Article {
    constructor(article = []) {
        this.subject = article.subject;
        this.content = article.content;
        this.author = article.author;
        this.id = '';
        this.createdDate = '';
        this.comments = [];
        this.adding2 = false;
        if(!this.subject&&this.subject===''||this.subject===null) {
            throw new Error('Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        }
        if(!this.content&&this.content===''||this.content===null) {
            throw new Error('Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        }
        if(!this.author&&this.author===''||this.author===null) {
            throw new Error('Article은 subject, content, author 3개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        }

    }

    reply(comment) {
        if(!this.adding2){
            throw new Error('Board에 추가된 Article만 사용 가능한 것으로 간주하며 사용 불가능한 Article에는 Comment를 추가할 수 없다.');
        } else {
            this.comments.push(comment) ; 
            const day = new Date();
            comment.setcommentDay = day.toISOString();
        }
    }

    getAllComments() {
        return this.comments;
    }

    set setId(qwe) {
        this.id = qwe;
    }
    set setarticleDay(qwer) {
        this.createdDate = qwer;
    }
}

class Comment {
    constructor(comment = []) {
        this.content = comment.content;
        this.author = comment.author;
        this.createdDate = '';
        if(!this.content&&this.content===''||this.content===null) {
            throw new Error('Comment는 content, author 2개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        }
        if(!this.author&&this.author===''||this.author===null) {
            throw new Error('Comment는 content, author 2개의 데이터를 포함해야 하며 null 또는 빈 문자열("")은 허용하지 않는다.');
        }
    }

    set setcommentDay(qwer) {
        this.createdDate = qwer;
    }

}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
