declare type Exams = {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
} & DatabaseProperties;

declare type CheckResponse = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    // answers: {};
  }[];
  correctQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
    // answers: {};
  }[];
};
declare type CheckResponseSubject = {
  message: string;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  subjects: [
    {
      _id: string;
      name: string;
      icon: string;
    },
  ];
};
