# Weekly Rewards - Component Handoff

## Component Overview

| Property | Value |
|----------|-------|
| Name | Weekly Rewards |
| Type | FRAME |
| Figma Node ID | `528:22117` |
| Platform | TBD — confirm |

## Visual Specs

```css
.weekly-rewards {
  /* Weekly Rewards (FRAME) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 343px;
  height: 60px;
}

.title {
  /* Title (TEXT) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 305px;
  height: 16px;
  /* fill: rgba(255, 255, 255, 1) */
}

.row-of-results {
  /* Row of results (FRAME) */
  position: absolute;
  left: 0px;
  top: 24px;
  width: 343px;
  height: 36px;
}

.rewards-summary {
  /* Rewards Summary (FRAME) */
  position: absolute;
  left: 0px;
  top: 24px;
  width: 101px;
  height: 36px;
  /* fill: rgba(0, 0, 0, 1) */
  /* linear-gradient(180deg, rgba(255, 255, 255, 0.800000011920929) 0%, rgba(255, 255, 255, 0.5) 100%) */
  /* fill: rgba(45, 11, 88, 1) */
}

.amount {
  /* Amount (FRAME) */
  position: absolute;
  left: 8px;
  top: 32px;
  width: 85px;
  height: 20px;
}

.instant-icons {
  /* Instant Icons (INSTANCE) */
  position: absolute;
  left: 8px;
  top: 33px;
  width: 18px;
  height: 18px;
}

.icon {
  /* Icon (INSTANCE) */
  position: absolute;
  left: 8px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(255, 255, 255, 1) */
}

.shape {
  /* Shape (VECTOR) */
  position: absolute;
  left: 8px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(255, 179, 0, 1) */
}

.details {
  /* Details (TEXT) */
  position: absolute;
  left: 30px;
  top: 32px;
  width: 63px;
  height: 20px;
  /* fill: rgba(255, 255, 255, 1) */
}

.rewards-summary {
  /* Rewards Summary (FRAME) */
  position: absolute;
  left: 105px;
  top: 24px;
  width: 168px;
  height: 36px;
  /* fill: rgba(0, 0, 0, 1) */
  /* linear-gradient(180deg, rgba(255, 255, 255, 0.800000011920929) 0%, rgba(255, 255, 255, 0.5) 100%) */
  /* fill: rgba(45, 11, 88, 1) */
}

.amount {
  /* Amount (FRAME) */
  position: absolute;
  left: 113px;
  top: 32px;
  width: 152px;
  height: 20px;
}

.instant-icons {
  /* Instant Icons (INSTANCE) */
  position: absolute;
  left: 113px;
  top: 33px;
  width: 18px;
  height: 18px;
}

.icon {
  /* Icon (INSTANCE) */
  position: absolute;
  left: 113px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(255, 255, 255, 1) */
}

.subtract {
  /* Subtract (VECTOR) */
  position: absolute;
  left: 113px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(34, 195, 142, 1) */
}

.details {
  /* Details (TEXT) */
  position: absolute;
  left: 135px;
  top: 32px;
  width: 130px;
  height: 20px;
  /* fill: rgba(255, 255, 255, 1) */
}

.faded-end-reward {
  /* Faded End Reward (GROUP) */
  position: absolute;
  left: 277px;
  top: 24px;
  width: 124px;
  height: 36px;
}

.mask {
  /* Mask (RECTANGLE) */
  position: absolute;
  left: 277px;
  top: 24px;
  width: 124px;
  height: 36px;
  /* linear-gradient(180deg, rgba(217, 217, 217, 1) 38%, rgba(115, 115, 115, 0) 78%) */
}

.result {
  /* Result (FRAME) */
  position: absolute;
  left: 277px;
  top: 24px;
  width: 124px;
  height: 36px;
}

.rewards-summary {
  /* Rewards Summary (FRAME) */
  position: absolute;
  left: 277px;
  top: 24px;
  width: 175px;
  height: 36px;
  /* fill: rgba(0, 0, 0, 1) */
  /* linear-gradient(180deg, rgba(255, 255, 255, 0.800000011920929) 0%, rgba(255, 255, 255, 0.5) 100%) */
  /* fill: rgba(45, 11, 88, 1) */
}

.amount {
  /* Amount (FRAME) */
  position: absolute;
  left: 285px;
  top: 32px;
  width: 159px;
  height: 20px;
}

.symbol-icons {
  /* Symbol Icons (INSTANCE) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
}

.planet {
  /* Planet (INSTANCE) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
}

.rare {
  /* Rare (FRAME) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(63, 63, 63, 1) */
}

.base {
  /* Base (BOOLEAN_OPERATION) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 17px;
  height: 17px;
  /* fill: rgba(217, 217, 217, 1) */
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 34px;
  width: 15px;
  height: 15px;
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
}

.vector-500 {
  /* Vector 500 (VECTOR) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 3px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 298px;
  top: 34px;
  width: 5px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-503 {
  /* Vector 503 (VECTOR) */
  position: absolute;
  left: 296px;
  top: 41px;
  width: 7px;
  height: 8px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-504 {
  /* Vector 504 (VECTOR) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 8px;
  height: 4px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 10px;
  /* fill: rgba(217, 217, 217, 1) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 287px;
  top: 33px;
  width: 8px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 4px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 6px;
  height: 7px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 295px;
  top: 41px;
  width: 8px;
  height: 9px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 46px;
  width: 7px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.overlay {
  /* Overlay (BOOLEAN_OPERATION) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 16px;
  height: 17px;
  /* fill: rgba(217, 217, 217, 1) */
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
  /* radial-gradient(circle, rgba(151, 255, 17, 1) 0%, rgba(0, 0, 0, 1) 100%) */
}

.union {
  /* Union (BOOLEAN_OPERATION) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 17px;
  height: 17px;
  /* fill: rgba(217, 217, 217, 1) */
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
  /* radial-gradient(circle, rgba(151, 255, 17, 1) 0%, rgba(0, 0, 0, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 34px;
  width: 15px;
  height: 15px;
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
}

.vector-500 {
  /* Vector 500 (VECTOR) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 3px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 298px;
  top: 34px;
  width: 5px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-503 {
  /* Vector 503 (VECTOR) */
  position: absolute;
  left: 296px;
  top: 41px;
  width: 7px;
  height: 8px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-504 {
  /* Vector 504 (VECTOR) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 8px;
  height: 4px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 10px;
  /* fill: rgba(217, 217, 217, 1) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 287px;
  top: 33px;
  width: 8px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 4px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 6px;
  height: 7px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 295px;
  top: 41px;
  width: 8px;
  height: 9px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 46px;
  width: 7px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2243 {
  /* Ellipse 2243 (ELLIPSE) */
  position: absolute;
  left: 290px;
  top: 37px;
  width: 16px;
  height: 16px;
  /* fill: rgba(217, 217, 217, 1) */
}

.light-glow {
  /* Light glow (BOOLEAN_OPERATION) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 17px;
  height: 17px;
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
  /* fill: rgba(255, 255, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 34px;
  width: 15px;
  height: 15px;
  /* radial-gradient(circle, rgba(27, 196, 99, 1) 0%, rgba(26, 193, 99, 1) 31%, rgba(24, 186, 100, 1) 46%, rgba(22, 172, 102, 1) 58%, rgba(18, 154, 105, 1) 68%, rgba(13, 129, 108, 1) 77%, rgba(7, 100, 112, 1) 85%, rgba(3, 79, 116, 1) 89%) */
}

.vector-500 {
  /* Vector 500 (VECTOR) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 3px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 298px;
  top: 34px;
  width: 5px;
  height: 7px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-503 {
  /* Vector 503 (VECTOR) */
  position: absolute;
  left: 296px;
  top: 41px;
  width: 7px;
  height: 8px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-504 {
  /* Vector 504 (VECTOR) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 8px;
  height: 4px;
  /* fill: rgba(217, 217, 217, 1) */
}

.vector-502 {
  /* Vector 502 (VECTOR) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 10px;
  /* fill: rgba(217, 217, 217, 1) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 287px;
  top: 33px;
  width: 8px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 4px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 6px;
  height: 7px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 295px;
  top: 41px;
  width: 8px;
  height: 9px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 46px;
  width: 7px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.spots {
  /* Spots (GROUP) */
  position: absolute;
  left: 287px;
  top: 34px;
  width: 15px;
  height: 14px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 34px;
  width: 5px;
  height: 3px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 41px;
  width: 3px;
  height: 3px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 44px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 287px;
  top: 42px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 42px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 36px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 45px;
  width: 3px;
  height: 2px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 38px;
  width: 3px;
  height: 3px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 46px;
  width: 2px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 44px;
  width: 4px;
  height: 4px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 42px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 42px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 38px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 44px;
  width: 1px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 46px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 42px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 43px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 40px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 41px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 43px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 43px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 36px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 39px;
  width: 0px;
  height: 0px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 35px;
  width: 1px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 48px;
  width: 2px;
  height: 1px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 39px;
  width: 3px;
  height: 3px;
  /* fill: rgba(209, 222, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 287px;
  top: 36px;
  width: 4px;
  height: 4px;
  /* fill: rgba(209, 222, 255, 1) */
}

.hole-1 {
  /* Hole 1 (GROUP) */
  position: absolute;
  left: 286px;
  top: 30px;
  width: 13px;
  height: 13px;
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 287px;
  top: 33px;
  width: 8px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 30px;
  width: 12px;
  height: 13px;
  /* radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(231, 231, 231, 0.9100000262260437) 12%, rgba(172, 172, 172, 0.6800000071525574) 37%, rgba(77, 77, 77, 0.3100000023841858) 72%, rgba(0, 0, 0, 0) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 30px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 10px;
  height: 10px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 9px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 33px;
  width: 7px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(190, 255, 10, 1) 52%, rgba(161, 254, 15, 1) 71%, rgba(112, 255, 21, 1) 89%, rgba(31, 255, 32, 1) 100%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 9px;
}

.clippath-2 {
  /* clippath-2 (GROUP) */
  position: absolute;
  left: 287px;
  top: 31px;
  width: 9px;
  height: 9px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 33px;
  width: 7px;
  height: 5px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 288px;
  top: 32px;
  width: 9px;
  height: 9px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 34px;
  width: 7px;
  height: 5px;
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 32px;
  width: 7px;
  height: 7px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 134, 87, 1) 1%, rgba(0, 134, 123, 1) 37%, rgba(0, 111, 134, 1) 64%, rgba(0, 94, 113, 1) 87%, rgba(0, 74, 89, 1) 100%) */
  /* linear-gradient(180deg, rgba(255, 255, 1, 1) 1%, rgba(220, 255, 5, 1) 31%, rgba(190, 255, 10, 1) 52%, rgba(161, 254, 15, 1) 71%, rgba(112, 255, 21, 1) 89%, rgba(31, 255, 32, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 33px;
  width: 5px;
  height: 5px;
  /* fill: rgba(0, 0, 0, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 33px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 14%, rgba(254, 255, 50, 0.800000011920929) 48%, rgba(254, 255, 50, 0.5) 58%, rgba(254, 255, 50, 0) 61%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 30px;
  width: 7px;
  height: 7px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 293px;
  top: 40px;
  width: 12px;
  height: 12px;
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 295px;
  top: 41px;
  width: 8px;
  height: 9px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 40px;
  width: 12px;
  height: 11px;
  /* radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(231, 231, 231, 0.9100000262260437) 12%, rgba(172, 172, 172, 0.6800000071525574) 37%, rgba(77, 77, 77, 0.3100000023841858) 72%, rgba(0, 0, 0, 0) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 43px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 295px;
  top: 42px;
  width: 9px;
  height: 8px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 295px;
  top: 42px;
  width: 9px;
  height: 8px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 42px;
  width: 6px;
  height: 7px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(255, 255, 1, 1) 1%, rgba(220, 255, 5, 1) 31%, rgba(190, 255, 10, 1) 52%, rgba(161, 254, 15, 1) 71%, rgba(112, 255, 21, 1) 89%, rgba(31, 255, 32, 1) 100%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 295px;
  top: 42px;
  width: 9px;
  height: 8px;
}

.clippath-2 {
  /* clippath-2 (GROUP) */
  position: absolute;
  left: 295px;
  top: 42px;
  width: 9px;
  height: 8px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 42px;
  width: 6px;
  height: 7px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 294px;
  top: 41px;
  width: 9px;
  height: 8px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 42px;
  width: 6px;
  height: 7px;
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 44px;
  width: 5px;
  height: 5px;
  /* fill: rgba(0, 0, 0, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 43px;
  width: 7px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 134, 87, 1) 1%, rgba(0, 134, 123, 1) 37%, rgba(0, 111, 134, 1) 64%, rgba(0, 94, 113, 1) 87%, rgba(0, 74, 89, 1) 100%) */
  /* linear-gradient(180deg, rgba(255, 255, 1, 1) 1%, rgba(220, 255, 5, 1) 31%, rgba(190, 255, 10, 1) 52%, rgba(161, 254, 15, 1) 71%, rgba(112, 255, 21, 1) 89%, rgba(31, 255, 32, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 43px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 296px;
  top: 42px;
  width: 7px;
  height: 7px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 13%, rgba(254, 255, 50, 0.800000011920929) 37%, rgba(254, 255, 50, 0.5) 58%, rgba(254, 255, 50, 0) 61%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 289px;
  top: 46px;
  width: 7px;
  height: 6px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 48px;
  width: 5px;
  height: 3px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.ellipse-2242 {
  /* Ellipse 2242 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 46px;
  width: 6px;
  height: 5px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 48px;
  width: 3px;
  height: 3px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 47px;
  width: 4px;
  height: 3px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 74, 89, 1) 0%, rgba(0, 94, 113, 1) 13%, rgba(0, 111, 134, 1) 36%, rgba(0, 134, 123, 1) 63%, rgba(0, 134, 87, 1) 99%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(220, 255, 5, 1) 0%, rgba(190, 255, 10, 1) 21%, rgba(161, 254, 15, 1) 41%, rgba(112, 255, 21, 1) 59%, rgba(31, 255, 32, 1) 76%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
}

.clippath-3 {
  /* clippath-3 (GROUP) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 47px;
  width: 5px;
  height: 4px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 290px;
  top: 46px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 46px;
  width: 5px;
  height: 4px;
  /* fill: rgba(255, 255, 69, 1) */
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 48px;
  width: 3px;
  height: 3px;
  /* fill: rgba(0, 0, 0, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 49px;
  width: 1px;
  height: 0px;
  /* fill: rgba(255, 255, 89, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 290px;
  top: 46px;
  width: 4px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 9%, rgba(254, 255, 50, 0.800000011920929) 39%, rgba(254, 255, 50, 0.5) 58%, rgba(254, 255, 50, 0) 61%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 294px;
  top: 36px;
  width: 6px;
  height: 6px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 38px;
  width: 4px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 38px;
  width: 3px;
  height: 3px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 37px;
  width: 4px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 74, 89, 1) 0%, rgba(0, 94, 113, 1) 13%, rgba(0, 111, 134, 1) 36%, rgba(0, 134, 123, 1) 63%, rgba(0, 134, 87, 1) 99%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 4px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 37px;
  width: 4px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(220, 255, 5, 1) 0%, rgba(190, 255, 10, 1) 21%, rgba(161, 254, 15, 1) 41%, rgba(112, 255, 21, 1) 59%, rgba(31, 255, 32, 1) 76%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 4px;
}

.clippath-3 {
  /* clippath-3 (GROUP) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 37px;
  width: 4px;
  height: 4px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 4px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 294px;
  top: 38px;
  width: 4px;
  height: 4px;
  /* fill: rgba(255, 255, 69, 1) */
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 37px;
  width: 3px;
  height: 3px;
  /* fill: rgba(0, 0, 0, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 296px;
  top: 38px;
  width: 1px;
  height: 0px;
  /* fill: rgba(255, 255, 89, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 294px;
  top: 37px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 14%, rgba(254, 255, 50, 0.800000011920929) 48%, rgba(254, 255, 50, 0.5) 58%, rgba(254, 255, 50, 0) 61%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 284px;
  top: 40px;
  width: 5px;
  height: 6px;
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 285px;
  top: 40px;
  width: 4px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 4px;
  height: 5px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 4px;
  height: 5px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 3px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 4px;
  height: 5px;
}

.clippath-1 {
  /* clippath-1 (GROUP) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 4px;
  height: 5px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 3px;
  height: 5px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 286px;
  top: 40px;
  width: 4px;
  height: 5px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 41px;
  width: 3px;
  height: 5px;
  /* fill: rgba(255, 255, 69, 1) */
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 2px;
  height: 3px;
  /* fill: rgba(0, 0, 0, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 284px;
  top: 40px;
  width: 2px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 3px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 3px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 74, 89, 1) 0%, rgba(0, 94, 113, 1) 13%, rgba(0, 111, 134, 1) 36%, rgba(0, 134, 123, 1) 63%, rgba(0, 134, 87, 1) 99%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 288px;
  top: 41px;
  width: 1px;
  height: 1px;
  /* fill: rgba(255, 255, 69, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 285px;
  top: 41px;
  width: 4px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 12%, rgba(254, 255, 50, 0.800000011920929) 32%, rgba(254, 255, 50, 0.5) 58%, rgba(254, 255, 50, 0) 61%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 295px;
  top: 33px;
  width: 9px;
  height: 9px;
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 6px;
  height: 7px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 295px;
  top: 34px;
  width: 9px;
  height: 8px;
  /* radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(231, 231, 231, 0.9100000262260437) 12%, rgba(172, 172, 172, 0.6800000071525574) 37%, rgba(77, 77, 77, 0.3100000023841858) 72%, rgba(0, 0, 0, 0) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 35px;
  width: 4px;
  height: 4px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 296px;
  top: 34px;
  width: 8px;
  height: 8px;
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 7px;
  height: 6px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 35px;
  width: 4px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 224, 11, 1) 1%, rgba(255, 221, 12, 1) 31%, rgba(255, 211, 17, 1) 52%, rgba(255, 195, 26, 1) 71%, rgba(255, 173, 38, 1) 89%, rgba(255, 155, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(255, 255, 1, 1) 1%, rgba(220, 255, 5, 1) 31%, rgba(190, 255, 10, 1) 52%, rgba(161, 254, 15, 1) 71%, rgba(112, 255, 21, 1) 89%, rgba(31, 255, 32, 1) 100%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.clip-path-group {
  /* Clip path group (GROUP) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 7px;
  height: 6px;
}

.clippath-2 {
  /* clippath-2 (GROUP) */
  position: absolute;
  left: 297px;
  top: 34px;
  width: 7px;
  height: 6px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 35px;
  width: 4px;
  height: 5px;
  /* fill: rgba(0, 0, 0, 1) */
}

.group {
  /* Group (GROUP) */
  position: absolute;
  left: 296px;
  top: 35px;
  width: 7px;
  height: 6px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 35px;
  width: 4px;
  height: 5px;
  /* fill: rgba(254, 255, 2, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 35px;
  width: 4px;
  height: 4px;
  /* fill: rgba(0, 0, 0, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 297px;
  top: 35px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 202, 0.10000000149011612) 14%, rgba(254, 255, 50, 0.800000011920929) 37%, rgba(254, 255, 50, 0.5) 51%, rgba(254, 255, 50, 0) 59%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 35px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 169, 11, 1) 1%, rgba(255, 166, 13, 1) 37%, rgba(255, 156, 22, 1) 64%, rgba(255, 140, 37, 1) 87%, rgba(255, 128, 49, 1) 100%) */
  /* linear-gradient(180deg, rgba(0, 134, 87, 1) 1%, rgba(0, 134, 123, 1) 37%, rgba(0, 111, 134, 1) 64%, rgba(0, 94, 113, 1) 87%, rgba(0, 74, 89, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 35px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.hole-2 {
  /* Hole 2 (GROUP) */
  position: absolute;
  left: 288px;
  top: 39px;
  width: 7px;
  height: 7px;
}

.ellipse-2241 {
  /* Ellipse 2241 (ELLIPSE) */
  position: absolute;
  left: 289px;
  top: 40px;
  width: 6px;
  height: 6px;
  /* linear-gradient(180deg, rgba(0, 52, 78, 0.20000000298023224) 0%, rgba(0, 31, 47, 1) 46%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 40px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 172, 51, 1) 0%, rgba(204, 69, 29, 1) 100%) */
  /* linear-gradient(180deg, rgba(255, 255, 1, 1) 0%, rgba(220, 255, 5, 1) 9%, rgba(190, 255, 10, 1) 20%, rgba(161, 254, 15, 1) 38%, rgba(112, 255, 21, 1) 58%, rgba(31, 255, 32, 1) 70%, rgba(0, 255, 1, 1) 97%) */
  /* fill: rgba(0, 82, 98, 1) */
  /* linear-gradient(180deg, rgba(0, 134, 87, 1) 1%, rgba(0, 134, 123, 1) 37%, rgba(0, 111, 134, 1) 64%, rgba(0, 94, 113, 1) 87%, rgba(0, 74, 89, 1) 100%) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 41px;
  width: 5px;
  height: 5px;
  /* linear-gradient(180deg, rgba(255, 172, 51, 1) 0%, rgba(204, 69, 29, 1) 100%) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 38%, rgba(112, 255, 21, 1) 58%, rgba(31, 255, 32, 1) 70%, rgba(0, 222, 1, 1) 97%) */
  /* fill: rgba(254, 255, 2, 1) */
  /* linear-gradient(180deg, rgba(161, 254, 15, 1) 36%, rgba(112, 255, 21, 1) 51%, rgba(31, 255, 32, 1) 61%, rgba(19, 215, 69, 1) 80%, rgba(0, 150, 130, 1) 100%) */
}

.ellipse-2239 {
  /* Ellipse 2239 (ELLIPSE) */
  position: absolute;
  left: 290px;
  top: 41px;
  width: 4px;
  height: 4px;
  /* fill: rgba(254, 255, 2, 1) */
}

.ellipse-2240 {
  /* Ellipse 2240 (ELLIPSE) */
  position: absolute;
  left: 288px;
  top: 39px;
  width: 7px;
  height: 7px;
  /* linear-gradient(180deg, rgba(254, 255, 50, 0) 39%, rgba(254, 255, 50, 0.5) 42%, rgba(254, 255, 50, 0.800000011920929) 52%, rgba(255, 255, 202, 0.10000000149011612) 86%, rgba(255, 255, 255, 0) 100%) */
}

.particles- {
  /* Particles  (GROUP) */
  position: absolute;
  left: 289px;
  top: 33px;
  width: 4px;
  height: 3px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 35px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 35px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 35px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 36px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 289px;
  top: 36px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 34px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 35px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 294px;
  top: 36px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 33px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 33px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 34px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.particles- {
  /* Particles  (GROUP) */
  position: absolute;
  left: 299px;
  top: 45px;
  width: 3px;
  height: 3px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 47px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 47px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 47px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 302px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 301px;
  top: 45px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 302px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 301px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 45px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 301px;
  top: 46px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.particles- {
  /* Particles  (GROUP) */
  position: absolute;
  left: 285px;
  top: 42px;
  width: 2px;
  height: 2px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 43px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 43px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 43px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 44px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 286px;
  top: 42px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 285px;
  top: 42px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.group-1686556492 {
  /* Group 1686556492 (GROUP) */
  position: absolute;
  left: 290px;
  top: 48px;
  width: 4px;
  height: 3px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 49px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 48px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 293px;
  top: 49px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 294px;
  top: 50px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 290px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 291px;
  top: 48px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 292px;
  top: 49px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.particles- {
  /* Particles  (GROUP) */
  position: absolute;
  left: 297px;
  top: 36px;
  width: 4px;
  height: 3px;
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 38px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 38px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 39px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 39px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 37px;
  width: 1px;
  height: 1px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 300px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 301px;
  top: 38px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 297px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 36px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 36px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 298px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.vector {
  /* Vector (VECTOR) */
  position: absolute;
  left: 299px;
  top: 37px;
  width: 0px;
  height: 0px;
  /* fill: rgba(222, 145, 255, 1) */
}

.glow {
  /* Glow (VECTOR) */
  position: absolute;
  left: 290px;
  top: 39px;
  width: 9px;
  height: 7px;
  /* radial-gradient(circle, rgba(255, 187, 0, 1) 0%, rgba(196, 144, 0, 1) 17%, rgba(127, 93, 0, 1) 40%, rgba(72, 53, 0, 1) 60%, rgba(33, 24, 0, 1) 78%, rgba(8, 6, 0, 1) 92%, rgba(0, 0, 0, 1) 100%) */
}

.instant-icons {
  /* Instant Icons (INSTANCE) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
}

.icon {
  /* Icon (INSTANCE) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(255, 255, 255, 1) */
}

.subtract {
  /* Subtract (VECTOR) */
  position: absolute;
  left: 285px;
  top: 33px;
  width: 18px;
  height: 18px;
  /* fill: rgba(34, 195, 142, 1) */
}

.details {
  /* Details (TEXT) */
  position: absolute;
  left: 307px;
  top: 32px;
  width: 137px;
  height: 20px;
  /* fill: rgba(255, 255, 255, 1) */
}

```

