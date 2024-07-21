import React, { useState, useEffect } from 'react';
import * as agi from 'agi-js';

const AGI = () => {
  const [agent, setAgent] = useState(new agi.Agent());
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const initializeAgent = async () => {
      await agent.initialize();
    };
    initializeAgent();
  }, []);

  const handleSetGoal = (event) => {
    setGoal(event.target.value);
  };

  const handlePlanGeneration = () => {
    const plan = agent.generatePlan(goal);
    setPlan(plan);
  };

  return (
    <div>
      <h1>Artificial General Intelligence (AGI)</h1>
      <input type="text" value={goal} onChange={handleSetGoal} placeholder="Enter goal" />
      <button onClick={handlePlanGeneration}>Generate Plan</button>
      <p>Plan: {plan.map((action) => action.name).join(', ')}</p>
    </div>
  );
};

export default AGI;
