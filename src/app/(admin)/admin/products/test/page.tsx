"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import StepWizard from "react-step-wizard";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <StepWizard>
        {/* Step 1 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 1: Personal Info</h2>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Button className="mt-4" onClick={() => StepWizard.prototype.nextStep()}>
            Next
          </Button>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 2: Account Info</h2>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <Button onClick={() => StepWizard.prototype.previousStep()}>Back</Button>
            <Button onClick={() => StepWizard.prototype.nextStep()}>Next</Button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 3: Review</h2>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <div className="flex justify-between mt-4">
            <Button onClick={() => StepWizard.prototype.previousStep()}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </StepWizard>
    </div>
  );
};

export default MultiStepForm;