## Component States

| State | Status |
|-------|--------|
| Default | ⚠️ MISSING — needs design |
| Loading | ⚠️ MISSING — needs design |
| Pressed | ⚠️ MISSING — needs design |
| Hover | ⚠️ MISSING — needs design |
| Winner | ⚠️ MISSING — needs design |
| Non-Winner | ⚠️ MISSING — needs design |
| Processing | ⚠️ MISSING — needs design |
| Error | ⚠️ MISSING — needs design |
| Empty | ⚠️ MISSING — needs design |
| Disabled | ⚠️ MISSING — needs design |
| Hover (web only) | ⚠️ MISSING — needs design |

## Interactive Elements

| Element | Node ID | Size |
|---------|---------|------|
| Instant Icons | `528:22122` | 18×18px |
| Icon | `I528:22122;3781:36340` | 18×18px |
| Instant Icons | `528:25724` | 18×18px |
| Icon | `I528:25724;3781:36350` | 18×18px |
| Symbol Icons | `528:22133` | 18×18px |
| Planet | `I528:22133;6691:187647` | 18×18px |
| Instant Icons | `528:22134` | 18×18px |
| Icon | `I528:22134;3781:36350` | 18×18px |

**Instant Icons**
- Interaction spec: ⚠️ not yet defined

