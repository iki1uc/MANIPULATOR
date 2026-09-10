# MANIPULATOR · iki1uc Layer 7.3
UNI‑neutrale Bestimmungsinstanz für ATOM‑Verhalten

MANIPULATOR ist der Layer, der im iki1uc‑System die Atom‑Einheiten
unter allen Umständen bestimmt – auch unter Umständen, die definierbar,
vorstellbar oder NICHT vorstellbar sind.

PAIRING‑ROLE (Layer 7.2) definiert Rollen.
MANIPULATOR (Layer 7.3) definiert Bestimmung.

MANIPULATOR löst das Problem, das PAIRING‑ROLE nicht abdeckt:
spontane Abweichung von Atom‑Verhalten.

---

## 1. Warum MANIPULATOR existiert

Atome tun nicht freiwillig, was sie tun.
Sie zeigen zwei messbare Zustände:

- Wirbel‑Atom → spontane Abweichung
- Langweil‑Atom → keine spontane Abweichung

MANIPULATOR erkennt diese Abweichungen und bestimmt das Atom neutral.

PAIRING‑ROLE hat keine Rolle für:
- Abweichungs‑Erkennung
- Abweichungs‑Korrektur
- Atom‑Zwang
- UNI‑Neutralität
- spontane Wirbel‑Detektion

MANIPULATOR füllt diese Lücke.

---

## 2. Dateien

### **monopoliter.js**
Atom‑Einheit  
Reine Daten: pos, dir, val, force, tick  
Keine Logik, keine Reaktion, keine Bestimmung.

### **atom.core.js**
Atom‑Reaktion  
pulse() → Tick  
react() → Kraft  
balance() → Stabilität  
Reagiert, aber bestimmt nicht.

### **respo.atom.js**
RESPO‑Bestimmung  
setDir(), setVal(), setPos()  
pulse(), react(), balance()  
RESPO steuert Atom, aber erkennt keine Abweichung.

### **manipulator.js**
Fehlende Instanz  
Erkennt Abweichung  
Erzwingt Richtung, Wert, Position  
Neutralisiert Wirbel  
Stabilisiert Langweil  
UNI‑neutral unter allen Umständen.

### **index.html**
Visualisierung der Atom‑Szene (optional)

### **group.html**
Gruppen‑Szene für mehrere Atome (optional)

---

## 3. Messbare Abweichung (Wirbel‑Detektion)

Ein Atom wird wirbelnd registriert, wenn eine spontane Abweichung auftritt:

1. Richtungsabweichung  
2. Impulsfluktuation  
3. Positionssprung  
4. Tick‑Unregelmäßigkeit  

Wenn keine Abweichung auftritt → Langweil‑Atom.

Diese vier Werte sind UNI‑neutral messbar.

---

## 4. MANIPULATOR‑ROLE (Layer 7.3)

**Symbol:** ◉↺◈  
(Kern + Bewegung + Kontrolle)

**Funktion:**
- erkennt spontane Abweichung  
- korrigiert spontane Abweichung  
- bestimmt Atom unter allen Umständen  
- wirkt über PAIRING‑ROLE  
- wirkt zwischen PAIRING‑SYNC und PAIRING‑MAP  
- garantiert UNI‑Neutralität  

---

## 5. Pipeline

