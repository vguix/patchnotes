---
id: vtui-update
title: VTUI Update
sidebar_label: VTUI Update
authors: ["vanguard"]
---

# User Interface Changes (VTUI)

:::note Reworked
Our user interface system now utilizes a modular component style structure, with an overhead library containing functions for animating, managing connections, remote managers, module managers, attributes, signals, and more.  
(*Huge thanks to UncleTyrone for a ton of work on the library itself and its functions/components.*)
:::

- Entire menu sections have been rewritten to fit VTUI’s modular structure, replacing **all** of the old UI code.  
- The entire UI system for The First Order games and beyond has been rehauled, with massive performance scaling.  
- Unless specified otherwise, every single script for the UI has been **rewritten or rethought from scratch**.  

---

## Main Menu

### Play
:::tip Added
- Morph viewports with user avatar properties  
- Morph colors for divisions *(Division leaders can contact Vanguard (VG) to switch their color)*  
- Morph animations  
- Morphs now load on a completely different system (faster, easier access, thanks to Tyrone)  
:::

:::success Fixed
- Rewrote Play script, fixing reported bugs  
:::

---

### Shop
:::tip Added
- New **Shop** tab  
- PASSES and CREDITS tabs (Subscriptions and Crates coming soon)  
- Passes load dynamically based on ownership, allowing easy additions  
- Custom receipt system: purchases are logged and secured to ensure reimbursement if items fail to deliver  
:::

:::caution Changed
- *Gifting is currently restricted*  
:::

---

### Rules
:::tip Added
- New **Rules** tab displaying game rules (frequently updated)  
:::

---

### Updates
:::tip Added
- New **Updates** tab for changelogs and update logs  
- Modular and easy to update, serving as a central reference  
:::

---

### Settings
:::tip Added
- New **Settings** tab  
- Current widgets: **TOGGLE**, **DROPDOWN** (more in development)  
- Modular tab structure — open to suggestions for what players want to change  
:::

:::caution Changed
- Reworked loading screen  
- Added button hover & click sounds  
:::

---

## HUD (Heads-Up Display)

### Toolbar
:::caution Changed
- Fully remade toolbar with animations, faster/smoother displays, cleaner design, and better UX  
:::

### Player Information
:::tip Added
- Bottom-left player display now shows credits, XP, and levels  
:::

:::success Fixed
- Improved bugfixes and connections  
:::

### Player List
:::tip Added
- More accurate and reliable player tracking/displays  
- Displays now include *time in server* and *all-time in game*  
:::

:::caution Changed
- Layout and design still experimental — feedback welcome  
:::

### Tag Selector
:::caution Changed
- Revamped design, animations, and tag fetching  
:::

:::success Fixed
- Fixed issue where menu could be opened/closed while in chat or Roblox menus (`gameProcessed`)  
:::

### Return to Menu
:::tip Added
- Press **M** to initiate a return-to-menu sequence  
- Press **M** again, or select **Cancel**, to stop the process  
- Press **Confirm** to return to the start menu  
- Your in-game state won’t change: you’ll remain in place but can switch teams, morphs, etc.  
:::

---

## User Experience

### Debugging
:::tip Added
- Added a **DEBUG** option to VTUI for more accurate reproduction and fixing of issues  
- Universal warning system with script identifiers and detailed error messages  
- Allows faster fixes since we can reproduce issues directly  
:::

### Performance
:::caution Changed
- VTUI performance boosted by at least **2x** (FPS, connections, loops, modularity)  
- Almost every item now animated (no more static buttons or choppy frames)  
- All buttons include sound effects for better QOL  
:::

---

# We Want Your Suggestions
We’re constantly working to add, adjust, and improve VTUI. ***Nothing is off limits!***  

*Thank you all for your continued support — we hope you enjoy VTUI.*  
*Special thanks to the entire War Cry team for their continued efforts on the engine.*  

### Glory to The First Order!