**Icon**
- Interaction spec: ⚠️ not yet defined

**Instant Icons**
- Interaction spec: ⚠️ not yet defined

**Icon**
- Interaction spec: ⚠️ not yet defined

**Symbol Icons**
- Interaction spec: ⚠️ not yet defined

**Planet**
- Interaction spec: ⚠️ not yet defined

**Instant Icons**
- Interaction spec: ⚠️ not yet defined

**Icon**
- Interaction spec: ⚠️ not yet defined

## Accessibility

### ❌ Issues

- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)
- Touch target too small: 18×18px (min: 44×44px)

### ⚠️ Warnings

- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to top edge (0px from edge, consider notch/Dynamic Island)
- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to top edge (0px from edge, consider notch/Dynamic Island)
- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to left edge (8px from edge, safe area typically ~20px)
- Element close to left edge (8px from edge, safe area typically ~20px)
- Element close to left edge (8px from edge, safe area typically ~20px)
- Element close to left edge (8px from edge, safe area typically ~20px)
- Element close to right edge
- Element close to right edge
- Element close to right edge
- Element close to right edge
- Element close to right edge
- Consider using CSS transform instead of left/top for animations (better performance)
- Consider using CSS transform instead of left/top for animations (better performance)
- Consider using CSS transform instead of left/top for animations (better performance)
- Consider using CSS transform instead of left/top for animations (better performance)
- Element close to right edge

