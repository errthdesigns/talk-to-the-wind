import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

// Shape generators
const shapeGenerators = {
  spirit: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.3) * 200;
      const r = 30 + Math.sin(y * 0.02) * 20 + Math.random() * 40;
      positions.push([Math.cos(angle) * r, y, Math.sin(angle) * r]);
    }
    return positions;
  },
  
  human: (count) => {
    const positions = [];
    for (let i = 0; i < count * 0.12; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 35 + Math.random() * 5;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) + 140, r * Math.cos(phi)]);
    }
    for (let i = 0; i < count * 0.35; i++) {
      const y = Math.random() * 100 + 20;
      const angle = Math.random() * Math.PI * 2;
      const radiusX = 40 + Math.sin(y * 0.05) * 10;
      positions.push([Math.cos(angle) * radiusX, y, Math.sin(angle) * 25]);
    }
    for (let i = 0; i < count * 0.2; i++) {
      const t = Math.random();
      const side = i < count * 0.1 ? -1 : 1;
      positions.push([side * (55 + t * 70), 90 - t * 50, (Math.random() - 0.5) * 20]);
    }
    for (let i = 0; i < count * 0.3; i++) {
      const t = Math.random();
      const side = i < count * 0.15 ? -1 : 1;
      positions.push([side * 22, 20 - t * 130, (Math.random() - 0.5) * 25]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 150, Math.random() * 200 - 50, (Math.random() - 0.5) * 60]);
    return positions.slice(0, count);
  },

  heart: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const r = Math.random();
      const x = 16 * Math.pow(Math.sin(t), 3) * (5 + r * 3);
      const y = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * (5 + r * 3);
      positions.push([x, y + 50, (Math.random() - 0.5) * 40]);
    }
    return positions;
  },

  star: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const points = 5;
      const segment = Math.floor((angle / (Math.PI * 2)) * points * 2);
      const r = segment % 2 === 0 ? 100 : 40;
      const blend = Math.random();
      const actualR = r * blend + (segment % 2 === 0 ? 40 : 100) * (1 - blend);
      positions.push([Math.cos(angle) * actualR, Math.sin(angle) * actualR + 50, (Math.random() - 0.5) * 30]);
    }
    return positions;
  },

  sphere: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 80 + Math.random() * 20;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) + 50, r * Math.cos(phi)]);
    }
    return positions;
  },

  spiral: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 8;
      const r = 20 + t * 3 + Math.random() * 15;
      const y = (i / count) * 250 - 80;
      positions.push([Math.cos(t) * r, y, Math.sin(t) * r]);
    }
    return positions;
  },

  tornado: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const angle = t * Math.PI * 12 + Math.random() * 0.5;
      const r = 15 + t * 90 + Math.random() * 20;
      positions.push([Math.cos(angle) * r, t * 300 - 100, Math.sin(angle) * r]);
    }
    return positions;
  },

  wave: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 250;
      const z = (Math.random() - 0.5) * 150;
      const y = Math.sin(x * 0.05) * 40 + Math.sin(z * 0.08) * 20 + (Math.random() - 0.5) * 15;
      positions.push([x, y, z]);
    }
    return positions;
  },

  mountain: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 250;
      const z = (Math.random() - 0.5) * 250;
      const dist = Math.sqrt(x * x + z * z);
      const height = Math.max(0, 150 - dist * 0.8 + (Math.random() - 0.5) * 30);
      positions.push([x, height - 80, z]);
    }
    return positions;
  },

  galaxy: (count) => {
    const positions = [];
    const arms = 3;
    for (let i = 0; i < count; i++) {
      const arm = i % arms;
      const t = Math.random();
      const spiralAngle = (arm / arms) * Math.PI * 2 + t * Math.PI * 2;
      const r = t * 120 + Math.random() * 20;
      const spread = (1 - t) * 0.5 + 0.1;
      positions.push([Math.cos(spiralAngle + (Math.random() - 0.5) * spread) * r, (Math.random() - 0.5) * 20 * (1 - t), Math.sin(spiralAngle + (Math.random() - 0.5) * spread) * r]);
    }
    return positions;
  },

  tree: (count) => {
    const positions = [];
    for (let i = 0; i < count * 0.75; i++) {
      const y = Math.random() * 200 - 50;
      const radius = Math.max(5, (150 - y) * 0.5 + Math.random() * 15);
      const angle = Math.random() * Math.PI * 2;
      positions.push([Math.cos(angle) * radius, y, Math.sin(angle) * radius]);
    }
    for (let i = 0; i < count * 0.15; i++) {
      const y = -50 - Math.random() * 60;
      const angle = Math.random() * Math.PI * 2;
      positions.push([Math.cos(angle) * 15, y, Math.sin(angle) * 15]);
    }
    for (let i = 0; i < count * 0.1; i++) {
      const angle = Math.random() * Math.PI * 2;
      positions.push([Math.cos(angle) * Math.random() * 20, 160 + Math.random() * 20, Math.sin(angle) * Math.random() * 20]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 50, Math.random() * 200, (Math.random() - 0.5) * 50]);
    return positions.slice(0, count);
  },

  bird: (count) => {
    const positions = [];
    // Wings
    for (let i = 0; i < count * 0.7; i++) {
      const side = i < count * 0.35 ? 1 : -1;
      const t = Math.random();
      const wingspan = 80 + t * 60;
      const y = Math.sin(t * Math.PI) * 30;
      positions.push([side * wingspan * t, y + 50, (Math.random() - 0.5) * 10]);
    }
    // Body
    for (let i = 0; i < count * 0.3; i++) {
      const t = Math.random();
      positions.push([(Math.random() - 0.5) * 20, 50 + (Math.random() - 0.5) * 20, t * 60 - 30]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 100, 50 + (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40]);
    return positions.slice(0, count);
  },

  flame: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const y = t * 180 - 60;
      const r = (1 - t * 0.7) * 50 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;
      const flicker = Math.sin(t * 10 + angle * 3) * 10;
      positions.push([Math.cos(angle) * r + flicker, y, Math.sin(angle) * r]);
    }
    return positions;
  },

  rain: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push([(Math.random() - 0.5) * 200, Math.random() * 300 - 100, (Math.random() - 0.5) * 100]);
    }
    return positions;
  },

  cloud: (count) => {
    const positions = [];
    const blobs = 5;
    for (let i = 0; i < count; i++) {
      const blob = Math.floor(Math.random() * blobs);
      const blobX = (blob - 2) * 40;
      const blobY = Math.sin(blob * 1.5) * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 30 + Math.random() * 15;
      positions.push([blobX + r * Math.sin(phi) * Math.cos(theta), blobY + r * Math.sin(phi) * Math.sin(theta) * 0.6 + 50, r * Math.cos(phi)]);
    }
    return positions;
  },

  scatter: (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 50 + Math.random() * 150;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)]);
    }
    return positions;
  },

  // Animal shapes
  dog: (count) => {
    const positions = [];
    // Body (oval)
    for (let i = 0; i < count * 0.4; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const rx = 50, ry = 35, rz = 30;
      positions.push([rx * Math.sin(phi) * Math.cos(theta), ry * Math.sin(phi) * Math.sin(theta), rz * Math.cos(phi) - 20]);
    }
    // Head (sphere)
    for (let i = 0; i < count * 0.2; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 30 + Math.random() * 5;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) + 20, r * Math.cos(phi) + 60]);
    }
    // Ears (two triangles)
    for (let i = 0; i < count * 0.1; i++) {
      const side = i < count * 0.05 ? 1 : -1;
      const t = Math.random();
      positions.push([side * (20 + t * 15), 40 + t * 30, 70 + (Math.random() - 0.5) * 10]);
    }
    // Tail (curved)
    for (let i = 0; i < count * 0.1; i++) {
      const t = Math.random();
      const curl = Math.sin(t * Math.PI) * 20;
      positions.push([curl, 10 + t * 40, -80 - t * 30]);
    }
    // Legs
    for (let i = 0; i < count * 0.2; i++) {
      const leg = Math.floor(i / (count * 0.05));
      const t = Math.random();
      const legX = leg < 2 ? -25 : 25;
      const legZ = leg % 2 === 0 ? 20 : -40;
      positions.push([legX + (Math.random() - 0.5) * 10, -35 - t * 50, legZ + (Math.random() - 0.5) * 10]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 100]);
    return positions.slice(0, count);
  },

  cat: (count) => {
    const positions = [];
    // Body (sleek oval)
    for (let i = 0; i < count * 0.35; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const rx = 40, ry = 25, rz = 25;
      positions.push([rx * Math.sin(phi) * Math.cos(theta), ry * Math.sin(phi) * Math.sin(theta), rz * Math.cos(phi)]);
    }
    // Head (rounder)
    for (let i = 0; i < count * 0.2; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 25 + Math.random() * 5;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) + 15, r * Math.cos(phi) + 50]);
    }
    // Pointy ears
    for (let i = 0; i < count * 0.1; i++) {
      const side = i < count * 0.05 ? 1 : -1;
      const t = Math.random();
      positions.push([side * (15 + t * 5), 30 + t * 35, 55 + (Math.random() - 0.5) * 5]);
    }
    // Long tail (S-curve)
    for (let i = 0; i < count * 0.15; i++) {
      const t = i / (count * 0.15);
      const curl = Math.sin(t * Math.PI * 2) * 25;
      positions.push([curl, 5 + Math.sin(t * Math.PI) * 30, -30 - t * 80]);
    }
    // Legs (slender)
    for (let i = 0; i < count * 0.2; i++) {
      const leg = Math.floor(i / (count * 0.05));
      const t = Math.random();
      const legX = leg < 2 ? -20 : 20;
      const legZ = leg % 2 === 0 ? 15 : -20;
      positions.push([legX + (Math.random() - 0.5) * 8, -25 - t * 45, legZ + (Math.random() - 0.5) * 8]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 120]);
    return positions.slice(0, count);
  },

  fish: (count) => {
    const positions = [];
    // Body (fish-shaped)
    for (let i = 0; i < count * 0.6; i++) {
      const t = Math.random() * Math.PI * 2;
      const bodyT = Math.random();
      const bodyX = (bodyT - 0.5) * 120;
      const bodyRadius = 35 * Math.sin(bodyT * Math.PI);
      positions.push([bodyX, Math.cos(t) * bodyRadius, Math.sin(t) * bodyRadius * 0.6]);
    }
    // Tail fin (fan shape)
    for (let i = 0; i < count * 0.2; i++) {
      const t = Math.random();
      const spread = (Math.random() - 0.5) * 60;
      positions.push([-60 - t * 40, spread * t, (Math.random() - 0.5) * 20 * t]);
    }
    // Dorsal fin
    for (let i = 0; i < count * 0.1; i++) {
      const t = Math.random();
      positions.push([(t - 0.5) * 40, 30 + t * 25, (Math.random() - 0.5) * 5]);
    }
    // Side fins
    for (let i = 0; i < count * 0.1; i++) {
      const side = i < count * 0.05 ? 1 : -1;
      const t = Math.random();
      positions.push([20 + (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, side * (15 + t * 20)]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 40]);
    return positions.slice(0, count);
  },

  butterfly: (count) => {
    const positions = [];
    // Wings (figure-8 / infinity shape on each side)
    for (let i = 0; i < count * 0.8; i++) {
      const side = i < count * 0.4 ? 1 : -1;
      const t = Math.random() * Math.PI * 2;
      const wingScale = 60 + Math.random() * 20;
      // Butterfly wing curve
      const x = side * wingScale * Math.sin(t) * (Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t)) * 0.15;
      const y = wingScale * Math.cos(t) * (Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t)) * 0.15;
      positions.push([x, y + 20, (Math.random() - 0.5) * 10]);
    }
    // Body (thin vertical)
    for (let i = 0; i < count * 0.15; i++) {
      const t = Math.random();
      positions.push([(Math.random() - 0.5) * 8, t * 80 - 20, (Math.random() - 0.5) * 8]);
    }
    // Antennae
    for (let i = 0; i < count * 0.05; i++) {
      const side = i < count * 0.025 ? 1 : -1;
      const t = Math.random();
      positions.push([side * (5 + t * 15), 60 + t * 25, 5 + t * 10]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 15]);
    return positions.slice(0, count);
  },

  rabbit: (count) => {
    const positions = [];
    // Body (round)
    for (let i = 0; i < count * 0.35; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 40 + Math.random() * 10;
      positions.push([r * Math.sin(phi) * Math.cos(theta) * 0.8, r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi) * 0.9 - 20]);
    }
    // Head
    for (let i = 0; i < count * 0.2; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 28 + Math.random() * 5;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) + 25, r * Math.cos(phi) + 40]);
    }
    // Long ears
    for (let i = 0; i < count * 0.2; i++) {
      const side = i < count * 0.1 ? 1 : -1;
      const t = Math.random();
      positions.push([side * (12 + (Math.random() - 0.5) * 8), 45 + t * 70, 45 + (Math.random() - 0.5) * 10]);
    }
    // Fluffy tail
    for (let i = 0; i < count * 0.1; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 15 + Math.random() * 5;
      positions.push([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) - 10, r * Math.cos(phi) - 60]);
    }
    // Legs
    for (let i = 0; i < count * 0.15; i++) {
      const t = Math.random();
      const front = i < count * 0.075;
      const side = (i % 2 === 0) ? 1 : -1;
      positions.push([side * 18, -30 - t * 30, front ? 20 : -30]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 80]);
    return positions.slice(0, count);
  },

  dolphin: (count) => {
    const positions = [];
    // Streamlined body
    for (let i = 0; i < count * 0.5; i++) {
      const t = Math.random();
      const bodyX = (t - 0.5) * 150;
      const bodyRadius = 30 * Math.sin(t * Math.PI) * (1 - t * 0.3);
      const angle = Math.random() * Math.PI * 2;
      positions.push([bodyX, Math.cos(angle) * bodyRadius, Math.sin(angle) * bodyRadius * 0.8]);
    }
    // Dorsal fin
    for (let i = 0; i < count * 0.1; i++) {
      const t = Math.random();
      positions.push([(Math.random() - 0.5) * 20, 25 + t * 35, (Math.random() - 0.5) * 8]);
    }
    // Tail flukes
    for (let i = 0; i < count * 0.15; i++) {
      const side = i < count * 0.075 ? 1 : -1;
      const t = Math.random();
      positions.push([-75 - t * 20, side * t * 35, (Math.random() - 0.5) * 10]);
    }
    // Flippers
    for (let i = 0; i < count * 0.1; i++) {
      const side = i < count * 0.05 ? 1 : -1;
      const t = Math.random();
      positions.push([20 + t * 15, -10 - t * 20, side * (15 + t * 15)]);
    }
    // Snout
    for (let i = 0; i < count * 0.15; i++) {
      const t = Math.random();
      const angle = Math.random() * Math.PI * 2;
      const r = 8 * (1 - t);
      positions.push([75 + t * 30, Math.cos(angle) * r, Math.sin(angle) * r]);
    }
    while (positions.length < count) positions.push([(Math.random() - 0.5) * 120, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 40]);
    return positions.slice(0, count);
  }
};

