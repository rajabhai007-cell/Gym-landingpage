import React from "react";
 // We'll create this CSS file for styling

const trainers = [
  { name: "John Doe", role: "Personal Trainer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jane Smith", role: "Cardio Expert", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Mike Johnson", role: "Weight Lifting Coach", img: "https://randomuser.me/api/portraits/men/56.jpg" },
];

export default function Trainer() {
  return (
    <section id="services" className="trainers">
      <div className="container">
        <h2>Our Trainers</h2>
        <div className="trainer-cards">
          {trainers.map((trainer) => (
            <div className="trainer" key={trainer.name}>
              <img src={trainer.img} alt={trainer.name} />
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}