### Accessibility Requirements

| Property | Value |
|----------|-------|
| accessibilityLabel | TBD |
| accessibilityRole | TBD |
| accessibilityHint | (if needed) |
| Focus order | Linear unless noted |
| Touch targets | Confirm via scale command or validate |

## Lottery/Gaming Edge Cases

| Scenario | Behavior |
|----------|----------|
| Long game name (e.g. "Mega Millions Megaplier") | ⚠️ confirm behavior |
| Max jackpot display ($1,600,000,000) | ⚠️ confirm behavior |
| Expired draw date | ⚠️ confirm behavior |
| Jackpot loading state | ⚠️ confirm behavior |
| Zero tickets / empty state | ⚠️ confirm behavior |
| Offline / no connection | ⚠️ confirm behavior |
| State-restricted game unavailability | ⚠️ confirm behavior |

## Assets

| Element | Node ID | Suggested Export | Output Path |
|---------|---------|------------------|-------------|
| Shape | `I528:22122;3781:36340;2637:97671` | `node skills/figma-inspector.js export --nodeId=I528:22122;3781:36340;2637:97671 --format=svg` | src/assets/icons/ |
| Subtract | `I528:25724;3781:36350;2637:97675` | `node skills/figma-inspector.js export --nodeId=I528:25724;3781:36350;2637:97675 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839063` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839063 --format=svg` | src/assets/icons/ |
| Vector 500 | `I528:22133;6691:187647;9123:839064` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839064 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839065` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839065 --format=svg` | src/assets/icons/ |
| Vector 503 | `I528:22133;6691:187647;9123:839066` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839066 --format=svg` | src/assets/icons/ |
| Vector 504 | `I528:22133;6691:187647;9123:839067` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839067 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839068` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839068 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839076` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839076 --format=svg` | src/assets/icons/ |
| Vector 500 | `I528:22133;6691:187647;9123:839077` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839077 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839078` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839078 --format=svg` | src/assets/icons/ |
| Vector 503 | `I528:22133;6691:187647;9123:839079` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839079 --format=svg` | src/assets/icons/ |
| Vector 504 | `I528:22133;6691:187647;9123:839080` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839080 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839081` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839081 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839089` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839089 --format=svg` | src/assets/icons/ |
| Vector 500 | `I528:22133;6691:187647;9123:839090` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839090 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839091` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839091 --format=svg` | src/assets/icons/ |
| Vector 503 | `I528:22133;6691:187647;9123:839092` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839092 --format=svg` | src/assets/icons/ |
| Vector 504 | `I528:22133;6691:187647;9123:839093` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839093 --format=svg` | src/assets/icons/ |
| Vector 502 | `I528:22133;6691:187647;9123:839094` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839094 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839101` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839101 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839102` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839102 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839103` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839103 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839104` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839104 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839105` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839105 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839106` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839106 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839107` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839107 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839108` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839108 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839109` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839109 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839110` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839110 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839111` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839111 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839112` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839112 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839113` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839113 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839114` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839114 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839115` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839115 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839116` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839116 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839117` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839117 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839118` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839118 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839119` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839119 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839120` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839120 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839121` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839121 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839122` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839122 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839123` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839123 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839124` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839124 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839125` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839125 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839126` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839126 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839127` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839127 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839128` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839128 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839129` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839129 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839130` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839130 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839131` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839131 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839134` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839134 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839135` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839135 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839138` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839138 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839141` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839141 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839143` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839143 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839144` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839144 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839145` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839145 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839147` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839147 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839150` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839150 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839151` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839151 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839154` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839154 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839157` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839157 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839159` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839159 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839160` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839160 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839161` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839161 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839162` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839162 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839165` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839165 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839167` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839167 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839168` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839168 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839171` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839171 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839174` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839174 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839176` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839176 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839177` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839177 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839178` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839178 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839181` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839181 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839183` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839183 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839184` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839184 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839187` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839187 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839190` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839190 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839192` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839192 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839193` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839193 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839194` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839194 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839200` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839200 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839203` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839203 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839205` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839205 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839206` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839206 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839207` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839207 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839208` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839208 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839209` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839209 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839210` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839210 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839214` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839214 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839215` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839215 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839218` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839218 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839221` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839221 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839223` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839223 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839224` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839224 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839226` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839226 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839227` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839227 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839230` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839230 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839231` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839231 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839235` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839235 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839236` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839236 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839237` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839237 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839238` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839238 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839239` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839239 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839240` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839240 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839241` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839241 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839242` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839242 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839243` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839243 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839244` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839244 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839245` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839245 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839246` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839246 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839247` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839247 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839248` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839248 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839249` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839249 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839250` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839250 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839251` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839251 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839252` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839252 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839254` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839254 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839255` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839255 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839256` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839256 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839257` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839257 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839258` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839258 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839259` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839259 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839260` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839260 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839261` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839261 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839262` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839262 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839263` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839263 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839264` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839264 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839265` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839265 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839266` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839266 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839267` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839267 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839268` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839268 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839269` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839269 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839270` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839270 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839272` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839272 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839273` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839273 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839274` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839274 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839275` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839275 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839276` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839276 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839277` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839277 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839279` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839279 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839280` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839280 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839281` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839281 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839282` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839282 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839283` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839283 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839284` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839284 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839285` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839285 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839286` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839286 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839287` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839287 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839288` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839288 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839290` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839290 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839291` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839291 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839292` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839292 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839293` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839293 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839294` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839294 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839295` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839295 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839296` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839296 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839297` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839297 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839298` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839298 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839299` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839299 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839300` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839300 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839301` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839301 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839302` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839302 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839303` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839303 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839304` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839304 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839305` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839305 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839306` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839306 --format=svg` | src/assets/icons/ |
| Vector | `I528:22133;6691:187647;9123:839307` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839307 --format=svg` | src/assets/icons/ |
| Glow | `I528:22133;6691:187647;9123:839308` | `node skills/figma-inspector.js export --nodeId=I528:22133;6691:187647;9123:839308 --format=svg` | src/assets/icons/ |
| Subtract | `I528:22134;3781:36350;2637:97675` | `node skills/figma-inspector.js export --nodeId=I528:22134;3781:36350;2637:97675 --format=svg` | src/assets/icons/ |

## Open Questions

### Blocking Issues

- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)
- [ ] Touch target too small: 18×18px (min: 44×44px)

### To Clarify

- [ ] Platform target (web/native/both?)
- [ ] Missing states: Default, Loading, Pressed, Hover, Winner, Non-Winner, Processing, Error, Empty, Disabled
- [ ] Interaction specs for: Instant Icons, Icon, Instant Icons, Icon, Symbol Icons, Planet, Instant Icons, Icon