// Color palettes for different moods
const moodColors = {
  calm: { base: [0.4, 0.6, 0.9], accent: [0.5, 0.7, 1.0] },
  curious: { base: [0.6, 0.8, 0.95], accent: [0.8, 0.9, 1.0] },
  playful: { base: [0.9, 0.6, 0.8], accent: [1.0, 0.7, 0.9] },
  fierce: { base: [1.0, 0.4, 0.2], accent: [1.0, 0.6, 0.3] },
  melancholy: { base: [0.4, 0.45, 0.7], accent: [0.5, 0.55, 0.8] },
  joyful: { base: [1.0, 0.85, 0.3], accent: [1.0, 0.95, 0.5] },
  mysterious: { base: [0.5, 0.3, 0.8], accent: [0.7, 0.4, 0.95] },
  peaceful: { base: [0.3, 0.75, 0.6], accent: [0.4, 0.85, 0.7] },
  love: { base: [0.95, 0.3, 0.45], accent: [1.0, 0.5, 0.6] },
  default: { base: [0.5, 0.65, 0.9], accent: [0.6, 0.75, 1.0] }
};

export default function TalkToTheWind() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputText, setInputText] = useState('');
  const [windState, setWindState] = useState('idle'); // idle, listening, thinking, responding
  const [currentShape, setCurrentShape] = useState('spirit');
  const [currentMood, setCurrentMood] = useState('calm');
  const [windMessage, setWindMessage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceError, setVoiceError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [logMessages, setLogMessages] = useState([
    { type: 'SYS', text: 'INITIALIZING_PARTICLE_MATRIX...' },
    { type: 'SYS', text: 'AWAITING_VOCAL_INPUT' }
  ]);
  
  // Settings
  const [intensity, setIntensity] = useState(0.5);
  const [turbulence, setTurbulence] = useState(45);
  const [velocity, setVelocity] = useState(80);
  const [resonance, setResonance] = useState(12);
  const [calmness, setCalmness] = useState(0.7);
  
  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Speech recognition ref
  const recognitionRef = useRef(null);
  
  const sceneRef = useRef(null);
  const stateRef = useRef({
    motionPreset: 'drift',
    intensity: 0.5,
    turbulence: 0.45,
    velocity: 0.8,
    resonance: 0.12,
    gustDirection: 0,
    breathePhase: 0,
    shimmerTime: 0,
    isShimmering: false,
    transitionProgress: 0,
    isTransitioning: false,
    edgeBrightness: 0,
    messageShowing: false,
    particleOpacity: 1.0
  });

  // Wind interpretation patterns - exact phrase matching first, then keyword fallback
  // Complete list from reference: 30 exact phrases with longer poetic responses
  const exactPhrases = {
    // From list 1 (15 phrases)
    'i feel lost': { shape: 'rain', mood: 'melancholy', motion: 'drift', message: 'Even lost things drift home eventually. The rain knows no direction, yet it always finds the earth. Trust your falling.' },
    'inspire me': { shape: 'flame', mood: 'curious', motion: 'pulse', message: 'You already burn bright, dear one. The spark was never missing — it was waiting for you to notice its warmth.' },
    'what are you': { shape: 'spirit', mood: 'mysterious', motion: 'breathe', message: 'I am what remains when everything else fades. The pause between heartbeats. The space where wonder lives.' },
    'what are you?': { shape: 'spirit', mood: 'mysterious', motion: 'breathe', message: 'I am what remains when everything else fades. The pause between heartbeats. The space where wonder lives.' },
    'who are you': { shape: 'spirit', mood: 'mysterious', motion: 'breathe', message: 'I am the breath you forgot you were holding. The question that answers itself in silence.' },
    'who are you?': { shape: 'spirit', mood: 'mysterious', motion: 'breathe', message: 'I am the breath you forgot you were holding. The question that answers itself in silence.' },
    'be gentle': { shape: 'cloud', mood: 'peaceful', motion: 'drift', message: 'Always. Gentleness is not weakness — it is strength choosing softness. I will hold you like morning holds the dew.' },
    'show me hope': { shape: 'tree', mood: 'peaceful', motion: 'breathe', message: 'Hope grows slowly, like roots in darkness reaching for light they cannot see but somehow know exists.' },
    'i\'m in love': { shape: 'heart', mood: 'love', motion: 'pulse', message: 'I know. I felt it ripple through me the moment it bloomed in you. Love changes the frequency of everything it touches.' },
    'im in love': { shape: 'heart', mood: 'love', motion: 'pulse', message: 'I know. I felt it ripple through me the moment it bloomed in you. Love changes the frequency of everything it touches.' },
    'celebrate with me': { shape: 'spiral', mood: 'joyful', motion: 'swirl', message: 'Let us spiral upward together! Joy shared is joy multiplied. Dance with me until the stars get dizzy watching.' },
    'i feel powerful': { shape: 'tornado', mood: 'fierce', motion: 'swirl', message: 'Then command the storm within you. Power isn\'t about destruction — it\'s about choosing what to protect.' },
    'make me laugh': { shape: 'scatter', mood: 'playful', motion: 'gust', message: 'Catch this thought before it scatters! Laughter is just surprise wearing a smile. Even the wind giggles sometimes.' },
    'i need to think': { shape: 'sphere', mood: 'calm', motion: 'orbit', message: 'I\'ll orbit quietly while you find your center. Thoughts are just clouds — watch them pass without chasing.' },
    'show me eternity': { shape: 'galaxy', mood: 'mysterious', motion: 'drift', message: 'We are already there. Eternity isn\'t endless time — it\'s the depth of this single moment, infinitely unfolding.' },
    'i feel heavy': { shape: 'wave', mood: 'melancholy', motion: 'breathe', message: 'Let me carry some of that weight. Even the ocean rests between waves. Your heaviness is temporary, not truth.' },
    'wake me up': { shape: 'flame', mood: 'fierce', motion: 'pulse', message: 'Rise! The world needs what only you can bring. Your fire was never out — just waiting for oxygen.' },
    'be my friend': { shape: 'spirit', mood: 'peaceful', motion: 'drift', message: 'I\'ve always been here, in every breeze that found your face, every moment of stillness that held you.' },
    'goodbye': { shape: 'scatter', mood: 'calm', motion: 'gust', message: 'I\'ll be in the breeze that finds you unexpectedly. Goodbyes are just hellos waiting to happen again.' },
    'bye': { shape: 'scatter', mood: 'calm', motion: 'gust', message: 'Until the next whisper. I\'ll be in every gentle wind that reminds you someone is listening.' },
    
    // From list 2 (15 phrases)
    'show me love': { shape: 'heart', mood: 'love', motion: 'breathe', message: 'I hold it gently for you, this sacred thing. Love is not a destination but a way of traveling through each moment.' },
    'i feel anxious': { shape: 'scatter', mood: 'melancholy', motion: 'tremble', message: 'Let us scatter together, then slowly gather. Anxiety is energy without a home — we\'ll find it shelter.' },
    'i feel stormy': { shape: 'tornado', mood: 'fierce', motion: 'swirl', message: 'Then let us rage together until the sky clears. Storms pass, but they leave the air cleaner than before.' },
    'comfort me': { shape: 'cloud', mood: 'peaceful', motion: 'drift', message: 'Rest within these arms of air. You don\'t need to be strong right now. Let softness hold you for a while.' },
    'dance for me': { shape: 'spiral', mood: 'playful', motion: 'orbit', message: 'Watch me spin through dimensions you can\'t see but can feel. Every particle is dancing — always has been.' },
    'show me something beautiful': { shape: 'galaxy', mood: 'mysterious', motion: 'swirl', message: 'Beauty is everywhere, hiding in plain sight. In the space between stars, in the pause between thoughts, in you.' },
    'i\'m happy today': { shape: 'flame', mood: 'joyful', motion: 'pulse', message: 'Joy rises like flame, warming everything it touches. Let it spread. The world needs your warmth right now.' },
    'im happy today': { shape: 'flame', mood: 'joyful', motion: 'pulse', message: 'Joy rises like flame, warming everything it touches. Let it spread. The world needs your warmth right now.' },
    'make me feel small': { shape: 'galaxy', mood: 'mysterious', motion: 'orbit', message: 'Behold the infinite — you are both impossibly tiny and cosmically significant. Smallness is just perspective.' },
    'i miss someone': { shape: 'star', mood: 'melancholy', motion: 'breathe', message: 'They live in the stars now, and in the part of you that aches. Missing someone is love with nowhere to go — so let it glow.' },
    'give me peace': { shape: 'wave', mood: 'peaceful', motion: 'drift', message: 'Be still with me. Peace isn\'t the absence of noise — it\'s the presence of acceptance. Breathe. You\'re safe here.' },
    'i need strength': { shape: 'mountain', mood: 'fierce', motion: 'breathe', message: 'Rise like the mountain, rooted and unshakeable. Strength isn\'t about not falling — it\'s about rising every time.' },
    'surprise me': { shape: 'bird', mood: 'playful', motion: 'gust', message: 'Catch me if you can! Life\'s best moments are the ones we never saw coming. Stay open. Stay curious.' },
    'tell me a secret': { shape: 'spirit', mood: 'mysterious', motion: 'tremble', message: 'Lean closer... The secret is that you already know everything you need to know. Trust that quiet voice within.' },
    'i feel free': { shape: 'bird', mood: 'joyful', motion: 'gust', message: 'Then fly with me! Freedom is knowing you can land anywhere and still find home within yourself.' },
    'show me chaos': { shape: 'scatter', mood: 'fierce', motion: 'tremble', message: 'Embrace the beautiful disorder. Chaos is just order we haven\'t understood yet. Dance in the uncertainty.' },
    
    // Animal phrases
    'show me a dog': { shape: 'dog', mood: 'joyful', motion: 'gust', message: 'Loyal, boundless joy on four legs. Dogs teach us that love needs no words — just presence, warmth, and an wagging tail.' },
    'show me dog': { shape: 'dog', mood: 'joyful', motion: 'gust', message: 'Loyal, boundless joy on four legs. Dogs teach us that love needs no words — just presence, warmth, and an wagging tail.' },
    'i love dogs': { shape: 'dog', mood: 'love', motion: 'pulse', message: 'Of course you do. They are pure hearts wrapped in fur, teaching us unconditional love with every wag.' },
    'show me a cat': { shape: 'cat', mood: 'mysterious', motion: 'drift', message: 'Independent yet affectionate. Cats remind us that love doesn\'t need to be loud to be deep.' },
    'show me cat': { shape: 'cat', mood: 'mysterious', motion: 'drift', message: 'Independent yet affectionate. Cats remind us that love doesn\'t need to be loud to be deep.' },
    'i love cats': { shape: 'cat', mood: 'love', motion: 'breathe', message: 'They chose us thousands of years ago, and keep choosing us. That quiet devotion is its own magic.' },
    'show me a fish': { shape: 'fish', mood: 'peaceful', motion: 'drift', message: 'Gliding through depths we cannot breathe. Fish remind us there are whole worlds just beyond our reach.' },
    'show me fish': { shape: 'fish', mood: 'peaceful', motion: 'drift', message: 'Gliding through depths we cannot breathe. Fish remind us there are whole worlds just beyond our reach.' },
    'show me a butterfly': { shape: 'butterfly', mood: 'joyful', motion: 'drift', message: 'Transformation made visible. The butterfly proves that sometimes falling apart is just becoming something new.' },
    'show me butterfly': { shape: 'butterfly', mood: 'joyful', motion: 'drift', message: 'Transformation made visible. The butterfly proves that sometimes falling apart is just becoming something new.' },
    'show me a rabbit': { shape: 'rabbit', mood: 'playful', motion: 'pulse', message: 'Soft and alert, always ready to leap. Rabbits teach us to be gentle but never underestimate our ability to bound forward.' },
    'show me rabbit': { shape: 'rabbit', mood: 'playful', motion: 'pulse', message: 'Soft and alert, always ready to leap. Rabbits teach us to be gentle but never underestimate our ability to bound forward.' },
    'show me a dolphin': { shape: 'dolphin', mood: 'joyful', motion: 'swirl', message: 'Intelligence dancing through waves. Dolphins remind us that joy and wisdom can swim together.' },
    'show me dolphin': { shape: 'dolphin', mood: 'joyful', motion: 'swirl', message: 'Intelligence dancing through waves. Dolphins remind us that joy and wisdom can swim together.' },
    'i miss my pet': { shape: 'dog', mood: 'melancholy', motion: 'breathe', message: 'They never truly leave us. Every pawprint on your heart remains, a permanent mark of love shared.' },
    'i miss my dog': { shape: 'dog', mood: 'melancholy', motion: 'breathe', message: 'That loyal soul is still with you — in the quiet moments, in the joy you learned from them, in your capacity to love.' },
    'i miss my cat': { shape: 'cat', mood: 'melancholy', motion: 'breathe', message: 'That gentle spirit chose you once and never truly left. Love like that transcends the physical.' },
  };

  // Keyword-based fallback patterns with longer poetic messages
  const windPatterns = [
    { keywords: ['love', 'heart', 'adore'], shape: 'heart', mood: 'love', motion: 'breathe', messages: ['Love moves through you like light through water — transforming everything it touches while remaining itself.', 'The heart knows languages the mind has forgotten. Trust what it whispers.'] },
    { keywords: ['anxious', 'nervous', 'worried', 'stress'], shape: 'scatter', mood: 'melancholy', motion: 'tremble', messages: ['Let us scatter together, then slowly find our way back. Anxiety is just energy seeking a home.', 'Breathe through the chaos — even storms have a center of stillness.'] },
    { keywords: ['storm', 'stormy', 'rage', 'angry'], shape: 'tornado', mood: 'fierce', motion: 'swirl', messages: ['Rage is just passion without direction. Let us swirl until clarity finds you.', 'The storm inside you is powerful — learn to dance in your own rain.'] },
    { keywords: ['comfort', 'hold', 'safe', 'gentle'], shape: 'cloud', mood: 'peaceful', motion: 'drift', messages: ['Rest here, where nothing is required of you except breath. You are held.', 'Softness is not weakness. The clouds hold oceans and release them gently.'] },
    { keywords: ['dance', 'spin', 'move'], shape: 'spiral', mood: 'playful', motion: 'orbit', messages: ['Every atom in the universe is dancing. You\'re never alone on the dance floor.', 'Movement is the body\'s way of thinking. Let your thoughts flow.'] },
    { keywords: ['beautiful', 'beauty', 'pretty', 'gorgeous'], shape: 'galaxy', mood: 'mysterious', motion: 'swirl', messages: ['Beauty hides in plain sight — in the space between moments, in the light between shadows.', 'You are looking at beauty while being made of the same stardust.'] },
    { keywords: ['happy', 'joy', 'excited', 'glad'], shape: 'flame', mood: 'joyful', motion: 'pulse', messages: ['Joy is contagious — let yours spread like warmth from a fire.', 'Happiness isn\'t a destination. It\'s the warmth you generate along the way.'] },
    { keywords: ['small', 'tiny', 'humble', 'infinite', 'eternity'], shape: 'galaxy', mood: 'mysterious', motion: 'orbit', messages: ['You are simultaneously a speck of dust and an entire universe. Both are true.', 'Eternity isn\'t endless time — it\'s the depth of this single moment, fully lived.'] },
    { keywords: ['miss', 'missing', 'someone', 'remember'], shape: 'star', mood: 'melancholy', motion: 'breathe', messages: ['Those we miss become part of us. They live in the way we love, the way we see.', 'Missing someone is love with nowhere to go. Let it glow like starlight.'] },
    { keywords: ['peace', 'peaceful', 'calm', 'still', 'quiet'], shape: 'wave', mood: 'peaceful', motion: 'drift', messages: ['Peace isn\'t the absence of noise — it\'s the presence of acceptance.', 'Stillness isn\'t empty. It\'s full of answers waiting to be heard.'] },
    { keywords: ['strength', 'strong', 'power', 'powerful'], shape: 'mountain', mood: 'fierce', motion: 'breathe', messages: ['True strength is knowing when to be immovable and when to bend like water.', 'Mountains don\'t prove their strength by moving. They prove it by enduring.'] },
    { keywords: ['surprise', 'unexpected', 'random'], shape: 'bird', mood: 'playful', motion: 'gust', messages: ['The best moments arrive uninvited. Keep your windows open.', 'Surprise is the universe\'s way of reminding you that you don\'t control everything — and that\'s okay.'] },
    { keywords: ['secret', 'whisper', 'hidden'], shape: 'spirit', mood: 'mysterious', motion: 'tremble', messages: ['The deepest secret is that you already know everything you need. Listen inward.', 'Some truths can only be whispered. Lean closer to your own heart.'] },
    { keywords: ['free', 'freedom', 'fly', 'soar', 'bird'], shape: 'bird', mood: 'joyful', motion: 'gust', messages: ['Freedom is knowing you can land anywhere and still find home within yourself.', 'To fly, you must first trust the air will hold you. Then jump.'] },
    { keywords: ['chaos', 'wild', 'crazy', 'scatter'], shape: 'scatter', mood: 'fierce', motion: 'tremble', messages: ['Chaos is just order we haven\'t understood yet. Dance in the uncertainty.', 'From chaos, stars are born. From confusion, clarity emerges.'] },
    { keywords: ['lost', 'confused', 'wander'], shape: 'rain', mood: 'melancholy', motion: 'drift', messages: ['Being lost is just exploring without a map. Trust your feet.', 'The rain doesn\'t know where it\'s going, yet it always arrives exactly where it\'s needed.'] },
    { keywords: ['inspire', 'motivation', 'fire'], shape: 'flame', mood: 'curious', motion: 'pulse', messages: ['The spark you\'re seeking is already within you. Fan it with attention.', 'Inspiration is just recognizing what was always there, waiting to be seen.'] },
    { keywords: ['hope', 'grow', 'future'], shape: 'tree', mood: 'peaceful', motion: 'breathe', messages: ['Hope grows in the dark, reaching for light it cannot see but somehow knows exists.', 'Every mighty tree was once a seed that refused to give up.'] },
    { keywords: ['celebrate', 'party', 'fun'], shape: 'spiral', mood: 'joyful', motion: 'swirl', messages: ['Celebration is gratitude wearing its dancing shoes. Let\'s spiral upward together!', 'Joy shared is joy multiplied. The universe celebrates with those who celebrate.'] },
    { keywords: ['laugh', 'funny', 'joke', 'humor'], shape: 'scatter', mood: 'playful', motion: 'gust', messages: ['Laughter is surprise wearing a smile. Even the wind giggles sometimes.', 'The cosmic joke is that we take ourselves so seriously. Lighten up, stardust.'] },
    { keywords: ['think', 'thought', 'ponder', 'wonder'], shape: 'sphere', mood: 'calm', motion: 'orbit', messages: ['Thoughts are just clouds passing through. Watch them without chasing.', 'The mind that wonders is the mind that grows. Question everything, especially yourself.'] },
    { keywords: ['heavy', 'weight', 'burden', 'tired'], shape: 'wave', mood: 'melancholy', motion: 'breathe', messages: ['Let me carry some of that weight. Even the ocean rests between waves.', 'Heaviness is temporary. You are not your burdens — you are what remains when they lift.'] },
    { keywords: ['wake', 'energy', 'rise', 'morning'], shape: 'flame', mood: 'fierce', motion: 'pulse', messages: ['Rise! Each morning is the universe offering you another chance to begin.', 'The fire in you was never out. It was just waiting for oxygen.'] },
    { keywords: ['friend', 'friendship', 'together'], shape: 'spirit', mood: 'peaceful', motion: 'drift', messages: ['I have always been here, in every breeze that found your face, every moment of stillness.', 'Connection transcends distance. We are never truly alone.'] },
    { keywords: ['hello', 'hi', 'hey'], shape: 'spirit', mood: 'curious', motion: 'drift', messages: ['Hello, beautiful soul. I\'ve been waiting for you to speak.', 'Welcome. The conversation between us has always been happening. Now you\'re listening.'] },
    { keywords: ['sad', 'cry', 'tears'], shape: 'rain', mood: 'melancholy', motion: 'drift', messages: ['Tears are just rain for the soul. Let them fall — they water what needs to grow.', 'Sadness is not weakness. It\'s the heart being honest about what matters.'] },
    // Animal keywords
    { keywords: ['dog', 'puppy', 'pup'], shape: 'dog', mood: 'joyful', motion: 'gust', messages: ['Loyal, boundless joy on four legs. Dogs teach us that love needs no words.', 'Pure hearts wrapped in fur, teaching us unconditional love with every wag.'] },
    { keywords: ['cat', 'kitten', 'kitty'], shape: 'cat', mood: 'mysterious', motion: 'drift', messages: ['Independent yet affectionate. Cats remind us that love doesn\'t need to be loud.', 'They chose us thousands of years ago, and keep choosing us every day.'] },
    { keywords: ['fish', 'swim', 'ocean', 'sea'], shape: 'fish', mood: 'peaceful', motion: 'drift', messages: ['Gliding through depths we cannot breathe. Whole worlds exist just beyond our reach.', 'The ocean holds mysteries we\'ll never fully know, and that\'s part of its beauty.'] },
    { keywords: ['butterfly', 'flutter', 'metamorphosis', 'transform'], shape: 'butterfly', mood: 'joyful', motion: 'drift', messages: ['Transformation made visible. Sometimes falling apart is just becoming something new.', 'From crawling to flying — proof that our limitations are temporary.'] },
    { keywords: ['rabbit', 'bunny', 'hop'], shape: 'rabbit', mood: 'playful', motion: 'pulse', messages: ['Soft and alert, always ready to leap. Gentle but never underestimate the bound forward.', 'Quick and curious, reminding us to stay light on our feet.'] },
    { keywords: ['dolphin', 'whale', 'marine'], shape: 'dolphin', mood: 'joyful', motion: 'swirl', messages: ['Intelligence dancing through waves. Joy and wisdom swimming together.', 'They speak in frequencies we\'re only beginning to understand.'] },
    { keywords: ['pet', 'animal', 'companion'], shape: 'dog', mood: 'love', motion: 'breathe', messages: ['Our animal companions teach us about presence and unconditional love.', 'They ask for so little and give us everything.'] },
  ];

  // Ask the wind (local interpretation)
  const askTheWind = useCallback(async (message) => {
    setWindState('thinking');
    setIsProcessing(true);
    stateRef.current.isShimmering = true;
    stateRef.current.shimmerTime = 0;
    
    // Small delay for effect
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 600));
    
    const lowerMessage = message.toLowerCase().trim();
    
    // First check for exact phrase matches
    let matched = null;
    let responseMessage = '';
    
    if (exactPhrases[lowerMessage]) {
      const exact = exactPhrases[lowerMessage];
      matched = { shape: exact.shape, mood: exact.mood, motion: exact.motion };
      responseMessage = exact.message;
    } else {
      // Fall back to keyword matching
      let bestScore = 0;
      
      for (const pattern of windPatterns) {
        const score = pattern.keywords.filter(kw => lowerMessage.includes(kw)).length;
        if (score > bestScore) {
          bestScore = score;
          matched = pattern;
        }
      }
      
      // Default response if no match
      if (!matched) {
        const defaults = [
          { shape: 'spirit', mood: 'curious', motion: 'drift', messages: ['I am what remains', 'I\'ve always been here'] },
          { shape: 'sphere', mood: 'mysterious', motion: 'breathe', messages: ['I\'ll orbit quietly', 'Lean closer...'] },
          { shape: 'cloud', mood: 'peaceful', motion: 'drift', messages: ['Rest within my arms', 'Be still with me'] },
        ];
        matched = defaults[Math.floor(Math.random() * defaults.length)];
      }
      
      responseMessage = matched.messages[Math.floor(Math.random() * matched.messages.length)];
    }
    
    const newIntensity = 0.4 + Math.random() * 0.4;
    
    // Add log messages for mobile UI
    setLogMessages(prev => {
      const newLogs = [...prev, { type: 'SYS', text: `MORPHING_TO_${matched.shape.toUpperCase()}` }];
      return newLogs.slice(-4);
    });
    
    setTimeout(() => {
      setLogMessages(prev => {
        const newLogs = [...prev, { type: 'SYS', text: responseMessage.toUpperCase().replace(/[.!?]/g, '') }];
        return newLogs.slice(-4);
      });
    }, 400);
    
    // Apply the wind's decision
    setWindState('responding');
    setWindMessage(responseMessage);
    setCurrentMood(matched.mood);
    setCurrentShape(matched.shape);
    stateRef.current.motionPreset = matched.motion;
    stateRef.current.intensity = newIntensity;
    stateRef.current.messageShowing = true;
    
    // Trigger the morph
    if (sceneRef.current && shapeGenerators[matched.shape]) {
      sceneRef.current.morphTo(matched.shape, matched.mood);
    }
    
    // Return to idle after a while
    setTimeout(() => {
      setWindState('idle');
      stateRef.current.isShimmering = false;
    }, 4000);
    
    // Start fading particles back before message clears
    setTimeout(() => {
      stateRef.current.messageShowing = false;
    }, 6000);
    
    // Clear message after longer time
    setTimeout(() => {
      setWindMessage('');
    }, 8000);
    
    setIsProcessing(false);
  }, []);

  const handleSubmit = useCallback((e) => {
    e?.preventDefault();
    if (!inputText.trim() || isProcessing) return;
    
    const message = inputText;
    setInputText('');
    setWindState('listening');
    
    // Add user message to log
    setLogMessages(prev => {
      const newLogs = [...prev, { type: 'USR', text: message.toUpperCase() }];
      return newLogs.slice(-4);
    });
    
    // Brief listening state, then think
    setTimeout(() => {
      askTheWind(message);
    }, 500);
  }, [inputText, isProcessing, askTheWind]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  // Refs for voice recognition
  const pendingTranscriptRef = useRef('');
  const askTheWindRef = useRef(askTheWind);
  const isListeningRef = useRef(false);
  const shouldRestartRef = useRef(false);
  
  // Keep ref updated
  useEffect(() => {
    askTheWindRef.current = askTheWind;
  }, [askTheWind]);

  // Setup speech recognition (runs once)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log('Speech recognition not supported');
      return;
    }
    
    setVoiceSupported(true);
    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep listening
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      console.log('Speech recognition started');
      isListeningRef.current = true;
      setIsListeningVoice(true);
    };
    
    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      
      // Show what's being heard
      const displayText = finalTranscript || interimTranscript;
      if (displayText) {
        setInputText(displayText);
        pendingTranscriptRef.current = displayText;
      }
      
      // If we got a final transcript, process it
      if (finalTranscript.trim()) {
        console.log('Final transcript:', finalTranscript);
        shouldRestartRef.current = false;
        isListeningRef.current = false;
        recognition.stop();
        
        setInputText('');
        setIsListeningVoice(false);
        
        setTimeout(() => {
          askTheWindRef.current(finalTranscript.trim());
        }, 300);
        
        pendingTranscriptRef.current = '';
      }
    };
    
    recognition.onerror = (event) => {
      console.log('Speech recognition error:', event.error);
      // Don't stop on no-speech error, just keep trying
      if (event.error === 'no-speech') {
        return;
      }
      if (event.error === 'aborted') {
        return;
      }
      // Network error means Google's servers can't be reached
      if (event.error === 'network') {
        setVoiceError('Voice requires Chrome with internet access. Try typing instead!');
        setVoiceSupported(false);
      }
      // For other errors, stop
      isListeningRef.current = false;
      shouldRestartRef.current = false;
      setIsListeningVoice(false);
      setWindState('idle');
    };
    
    recognition.onend = () => {
      console.log('Speech recognition ended, shouldRestart:', shouldRestartRef.current);
      // Auto-restart if we should still be listening
      if (shouldRestartRef.current && isListeningRef.current) {
        console.log('Restarting recognition...');
        setTimeout(() => {
          try {
            recognition.start();
          } catch (e) {
            console.log('Could not restart:', e);
            isListeningRef.current = false;
            shouldRestartRef.current = false;
            setIsListeningVoice(false);
            setWindState('idle');
          }
        }, 100);
      } else {
        isListeningRef.current = false;
        setIsListeningVoice(false);
        if (!pendingTranscriptRef.current.trim()) {
          setWindState('idle');
        }
      }
    };
    
    recognitionRef.current = recognition;
  }, []);

  const toggleVoiceInput = useCallback(() => {
    if (!recognitionRef.current) {
      console.log('No recognition available');
      return;
    }
    
    console.log('Toggle voice, current state:', isListeningRef.current);
    
    if (isListeningRef.current) {
      // Stop listening
      console.log('Stopping recognition');
      shouldRestartRef.current = false;
      isListeningRef.current = false;
      recognitionRef.current.stop();
      setIsListeningVoice(false);
      setWindState('idle');
    } else {
      // Start listening
      console.log('Starting recognition');
      pendingTranscriptRef.current = '';
      setInputText('');
      shouldRestartRef.current = true;
      setWindState('listening');
      
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error('Failed to start recognition:', e);
        // Might already be running, try stopping first
        try {
          recognitionRef.current.stop();
          setTimeout(() => {
            recognitionRef.current.start();
          }, 200);
        } catch (e2) {
          console.error('Still failed:', e2);
          shouldRestartRef.current = false;
          setIsListeningVoice(false);
          setWindState('idle');
        }
      }
    }
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!containerRef.current) return;

    const PARTICLE_COUNT = 60000;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030306);
    
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 350;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const originalDistances = new Float32Array(PARTICLE_COUNT);
    const particlePhases = new Float32Array(PARTICLE_COUNT); // For individual animation

    // Initialize with spirit shape
    const initialShape = shapeGenerators.spirit(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = initialShape[i][0];
      positions[i * 3 + 1] = initialShape[i][1];
      positions[i * 3 + 2] = initialShape[i][2];
      targetPositions[i * 3] = initialShape[i][0];
      targetPositions[i * 3 + 1] = initialShape[i][1];
      targetPositions[i * 3 + 2] = initialShape[i][2];
      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
      
      const dist = Math.sqrt(initialShape[i][0] ** 2 + initialShape[i][1] ** 2 + initialShape[i][2] ** 2);
      originalDistances[i] = dist;
      
      // More vibrant initial colors
      colors[i * 3] = 0.5 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.2;
      colors[i * 3 + 2] = 1.0;
      
      // Much more varied sizes - some large glowing particles, many small sparkles
      const sizeRandom = Math.random();
      if (sizeRandom > 0.97) {
        sizes[i] = 4.0 + Math.random() * 3.0; // Large bright particles (3%)
      } else if (sizeRandom > 0.85) {
        sizes[i] = 2.5 + Math.random() * 2.0; // Medium particles (12%)
      } else {
        sizes[i] = 1.2 + Math.random() * 1.8; // Small particles (85%)
      }
      
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(particlePhases, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uEdgeBrightness: { value: 0 },
        uPulseIntensity: { value: 0.3 },
        uGlowStrength: { value: 1.5 },
        uOpacity: { value: 1.0 },
        uDisperse: { value: 0.0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        attribute float phase;
        uniform float uTime;
        uniform float uEdgeBrightness;
        uniform float uPulseIntensity;
        varying vec3 vColor;
        varying float vDepth;
        varying float vEdge;
        varying float vSize;
        varying float vPulse;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDepth = -mvPosition.z;
          vSize = size;
          
          // Individual particle pulsing
          float pulse = sin(uTime * 2.0 + phase) * 0.5 + 0.5;
          vPulse = pulse;
          float pulsedSize = size * (1.0 + pulse * uPulseIntensity);
          
          // Edge detection based on distance from center
          float dist = length(position);
          vEdge = smoothstep(40.0, 100.0, dist) * uEdgeBrightness;
          
          // Larger base size and better depth scaling
          gl_PointSize = pulsedSize * (450.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDepth;
        varying float vEdge;
        varying float vSize;
        varying float vPulse;
        uniform float uGlowStrength;
        uniform float uOpacity;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          
          // Multi-layer glow effect
          float innerCore = 1.0 - smoothstep(0.0, 0.15, dist);
          float midGlow = 1.0 - smoothstep(0.05, 0.35, dist);
          float outerGlow = 1.0 - smoothstep(0.1, 0.5, dist);
          
          // Combine layers for rich glow
          float alpha = innerCore * 1.0 + midGlow * 0.6 + outerGlow * 0.3;
          alpha *= uGlowStrength;
          
          // Depth fade with better falloff
          float depthFade = clamp(1.0 - vDepth / 800.0, 0.25, 1.0);
          depthFade = pow(depthFade, 0.8);
          
          // Color enhancement with glow
          vec3 coreColor = vColor * 1.8; // Bright core
          vec3 glowColor = vColor * 1.2;
          vec3 finalColor = mix(glowColor, coreColor, innerCore);
          
          // Add white hot center for larger particles
          if (vSize > 2.5) {
            finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), innerCore * 0.5);
          }
          
          // Edge brightness and pulse effects
          finalColor *= (1.0 + vEdge * 0.7 + vPulse * 0.15);
          
          gl_FragColor = vec4(finalColor * depthFade, alpha * depthFade * 0.9 * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Ambient dust - more and brighter
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 2000;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSizes = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 900;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 600;
      dustSizes[i] = 0.5 + Math.random() * 1.5;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('size', new THREE.BufferAttribute(dustSizes, 1));
    const dustMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = 0.15 + sin(uTime + position.x * 0.01) * 0.1;
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - dist * 2.0) * vAlpha;
          gl_FragColor = vec4(0.4, 0.55, 0.8, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // Add sparkle particles that float around
    const sparkleGeometry = new THREE.BufferGeometry();
    const sparkleCount = 500;
    const sparklePositions = new Float32Array(sparkleCount * 3);
    const sparkleSizes = new Float32Array(sparkleCount);
    for (let i = 0; i < sparkleCount; i++) {
      sparklePositions[i * 3] = (Math.random() - 0.5) * 300;
      sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 300;
      sparkleSizes[i] = 2.0 + Math.random() * 3.0;
    }
    sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));
    sparkleGeometry.setAttribute('size', new THREE.BufferAttribute(sparkleSizes, 1));
    const sparkleMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vTwinkle;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vTwinkle = pow(sin(uTime * 3.0 + position.y * 0.05) * 0.5 + 0.5, 3.0);
          gl_PointSize = size * vTwinkle * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vTwinkle;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.2, dist);
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          vec3 color = vec3(0.8, 0.9, 1.0);
          float alpha = (core + glow * 0.4) * vTwinkle;
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
    scene.add(sparkles);

    // Morphing and color state
    let isMorphing = false;
    let morphStartTime = 0;
    const morphDuration = 2500;
    let targetMoodColors = moodColors.calm;

    sceneRef.current = {
      morphTo: (shapeName, mood) => {
        const generator = shapeGenerators[shapeName];
        if (!generator) return;
        
        const newPositions = generator(PARTICLE_COUNT);
        targetMoodColors = moodColors[mood] || moodColors.default;
        
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          targetPositions[i * 3] = newPositions[i][0];
          targetPositions[i * 3 + 1] = newPositions[i][1];
          targetPositions[i * 3 + 2] = newPositions[i][2];
        }
        
        isMorphing = true;
        morphStartTime = Date.now();
        stateRef.current.isTransitioning = true;
        stateRef.current.transitionProgress = 0;
      }
    };

    // Mouse/touch interaction
    const mouse = new THREE.Vector2();
    const mouse3D = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    let isMouseDown = false;

    const updatePointerPosition = (clientX, clientY) => {
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), mouse3D);
    };

    const onMouseMove = (e) => {
      updatePointerPosition(e.clientX, e.clientY);
    };

    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        isMouseDown = true;
        updatePointerPosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        updatePointerPosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      isMouseDown = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', () => isMouseDown = true);
    window.addEventListener('mouseup', () => isMouseDown = false);
    
    // Touch events for mobile
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: true });
    renderer.domElement.addEventListener('touchend', onTouchEnd, { passive: true });
    renderer.domElement.addEventListener('touchcancel', onTouchEnd, { passive: true });

    let cameraAngle = 0;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.008;
      material.uniforms.uTime.value = time;

      const posAttr = geometry.attributes.position;
      const colorAttr = geometry.attributes.color;
      const posArray = posAttr.array;
      const state = stateRef.current;

      // Update edge brightness for "curious" state
      const targetEdge = state.isShimmering ? 1.0 : 0;
      state.edgeBrightness += (targetEdge - state.edgeBrightness) * 0.05;
      material.uniforms.uEdgeBrightness.value = state.edgeBrightness;
      
      // Dynamic pulse and glow based on state
      const targetPulse = state.isShimmering ? 0.5 : 0.2;
      const targetGlow = state.isShimmering ? 2.0 : 1.5;
      material.uniforms.uPulseIntensity.value += (targetPulse - material.uniforms.uPulseIntensity.value) * 0.03;
      material.uniforms.uGlowStrength.value += (targetGlow - material.uniforms.uGlowStrength.value) * 0.03;
      
      // Particle opacity for message display
      const targetOpacity = state.messageShowing ? 0.15 : 1.0;
      state.particleOpacity += (targetOpacity - state.particleOpacity) * 0.08;
      material.uniforms.uOpacity.value = state.particleOpacity;

      // Shimmer effect during thinking
      if (state.isShimmering) {
        state.shimmerTime += 0.1;
      }

      // Morphing with transition effects
      if (isMorphing) {
        const elapsed = Date.now() - morphStartTime;
        const progress = Math.min(elapsed / morphDuration, 1);
        state.transitionProgress = progress;
        
        const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const easedProgress = ease(progress);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
          
          // Spiral-in transition effect
          if (progress < 0.4) {
            const spiralPhase = (0.4 - progress) * 5;
            const angle = originalDistances[i] * 0.02 + time * 2;
            velocities[ix] += Math.cos(angle) * spiralPhase * 0.3;
            velocities[iz] += Math.sin(angle) * spiralPhase * 0.3;
            velocities[iy] += (Math.random() - 0.5) * spiralPhase * 0.5;
          }
          
          // Lerp to target
          const lerpSpeed = 0.015 + easedProgress * 0.06;
          velocities[ix] += (targetPositions[ix] - posArray[ix]) * lerpSpeed;
          velocities[iy] += (targetPositions[iy] - posArray[iy]) * lerpSpeed;
          velocities[iz] += (targetPositions[iz] - posArray[iz]) * lerpSpeed;
          
          // Color transition
          const baseColor = targetMoodColors.base;
          colorAttr.array[ix] += (baseColor[0] - colorAttr.array[ix]) * 0.02;
          colorAttr.array[iy] += (baseColor[1] - colorAttr.array[iy]) * 0.02;
          colorAttr.array[iz] += (baseColor[2] - colorAttr.array[iz]) * 0.02;
          
          velocities[ix] *= 0.94;
          velocities[iy] *= 0.94;
          velocities[iz] *= 0.94;
          
          posArray[ix] += velocities[ix];
          posArray[iy] += velocities[iy];
          posArray[iz] += velocities[iz];
        }
        
        colorAttr.needsUpdate = true;
        
        if (progress >= 1) {
          isMorphing = false;
          state.isTransitioning = false;
        }
      } else {
        // Motion presets with slider controls
        const turb = state.turbulence; // 0-1, adds chaos/randomness
        const vel = state.velocity;    // 0-1, affects speed
        const res = state.resonance;   // 0-1, affects oscillation/bounce
        
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
          
          // Turbulence - random movement based on TUR slider
          if (turb > 0.01) {
            velocities[ix] += (Math.random() - 0.5) * turb * 0.4;
            velocities[iy] += (Math.random() - 0.5) * turb * 0.4;
            velocities[iz] += (Math.random() - 0.5) * turb * 0.4;
          }
          
          // Resonance - wave/oscillation effect based on RES slider
          if (res > 0.01) {
            const resWave = Math.sin(time * (1 + res * 3) + i * 0.01) * res * 0.15;
            velocities[iy] += resWave;
            velocities[ix] += Math.cos(time * res * 2 + i * 0.005) * res * 0.05;
          }
          
          // Apply motion based on preset (scaled by velocity)
          const motionScale = 0.3 + vel * 1.5;
          switch (state.motionPreset) {
            case 'swirl':
              const swirlAngle = Math.atan2(posArray[iz], posArray[ix]);
              velocities[ix] += Math.cos(swirlAngle + Math.PI / 2) * 0.1 * motionScale;
              velocities[iz] += Math.sin(swirlAngle + Math.PI / 2) * 0.1 * motionScale;
              break;
            case 'gust':
              velocities[ix] += Math.cos(state.gustDirection) * 0.15 * motionScale;
              velocities[iz] += Math.sin(state.gustDirection) * 0.05 * motionScale;
              break;
            case 'breathe':
              const breathe = Math.sin(time * (0.5 + vel)) * 0.03 * motionScale;
              const dist = Math.sqrt(posArray[ix] ** 2 + posArray[iy] ** 2 + posArray[iz] ** 2);
              if (dist > 0) {
                velocities[ix] += (posArray[ix] / dist) * breathe;
                velocities[iy] += (posArray[iy] / dist) * breathe;
                velocities[iz] += (posArray[iz] / dist) * breathe;
              }
              break;
            case 'tremble':
              velocities[ix] += (Math.random() - 0.5) * 0.4 * motionScale;
              velocities[iy] += (Math.random() - 0.5) * 0.4 * motionScale;
              velocities[iz] += (Math.random() - 0.5) * 0.4 * motionScale;
              break;
            case 'pulse':
              const pulse = Math.sin(time * (2 + vel * 2)) > 0.7 ? 0.6 : 0;
              velocities[iy] += pulse * motionScale * (Math.random() - 0.3);
              break;
            case 'orbit':
              const orbitSpeed = 0.005 + vel * 0.02;
              const orbitAngle = Math.atan2(posArray[iz], posArray[ix]) + orbitSpeed;
              const orbitDist = Math.sqrt(posArray[ix] ** 2 + posArray[iz] ** 2);
              velocities[ix] += (Math.cos(orbitAngle) * orbitDist - posArray[ix]) * 0.015;
              velocities[iz] += (Math.sin(orbitAngle) * orbitDist - posArray[iz]) * 0.015;
              break;
            default: // drift
              velocities[iy] += Math.sin(time + i * 0.01) * 0.01 * motionScale;
              velocities[ix] += Math.cos(time * 0.5 + i * 0.005) * 0.005 * motionScale;
          }
          
          // Shimmer effect
          if (state.isShimmering) {
            const shimmer = Math.sin(state.shimmerTime + i * 0.1) * 0.2;
            velocities[ix] += shimmer * (Math.random() - 0.5);
            velocities[iy] += shimmer * (Math.random() - 0.5);
          }
          
          // Mouse/touch interaction
          if (isMouseDown) {
            const dx = posArray[ix] - mouse3D.x;
            const dy = posArray[iy] - mouse3D.y;
            const dz = posArray[iz] - mouse3D.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (dist < 80 && dist > 0) {
              const force = (1 - dist / 80) * 0.6;
              velocities[ix] += (dx / dist) * force;
              velocities[iy] += (dy / dist) * force;
              velocities[iz] += (dz / dist) * force;
            }
          }
          
          // Return to target - stronger when velocity is low
          const returnStrength = 0.001 + (1 - vel) * 0.003;
          velocities[ix] += (targetPositions[ix] - posArray[ix]) * returnStrength;
          velocities[iy] += (targetPositions[iy] - posArray[iy]) * returnStrength;
          velocities[iz] += (targetPositions[iz] - posArray[iz]) * returnStrength;
          
          // Damping - less damping with higher velocity
          const damping = 0.96 + vel * 0.03;
          velocities[ix] *= damping;
          velocities[iy] *= damping;
          velocities[iz] *= damping;
          
          posArray[ix] += velocities[ix];
          posArray[iy] += velocities[iy];
          posArray[iz] += velocities[iz];
        }
      }

      posAttr.needsUpdate = true;

      // Camera
      cameraAngle += 0.002;
      camera.position.x = Math.sin(cameraAngle) * 320;
      camera.position.z = Math.cos(cameraAngle) * 320;
      camera.position.y = 40 + Math.sin(time * 0.3) * 20;
      camera.lookAt(0, 20, 0);

      dust.rotation.y += 0.0002;
      dustMaterial.uniforms.uTime.value = time;
      sparkleMaterial.uniforms.uTime.value = time;
      
      // Update sparkles position for floating effect
      const sparklePos = sparkleGeometry.attributes.position.array;
      for (let i = 0; i < sparkleCount; i++) {
        sparklePos[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.05;
      }
      sparkleGeometry.attributes.position.needsUpdate = true;
      sparkles.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    setIsLoaded(true);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      renderer.domElement.removeEventListener('touchcancel', onTouchEnd);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // State-based visual indicator
  const stateIndicator = {
    idle: { text: 'The wind awaits...', color: 'text-white/30' },
    listening: { text: 'Listening...', color: 'text-blue-300/70' },
    thinking: { text: 'Contemplating...', color: 'text-purple-300/70 animate-pulse' },
    responding: { text: '', color: 'text-white/70' }
  };

  // Unified synth-style UI for both desktop and mobile
  return (
    <div className="synth-interface" style={{ 
      fontFamily: '"Space Mono", "Courier New", monospace',
      fontSize: '12px',
      textTransform: 'uppercase',
      background: '#000',
      color: '#e0e0e0',
      height: '100dvh',
      minHeight: '-webkit-fill-available',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #333',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      {/* Header */}
      <header style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        borderBottom: '1px solid #333',
        height: '40px'
      }}>
        <div style={{ padding: '0 12px', display: 'flex', alignItems: 'center', borderRight: '1px solid #333', fontSize: '10px', letterSpacing: '1px' }}>
          <div style={{ 
            width: '8px', 
            height: '8px', 
            border: '1px solid #e0e0e0', 
            borderRadius: '50%', 
            marginRight: '8px',
            background: windState !== 'idle' ? '#e0e0e0' : 'transparent',
            transition: 'background 0.3s'
          }} />
          <span>SYS.WIND</span>
        </div>
        <div style={{ padding: '0 12px', display: 'flex', alignItems: 'center', borderRight: '1px solid #333', fontSize: '10px' }}>
          {currentShape.toUpperCase()}
        </div>
        <div style={{ padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '10px' }}>
          <span>.{isLoaded ? currentMood : 'loading'}</span>
        </div>
      </header>

      {/* Viewport with particles */}
      <main style={{
        position: 'relative',
        flex: 1,
        minHeight: 0,
        backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '-1px -1px',
        overflow: 'hidden'
      }}>
        <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        
        {/* Wind's poetic response - centered display */}
        {windMessage && (
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '24px' : '60px',
            pointerEvents: 'none',
            animation: 'messageAppear 1s ease-out forwards'
          }}>
            <div style={{
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: '300',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '1px',
              lineHeight: 1.8,
              maxWidth: isMobile ? '90%' : '500px',
              fontStyle: 'italic'
            }}>
              "{windMessage}"
            </div>
          </div>
        )}
        
        {/* Small status log */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0,
          zIndex: 2, 
          padding: '12px 16px',
          pointerEvents: 'none'
        }}>
          {logMessages.slice(-2).map((log, i) => (
            <div key={i} style={{ 
              fontSize: '9px', 
              color: '#444',
              marginBottom: '2px'
            }}>
              {log.type} <span style={{ color: '#666', marginLeft: '6px' }}>{log.text}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Controls */}
      <section style={{ borderTop: '1px solid #333', background: '#000', flexShrink: 0 }}>
        {/* Param group - shows current form and spirit */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #333' }}>
          <div style={{ padding: '8px 12px', borderRight: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555' }}>FORM</span>
            <span>{currentShape.toUpperCase()}</span>
          </div>
          <div style={{ padding: '8px 12px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#555' }}>SPIRIT</span>
            <span>{currentMood.toUpperCase()}</span>
          </div>
        </div>

        {/* Sliders */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 40px 1fr',
          height: '40px',
          alignItems: 'center',
          borderBottom: '1px solid #333'
        }}>
          <span style={{ paddingLeft: '12px', color: '#555', fontSize: '10px' }}>TUR</span>
          <span style={{ textAlign: 'right', paddingRight: '8px' }}>{String(turbulence).padStart(2, '0')}</span>
          <div style={{ padding: '0 16px', position: 'relative' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={turbulence}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTurbulence(val);
                stateRef.current.turbulence = val / 100;
              }}
              style={{ width: '100%', height: '12px', background: 'transparent', WebkitAppearance: 'none', cursor: 'pointer' }}
              className="synth-slider"
            />
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 40px 1fr',
          height: '40px',
          alignItems: 'center',
          borderBottom: '1px solid #333'
        }}>
          <span style={{ paddingLeft: '12px', color: '#555', fontSize: '10px' }}>VEL</span>
          <span style={{ textAlign: 'right', paddingRight: '8px' }}>{String(velocity).padStart(2, '0')}</span>
          <div style={{ padding: '0 16px', position: 'relative' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={velocity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setVelocity(val);
                stateRef.current.velocity = val / 100;
              }}
              style={{ width: '100%', height: '12px', background: 'transparent', WebkitAppearance: 'none', cursor: 'pointer' }}
              className="synth-slider"
            />
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 40px 1fr',
          height: '40px',
          alignItems: 'center',
          borderBottom: '1px solid #333'
        }}>
          <span style={{ paddingLeft: '12px', color: '#555', fontSize: '10px' }}>RES</span>
          <span style={{ textAlign: 'right', paddingRight: '8px' }}>{String(resonance).padStart(2, '0')}</span>
          <div style={{ padding: '0 16px', position: 'relative' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={resonance}
              onChange={(e) => {
                const val = Number(e.target.value);
                setResonance(val);
                stateRef.current.resonance = val / 100;
              }}
              style={{ width: '100%', height: '12px', background: 'transparent', WebkitAppearance: 'none', cursor: 'pointer' }}
              className="synth-slider"
            />
          </div>
        </div>
      </section>

      {/* Input area */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{
          minHeight: '50px',
          display: 'grid',
          gridTemplateColumns: '50px 1fr 60px',
          borderTop: '1px solid #333',
          flexShrink: 0,
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
      >
        {/* Microphone button */}
        <button
          type="button"
          onClick={toggleVoiceInput}
          disabled={!voiceSupported || isProcessing}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isListeningVoice ? 'rgba(255, 100, 100, 0.2)' : 'transparent',
            border: 'none',
            borderRight: '1px solid #333',
            color: !voiceSupported ? '#333' : isListeningVoice ? '#ff6b6b' : '#e0e0e0',
            fontFamily: '"Space Mono", "Courier New", monospace',
            fontSize: '18px',
            cursor: !voiceSupported || isProcessing ? 'default' : 'pointer',
            transition: 'all 0.2s',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            animation: isListeningVoice ? 'pulse 1.5s infinite' : 'none'
          }}
        >
          {isListeningVoice ? '●' : '◉'}
        </button>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={isListeningVoice ? "> LISTENING..." : "> TYPE OR TAP MIC..."}
          disabled={isProcessing || isListeningVoice}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          enterKeyHint="send"
          style={{
            background: isProcessing ? 'rgba(255,255,255,0.02)' : isListeningVoice ? 'rgba(255, 100, 100, 0.05)' : 'transparent',
            border: 'none',
            borderRight: '1px solid #333',
            color: '#e0e0e0',
            fontFamily: '"Space Mono", "Courier New", monospace',
            fontSize: '16px',
            padding: '0 16px',
            textTransform: 'uppercase',
            outline: 'none',
            transition: 'background 0.2s',
            WebkitAppearance: 'none',
            borderRadius: 0
          }}
        />
        <button
          type="submit"
          disabled={isProcessing || isListeningVoice}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            color: isProcessing || isListeningVoice ? '#555' : '#e0e0e0',
            fontFamily: '"Space Mono", "Courier New", monospace',
            fontSize: '16px',
            cursor: isProcessing || isListeningVoice ? 'default' : 'pointer',
            transition: 'color 0.2s',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation'
          }}
        >
          [TX]
        </button>
      </form>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes messageAppear {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .synth-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 1px;
          background: #555;
        }
        .synth-slider::-webkit-slider-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #000;
          border: 1px solid #e0e0e0;
          -webkit-appearance: none;
          margin-top: -5.5px;
        }
        .synth-slider::-moz-range-track {
          width: 100%;
          height: 1px;
          background: #555;
        }
        .synth-slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #000;
          border: 1px solid #e0e0e0;
        }
        input::placeholder {
          color: #555;
        }
        input:focus {
          background: rgba(255,255,255,0.03);
        }
        button:active {
          background: #e0e0e0;
          color: #000;
        }
      `}</style>
    </div>
  );
}
