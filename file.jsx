// JSX files contain XML-style syntax to JS files, expecially in React, the JS library for building UIs
// Here is an example from http://buildwithreact.com/tutorial/jsx:

<div className="red">Children Text</div>;
<MyCounter count={3 + 5} />;

// Here, we set the "scores" attribute below to a JavaScript object.
var gameScores = {
  player1: 2,
  player2: 5
};
<DashboardUnit data-index="2">
  <h1>Scores</h1>
  <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>;
