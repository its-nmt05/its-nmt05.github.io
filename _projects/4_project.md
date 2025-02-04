---
layout: page
title: Sim3D
description: A 3D physics engine written entirely from scratch in C++ using OpenGL for particle and cloth simulation
img: assets/img/sim3d_cover.png
importance: 3
category: work
---

Welcome to Sim3D! This is the successor to Sim2D which was written in Java and Processing.
This engine is designed to simulate particles in a 3D environment using OpenGL and C++. It allows for particle collision and movement, and includes a scene editor for setting up simulation parameters.

{% include video.liquid path="assets/video/sim3d_demo.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}

### Project Overview

The primary purpose of this particle simulation engine is to create particle simulations in C++ using OpenGL from scratch as much as possible, without relying on third-party libraries. The particles are represented as spheres and can interact with each other and with walls. The final goal is to add physics features like constraints, springs, etc., to turn it into a cloth simulation.

### Key Features

- Particle collision and movement
- Scene editor for setting up simulation parameters
- Different types of advanced lighting methods (currently includes Phong)
- GUI for the scene editor (using Dear ImGui and ImGuizmo)

### Usage

Use the following keyboard controls during simulation:
   - **WASD**: Camera movement
   - **Left Shift**: Toggle cursor visibility to interact with the GUI
   - **Space**: Move camera up
   - **Left Ctrl**: Move camera down
   - **Enter**: Play/pause simulation
   - If you are in selection mode, you can use the arrow keys to select the object, and more it around with gizmos

For more details, visit our [website](https://anm-ol.github.io/).