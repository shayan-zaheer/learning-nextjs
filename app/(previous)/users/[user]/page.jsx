import React from 'react';

export default function User({ params }) {
  const user = React.use(params); // Unwrap `params` with React.use()
  console.log(user);

  return (
    <div>{user.user}</div>
  );
} 