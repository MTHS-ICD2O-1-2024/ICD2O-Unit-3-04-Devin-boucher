// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Converts Fahrenheit to Celsius
 */
function Calculate() {
  // Get input values
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // Convert Fahrenheit to Celsius using the formula: (F - 32) * 5 / 9
  const celsius = (fahrenheit - 32) * (5 / 9)

  // Display the result
  document.getElementById("Answer").innerHTML =
    `The temperature in Celsius is: <strong>${celsius.toFixed(3)}</strong>°C`
}
