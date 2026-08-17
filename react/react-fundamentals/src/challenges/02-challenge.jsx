import React, { useState } from "react";

const Challenge2 = (prop) => {
  return (
    <div>
      <h1>
        Hello {prop.username} {prop.userAge}
      </h1>
    </div>
  );
};

export default Challenge2;

// 🧪 Challenge 2 — Props + State

// Ab actual React thinking start.

// Ek Parent component banao:

// App
//  └── User

// Parent mein:

// name = "Hashim"

// state honi chahiye.

// Parent name ko User component ko prop ke through pass kare.

// User screen par:

// Hello, Hashim

// show kare.

// Phir Parent mein ek button:

// Change Name

// Click karne par:

// Hashim → Ali

// hona chahiye.

// Constraints
// name → state
// User → child component
// name child ko → prop
// Child mein prop mutate nahi karna
// useState use karna
// Button parent mein hona chahiye
