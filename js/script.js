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
  const Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value)

  // Convert Fahrenheit to Celsius using the formula: (F - 32) * 5 / 9
  const Celsius = (Fahrenheit - 32) * 5 / 9

  // Display the result
  document.getElementById("Answer").innerHTML = `The temperature in Celsius is: <strong>${Celsius.toFixed(3)}</strong>°C`
}
