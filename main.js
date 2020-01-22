// Clicker Game JavaScript

// Setup the canvas and graphics content
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 500;
cnv.height = 800;

let cnv2 = document.getElementById('canvas2');
let ctx2 = cnv2.getContext('2d');
cnv2.width = 800;
cnv2.height = 325;

let cnv4 = document.getElementById('canvas4');
let ctx4 = cnv4.getContext('2d');
cnv4.width = 820;
cnv4.height = 525;

let cnv3 = document.getElementById('canvas3');
let ctx3 = cnv3.getContext('2d');
cnv3.width = 820;
cnv3.height = 525;

// Global Variables
let mainImgSize = 450
let mainImgEdge = (cnv.width - mainImgSize) / 2
let invImgSize = 70
let invImgSize2 = 54
let blockType = 'stone'

let frame = 0
let timer = false
let frame2 = 0

let clicks = 0
let mouseX
let mouseY

// items
let stone = 0
let coal = 0
let ironOre = 0
let iron = 0
let goldOre = 0
let gold = 0
let diamonds = 0
let obsidian = 0

let stoneInc = 1
let coalInc = 1
let ironInc = 1
let goldInc = 1
let diamondInc = 1
let obsidianInc = 1

let damage = 1
let criticalHitChance = 0 // 100
let criticalHitStonePrice = 10
let criticalHitIronPrice = 0
let criticalHitGoldPrice = 0
let criticalHitDiamondPrice = 0
let criticalHitPriceOffset = false

let autoClickers = 0
var autoClickerDelay = []
let autoClickerDamage = 2
let autoClickerDamageMult = 1

let healthBarLength = 400

let pickaxeType = 'wood'
let pickaxeLvl = 1
let lvlUpIn = 150
let lvlUpSpeed = 1
let lvlUpInOg = 150

let stonePrice
let coalPrice
let ironPrice
let goldPrice
let diamondPrice

let firstInvSpaceX = 14
let firstInvTextX = firstInvSpaceX + 38

let firstInvSpace2X = 14
let firstInvText2X = firstInvSpace2X + 30

let firstInvSpace4X = 14
let firstInvText4X = firstInvSpace2X + 30

let page = 1

let canvas3Y = 0

// health Variables
let health = 30
let ogHealth = 30

let stoneHealth = 30
let coalOreHealth = 60
let ironOreHealth = 120
let goldOreHealth = 200
let diamondOreHealth = 500
let obsidianHealth = 10000

// Pickaxe stuff
let inUsePickaxe = 1
let numberOfPickaxes = 1

// Pickaxe arrays and objects
var pickaxe1Effects = []
var pickaxe2Effects = []
var pickaxe3Effects = []
var pickaxe4Effects = []
var pickaxe5Effects = []
var pickaxe6Effects = []

var pickaxe1 = {
    type: 'wood',
    active: true,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

var pickaxe2 = {
    type: '',
    active: false,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

var pickaxe3 = {
    type: '',
    active: false,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

var pickaxe4 = {
    type: '',
    active: false,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

var pickaxe5 = {
    type: '',
    active: false,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

var pickaxe6 = {
    type: '',
    active: false,
    level: 1,
    clicksUntilLvlUp: 10,
    clicksUntilLvlUpOg: 10,
    levelUpSpeed: 1,
    fortune: 1,
}

// furnace objects
var furnace1 = {
    owned: false,
    level: 1,
    slot1: 'empty',
    slot2: 'empty',
    slot3: 'empty',
    slot1val: 0,
    slot2val: 0,
    slot3val: 0,
    fuel: 0 // out of 3
}

var furnace2 = {
    owned: false,
    level: 1,
    slot1: 'empty',
    slot2: 'empty',
    slot3: 'empty',
    slot1val: 0,
    slot2val: 0,
    slot3val: 0,
    fuel: 0 // out of 3
}

var furnace3 = {
    owned: false,
    level: 1,
    slot1: 'empty',
    slot2: 'empty',
    slot3: 'empty',
    slot1val: 0,
    slot2val: 0,
    slot3val: 0,
    fuel: 0 // out of 3
}

var furnace4 = {
    owned: false,
    level: 1,
    slot1: 'empty',
    slot2: 'empty',
    slot3: 'empty',
    slot1val: 0,
    slot2val: 0,
    slot3val: 0,
    fuel: 0 // out of 3
}

// Particle Variables
let particleNum = 4
let particleSizeMin = 7
let particleSizeMax = 14
let gravityStrength = 0.5
let particleXSpread = 5
let particleYSpread = 14
let particleOpacityChange = 2
let particleRed = 50
let particleGreen = 50
let particleBlue = 50

var particle = []
var particleX = []
var particleY = []
var particleMomentumX = []
var particleMomentumY = []
var particleOpacity = []
var particleSize = []
var particleFrame = []
var particleColor = []

// critical hit Variables
var criticalHit = []
var criticalHitX = []
var criticalHitY = []
var criticalHitOpacity = []
var criticalHitFrame = []

// damage Text Variables
var damageTxt = []
var damageTxtString = []
var damageTxtY = []
var damageTxtOpacity = []

// Store Images in Variables
let imgStone = document.getElementById('img1')
let imgCobbleStone = document.getElementById('img2')
let imgCoalOre = document.getElementById('img3')
let imgCoal = document.getElementById('img4')
let imgIronOre = document.getElementById('img5')
let imgIron = document.getElementById('img6')
let imgfurnace = document.getElementById('img7')
let imgWoodenPickaxe = document.getElementById('img8')
let imgStonePickaxe = document.getElementById('img9')
let imgGold = document.getElementById('img10')
let imgGoldOre = document.getElementById('img11')
let imgDiamondOre = document.getElementById('img12')
let imgDiamond = document.getElementById('img13')
let imgDiamondPickaxe = document.getElementById('img14')
let imgObsidian = document.getElementById('img15')
let imgGoldPickaxe = document.getElementById('img16')

// Other Stuff
document.getElementById('lvlUpIn').innerHTML = lvlUpIn
document.getElementById('pickLvl').innerHTML = pickaxeLvl

requestAnimationFrame(loop)
function loop() {
    // update values
    frame++

    // check if auto clicker does damage
    for (let x = 0; x <= autoClickers; x++) {
        autoClickerDelay[x]--

        if (autoClickerDelay[x] < 1) {
            // click
            health -= autoClickerDamage * autoClickerDamageMult

            // shake image
            mainImgSize = 440

            let randomXpos = Math.random() * 300 + 70
            let randomYpos = Math.random() * 300 + 70

            // create new particle values
            for (let x = 0; x < 2; x++) {
                particle[particle.length] = particle.length + 1
                particleX[particle.length] = randomXpos
                particleY[particle.length] = randomYpos
        
                particleMomentumX[particle.length] = (Math.random() - 0.5) * particleXSpread
                particleMomentumY[particle.length] = (Math.random() - 0.5) * particleYSpread
                particleSize[particle.length] = Math.floor(Math.random() * (particleSizeMax - particleSizeMin + 1) * 1000) / 1000 + particleSizeMin
                particleOpacity[particle.length] = 1
                particleColor[particle.length] = 'grey'
    
                particleFrame[particle.length] = 0
            }

            // reset delay
            autoClickerDelay[x] = 60

            // check if health is less than 1
            if (health <= 0) {
                newBlock()
            }
        }
    }

    // Draw Background
    ctx.fillStyle = 'rgba(27, 38, 60)'
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // Draw Main Img
    if (blockType == 'stone') {
        ctx.drawImage(imgStone, mainImgEdge, 50, mainImgSize, mainImgSize)
    } else if (blockType == 'coalOre') {
        ctx.drawImage(imgCoalOre, mainImgEdge, 50, mainImgSize, mainImgSize)
    } else if (blockType == 'ironOre') {
        ctx.drawImage(imgIronOre, mainImgEdge, 50, mainImgSize, mainImgSize)
    } else if (blockType == 'goldOre') {
        ctx.drawImage(imgGoldOre, mainImgEdge, 50, mainImgSize, mainImgSize)
    } else if (blockType == 'diamondOre') {
        ctx.drawImage(imgDiamondOre, mainImgEdge, 50, mainImgSize, mainImgSize)
    } else if (blockType == 'obsidian') {
        ctx.drawImage(imgObsidian, mainImgEdge, 50, mainImgSize, mainImgSize)
    } 

    if (mainImgSize < 450) {
        mainImgSize += 10
    }

    // Draw HealthBar
    ctx.fillStyle = 'black'
    ctx.fillRect(40, 510, 420, 16)

    healthBarLength = health * (400 / ogHealth)

    if (healthBarLength <= 80) {
        ctx.fillStyle = 'red'
    } else if(healthBarLength <= 240) {
        ctx.fillStyle = 'yellow'
    } else {
        ctx.fillStyle = 'green'
    }

    ctx.fillRect(50, 514, healthBarLength, 8)

    // Draw Health
    ctx.font = "38px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.fillText("Health: " + health, 80, 510)

    // Draw Inventory
    ctx.fillStyle = 'rgba(27, 38, 60)'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3
    for (let y = 600; y < 720; y += 100) {
        for (let x = 10; x < 450; x += 100) {
            ctx.fillRect(x, y, 80, 80)
            ctx.strokeRect(x, y, 80, 80)
        }
    }

    // Draw Items in Inventory
    drawImgInInventory(stone, imgCobbleStone, firstInvSpaceX, 604, invImgSize, firstInvTextX, 670)
    drawImgInInventory(coal, imgCoal, firstInvSpaceX + 100, 604, invImgSize, firstInvTextX + 100, 670)
    drawImgInInventory(ironOre, imgIronOre, firstInvSpaceX + 200, 604, invImgSize, firstInvTextX + 200, 670)
    drawImgInInventory(iron, imgIron, firstInvSpaceX + 300, 604, invImgSize, firstInvTextX + 300, 670)
    drawImgInInventory(goldOre, imgGoldOre, firstInvSpaceX + 400, 604, invImgSize, firstInvTextX + 400, 670)
    drawImgInInventory(gold, imgGold, firstInvSpaceX, 704, invImgSize, firstInvTextX, 770)
    drawImgInInventory(diamonds, imgDiamond, firstInvSpaceX + 100, 704, invImgSize, firstInvTextX + 100, 770)
    drawImgInInventory(obsidian, imgObsidian, firstInvSpaceX + 200, 704, invImgSize, firstInvTextX + 200, 770)

    // animated stuff
    // draw particles
    for (let x = 0; x <= particle.length; x++) {
        if (particleColor[x] == 'red') {
            ctx.fillStyle = 'rgba(250, 0, 0, ' + particleOpacity[x] + ')'
        } else if (particleColor[x] == 'grey') {
            ctx.fillStyle = 'rgba(50, 50, 50, ' + particleOpacity[x] + ')'
        }

        ctx.fillRect(particleX[x], particleY[x], particleSize[x], particleSize[x])

        // update values
        particleY[x] += particleMomentumY[x]
        particleMomentumY[x] += gravityStrength
        particleX[x] += particleMomentumX[x]
        particleOpacity[x] -= particleOpacityChange / 100

        particleFrame[x]++

        if (particleFrame[x] > 120) {
            // delete particle & particle properties
            particle.shift()
            particleX.shift()
            particleY.shift()
            particleMomentumX.shift()
            particleMomentumY.shift()
            particleOpacity.shift()
            particleSize.shift()
            particleFrame.shift()
        }
    }

    // draw critical hit text
    for (let x = 0; x <= criticalHit.length; x++) {
        ctx.fillStyle = 'rgba(250, 250, 250, ' + criticalHitOpacity[x] + ')'
        ctx.font = "28px Comic Sans MS"
        ctx.fillText('critical Hit!', criticalHitX[x] - 50, criticalHitY[x])

        // update values
        criticalHitY[x] -= 2
        criticalHitOpacity[x] -= 0.02

        if (criticalHitFrame[x] > 120) {
            // delete critical hit text & properties
            criticalHit.shift()
            criticalHitX.shift()
            criticalHitY.shift()
            criticalHitOpacity.shift()
            criticalHitFrame.shift()
        }
    }

    // draw damage text
    for (let x = 0; x <= damageTxt.length; x++) {
        if (damageTxtString[x] > damage) {
            // text is red
            ctx.fillStyle = 'rgba(250, 50, 50, ' + damageTxtOpacity[x] * 2 + ')'
            ctx.font = "33px Comic Sans MS"
        } else {
            // text is normal
            ctx.fillStyle = 'rgba(200, 200, 200, ' + damageTxtOpacity[x] + ')'
            ctx.font = "28px Comic Sans MS"
        }

        ctx.fillText('- ' + String(damageTxtString[x]), 260, damageTxtY[x])

        // update values
        damageTxtOpacity[x] -= 0.04
        damageTxtY[x] -= 2

    }

    // draw info
    if (criticalHitChance > 0) {
        ctx.font = "20px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.fillText('Critical Hit Chance: ' + criticalHitChance / 2 + ' / 50', 10, 20)
    }

    if (autoClickers > 0) {
        ctx.font = "20px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.fillText('Auto Clickers: ' + autoClickers, 10, 40)
    }

    requestAnimationFrame(loop)
}

function loop2() {
    // update variables

    // draw background
    let shape1width = 350

    ctx3.fillStyle = 'rgba(27, 38, 60)'
    ctx3.fillRect(0, 0, cnv3.width, cnv3.height)

    ctx3.fillStyle = 'rgba(20, 30, 53)'
    ctx3.fillRect(0, 0, shape1width, cnv3.height)

    // draw a shape
    let shape2Y = 100

    let shape2width = 200
    let shape2height = 180

    ctx3.fillStyle = 'rgba(47, 58, 80)'
    ctx3.fillRect((shape1width - shape2width) / 2, shape2Y + canvas3Y, shape2width, shape2height)

    ctx3.lineWidth = 2
    ctx3.strokeStyle = 'black'
    ctx3.strokeRect((shape1width - shape2width) / 2, shape2Y + canvas3Y, shape2width, shape2height)

    let imgSource

    // draw active pickaxe
    //if (pickaxeType == 'wood') {
    //   imgSource = imgWoodenPickaxe
    //} else if (pickaxeType == 'stone') {
    //    imgSource = imgStonePickaxe
    //} else if (pickaxeType == 'gold') {
    //    imgSource = imgGoldPickaxe
    //} else if (pickaxeType == 'diamond') {
    //    imgSource = imgDiamondPickaxe
    //}

    ctx3.drawImage(imgWoodenPickaxe, (shape1width - shape2width) / 2 + 10, shape2Y + canvas3Y)

    // draw text
    ctx3.fillStyle = 'white'

    ctx3.font = "33px Comic Sans MS"
    ctx3.fillText('Active Pickaxe:', 60, 50 + canvas3Y)

    ctx3.font = "25px Comic Sans MS"
    ctx3.fillText('Level: ' + pickaxeLvl, 170, 270 + canvas3Y)

    ctx3.font = "20px Comic Sans MS"
    ctx3.fillText('Pickaxe Effects:', 20, 320 + canvas3Y)

    // list pickaxe effects
    if (inUsePickaxe == 1) {
        for (let x = 0; x < pickaxe1Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe1Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    } else if (inUsePickaxe == 2) {
        for (let x = 0; x < pickaxe2Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe2Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    } else if (inUsePickaxe == 3) {
        for (let x = 0; x < pickaxe3Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe3Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    } else if (inUsePickaxe == 4) {
        for (let x = 0; x < pickaxe4Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe4Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    } else if (inUsePickaxe == 5) {
        for (let x = 0; x < pickax5Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe5Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    } else if (inUsePickaxe == 6) {
        for (let x = 0; x < pickax6Effects.length; x++) {
            ctx3.font = "20px Comic Sans MS"
            if (pickaxe6Effects[x] == 'efficiency') {
                ctx3.fillText('- Efficiency (x2 damage)', 20, x * 30 + 380 + canvas3Y)
            }
        }
    }

    if (page == 5) {
        requestAnimationFrame(loop2)
    }
}

// Event Listeners
document.getElementById('canvas').addEventListener('click', canvasClicked)

document.getElementById('shopBtn').addEventListener('click', openShop)
document.getElementById('shopBtn1').addEventListener('click', openShopPickaxes)
document.getElementById('shopBtn2').addEventListener('click', openShopUpgrades)
document.getElementById('shopBtn4').addEventListener('click', openShopFurnaces)

document.getElementById('pickaxeBtn').addEventListener('click', openPickaxeSect)
document.getElementById('infoBtn').addEventListener('click', openInfoSect)

document.getElementById('canvas3').addEventListener('wheel', scrollCanvas3)

document.getElementById('purchaseBtn1').addEventListener('mouseover', () => seePrice(10, 0, 0, 0, 0, false))
document.getElementById('purchaseBtn2').addEventListener('mouseover', () => seePrice(20, 0, 5, 0, 0, false))
document.getElementById('purchaseBtn3').addEventListener('mouseover', () => seePrice(30, 0, 15, 5, 0, false))
document.getElementById('purchaseBtn4').addEventListener('mouseover', () => seePrice(0, 0, 20, 10, 5, true))
document.getElementById('purchaseBtn5').addEventListener('mouseover', ()=> seePrice(15, 0, 0, 0, 0, false))
document.getElementById('purchaseBtn9').addEventListener('mouseover', () => seePrice(criticalHitStonePrice, 0, criticalHitIronPrice, criticalHitGoldPrice, criticalHitDiamondPrice, criticalHitPriceOffset))
document.getElementById('purchaseBtn10').addEventListener('mouseover', () => seePrice(5, 0, 0, 0, 0, false))
document.getElementById('purchaseBtn11').addEventListener('mouseover', () => seePrice(0, 0, 10, 10, 10, true))

document.getElementById('purchaseBtn9').addEventListener('mouseover', () => showInfo('Critical Hit:', 'Every time you click, there is a 1 in 50', 'chance it will be a critical hit. Purchase', 'again to increase this chance.', ''))
document.getElementById('purchaseBtn10').addEventListener('mouseover', () => showInfo('Auto Clicker:', 'auto clickers will do 2 damage per second', 'you can purchase multiple auto clickers.', '', ''))
document.getElementById('purchaseBtn11').addEventListener('mouseover', () => showInfo('Golden Clickers:', 'double the auto clickers damage.', '', '', ''))

document.getElementById('purchaseBtn1').addEventListener('click', () => purchasePickaxe('stone', 'images/stone-pickaxe2.png', 2))
document.getElementById('purchaseBtn2').addEventListener('click', () => purchasePickaxe('iron', 'images/iron-pickaxE.png', 4))
document.getElementById('purchaseBtn3').addEventListener('click', () => purchasePickaxe('gold', 'images/Golden_Pickaxe.png', 7))
document.getElementById('purchaseBtn4').addEventListener('click', () => purchasePickaxe('diamond', 'images/diamond_pickaxe.png', 10))
document.getElementById('purchaseBtn5').addEventListener('click', purchaseFurnace1)
document.getElementById('purchaseBtn9').addEventListener('click', purchaseUpgrade1)
document.getElementById('purchaseBtn10').addEventListener('click', purchaseUpgrade2)
document.getElementById('purchaseBtn11').addEventListener('click', purchaseUpgrade3)

document.getElementById('purchaseBtn1').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn2').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn3').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn4').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn5').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn6').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn7').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn8').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn9').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn10').addEventListener("mouseout", hidePrice)
document.getElementById('purchaseBtn11').addEventListener("mouseout", hidePrice)

document.getElementById('smeltingBtn').addEventListener('click', openSmelting)

document.getElementById('smeltingBtn1').addEventListener('click', returnToMain)
document.getElementById('pickaxeSectBtn1').addEventListener('click', returnToMain)
document.getElementById('shopBtn3').addEventListener('click', returnToMain)
document.getElementById('infoBtn1').addEventListener('click', returnToMain)

document.getElementById('furnace1').addEventListener('click', openFurnace1)

document.getElementById('useBtn1').addEventListener('click', openFurnace1)

document.getElementById('returnBtn1').addEventListener('click', returnToPage4Main)

document.getElementById('canvas4').addEventListener('click', canvas4clicked)

// Event Functions

function drawImgInInventory(item, imgSource, xPos, yPos, imgSize, textXPos, textYPos) {
    if (item > 0) {
        ctx.drawImage(imgSource, xPos, yPos,  imgSize, imgSize)

        ctx.font = "20px Comic Sans MS"
        ctx.fillStyle = "white"
        ctx.fillText("X " + item, textXPos, textYPos)
    }
}

function drawImgInInventoryCanvas4(item, imgSource, xPos, yPos, imgSize, textXPos, textYPos) {
    if (item > 0) {
        ctx4.drawImage(imgSource, xPos, yPos,  imgSize, imgSize)

        ctx4.font = "15px Comic Sans MS"
        ctx4.fillStyle = "white"
        ctx4.fillText("X " + item, textXPos, textYPos)
    }
}

function drawImgInInventoryCanvas2(item, imgSource, xPos, yPos, imgSize, textXPos, textYPos) {
    if (item > 0) {
        ctx2.drawImage(imgSource, xPos, yPos,  imgSize, imgSize)

        ctx2.font = "15px Comic Sans MS"
        ctx2.fillStyle = "white"
        ctx2.fillText("X " + item, textXPos, textYPos)
    }
}

function purchaseUpgrade1() {
    // check if you have enough resources
    if (stone >= stonePrice && iron >= ironPrice && gold >= goldPrice && diamonds >= diamondPrice) {
        // purchase upgrade
        // update values
        if (criticalHitChance <= 100) {
            criticalHitChance += 2

            deductCostFromResources()
        }

        // increase price
        if (criticalHitChance < 5) {
            changePrice(10, 0, 0, 0, false)
        } else if (criticalHitChance < 10) {
            changePrice(10, 5, 0, 0, false)
        } else if (criticalHitChance < 15) {
            changePrice(15, 10, 0, 0, false)
        } else if (criticalHitChance < 20) {
            changePrice(15, 10, 5, 0, false)
        } else if (criticalHitChance < 30) {
            changePrice(20, 15, 10, 0, false)
        } else if (criticalHitChance < 40) {
            changePrice(0, 15, 10, 5, true)
        } else if (criticalHitChance < 50) {
            changePrice(0, 20, 15, 10, true)
        } else if (criticalHitChance < 70) {
            changePrice(0, 25, 20, 15, true)
        } else if (criticalHitChance < 90) {
            changePrice(0, 30, 25, 20, true)
        } else {
            changePrice(0, 30, 30, 30, true)
        }
    } else {
        // don't have enough
    }

    function changePrice(sp, ip, gp, dp, offset) {
        criticalHitStonePrice = sp
        criticalHitIronPrice = ip
        criticalHitGoldPrice = gp
        criticalHitDiamondPrice = dp
        criticalHitPriceOffset = offset
    }
}

function purchaseUpgrade2() {
    // check if you have enough resources
    if (stone >= stonePrice && iron >= ironPrice && gold >= goldPrice && diamonds >= diamondPrice) {
        // purchase upgrade
        // update values
        autoClickers++
        autoClickerDelay[autoClickerDelay.length] = 60

        deductCostFromResources()
    } else {
        // don't have enough
    }
}

function purchaseUpgrade3() {
    // check if you have enough resources
    if (stone >= stonePrice && iron >= ironPrice && gold >= goldPrice && diamonds >= diamondPrice) {
        // purchase upgrade
        // update values
        autoClickerDamage *= 2

        deductCostFromResources()
    } else {
        // don't have enough
    }
}

function showInfo(headerString, line1String, line2String, line3String, line4String) {
    // draw upgrade name
    ctx2.fillStyle = 'white'
    ctx2.font = '20px Comic Sans MS'
    ctx2.fillText(headerString, 410, 180)

    // draw upgrade info
    ctx2.fillText(line1String, 410, 220)
    ctx2.fillText(line2String, 410, 245)
    ctx2.fillText(line3String, 410, 270)
    ctx2.fillText(line4String, 410, 295)

}

function scrollCanvas3(event) {
    if (event.deltaY > 0) {
        // move page up
            canvas3Y -= 20
    } else {
        // move page down
        if (canvas3Y < 0) {
            canvas3Y += 20
        }
    }
}

function openPickaxeSect() {
    // hide current page
    document.getElementById('page1').classList.add('hide')
    // open Pickaxe Section
    document.getElementById('page5').classList.remove('hide')
    // update variables
    page = 5
    canvas3Y = 0

    requestAnimationFrame(loop2)
}

function purchaseFurnace1() {
    // check if you have enough resources
    if (stone >= stonePrice && iron >= ironPrice && gold >= goldPrice && diamonds >= diamondPrice) {
        // purchase furnace1
        furnace1.owned = true

        document.getElementById('furnaceImg1').src = 'images/Furnace.png'
        document.getElementById('useBtn1').classList.remove('offBtn')
        document.getElementById('upgradeFurnaceBtn1').classList.remove('offBtn')
        // update values
        deductCostFromResources()
    } else {
        // don't have enough
    }
}

function deductCostFromResources() {
    stone -= stonePrice
    coal -= coalPrice
    iron -= ironPrice
    gold -= goldPrice
    diamonds -= diamondPrice
}

function openFurnace1() {
    // check if furnace is owned
    if (furnace1.owned) {
        // open furnace 1
        page = 4.1

        // hide current page
        document.getElementById('page4-main').classList.add('hide')
        // open furnace 1
        document.getElementById('page4-1').classList.remove('hide')
        document.getElementById('canvas4').classList.remove('hide')

        // draw furnace interface
        drawFurnaceInterface()
    } else {
    // hide current page
    document.getElementById('page4').classList.add('hide')
    // open shop furnaces
    document.getElementById('page2').classList.remove('hide')
    hidePrice()
    openShopFurnaces()
    }
}

function canvas4clicked() {
    let cnv4Rect = cnv4.getBoundingClientRect()
    
    // find furnace number
    let furnaceNum

    if (page == 4.1) {
        furnaceNum = 1
    } else if (page == 4.2) {
        furnaceNum = 2 
    } else if (page == 4.3) {
        furnaceNum = 3
    } else {
        furnaceNum = 4
    }

    mouseX = event.x - cnv4Rect.x
    mouseY = event.y - cnv4Rect.y

    // check if a slot is clicked
    if (mouseY >= 380 && mouseY <= 440) {
        if (mouseX >= 10 && mouseX <= 75) {
            // slot 1 clicked
        } else if (mouseX <= 150) {
            // slot2 clicked
            if (coal > 0) {
                if (furnaceNum == 1) {
                    furnace1.slot2 = 'coal'
                    furnace1.slot2val++
                    coal--
                }
            }
        } else if (mouseX <= 225) {
            // slot3 clicked
            if (ironOre > 0) {
                if (furnaceNum == 1 && furnace1.slot1 == 'empty' || furnace1.slot1 == 'ironOre') {
                    if ( furnace1.slot3 == 'empty' || furnace1.slot3 == 'iron') {
                        furnace1.slot1 = 'ironOre'
                        furnace1.slot1val++
                        ironOre--
                    }
                }
            }
        } else if (mouseX <= 300) {
            // slot4 clicked
        } else if (mouseX <= 375) {
            // slot5 clicked
            if (goldOre > 0) {
                if (furnaceNum == 1 && furnace1.slot1 == 'empty' || furnace1.slot1 == 'goldOre' && furnace1.slot3 == 'empty' || furnace1.slot3 == 'gold' ) {
                    furnace1.slot1 = 'goldOre'
                    furnace1.slot1val++
                    goldOre--
                }
            }
        }
    } else if (mouseY >= 445 && mouseY <= 515) {
        if (mouseX >= 10 && mouseX <= 75) {
            // slot 6 clicked
        } else if (mouseX <= 150) {
            // slot7 clicked
        } else if (mouseX <= 225) {
            // slot8 clicked
        } else if (mouseX <= 300) {
            // slot9 clicked
        } else if (mouseX <= 375) {
            // slot10 clicked
        }
    } else if (mouseY >= 100 && mouseY <= 220) {
        if (mouseX >= 50 && mouseX <= 170) {
            // furnace slot 1 clicked
            if (furnaceNum == 1) {
                if (furnace1.slot1 == 'ironOre') {
                    ironOre++ 
                } else if (furnace1.slot1 == 'goldOre') {
                    goldOre++
                }

                furnace1.slot1val--
            }
        } else if (mouseX >= 200 && mouseX <= 320) {
            // furnace slot 2 clicked
            if (furnaceNum == 1) {
                if (furnace1.slot2 == 'coal') {
                    coal++
                }

                furnace1.slot2val--
            }
        } else if (mouseX >= 620 && mouseX <= 740) {
            // furnace slot 3 clicked
            if (furnaceNum == 1) {
                if (furnace1.slot3 == 'iron') {
                    iron++
                } else if (furnace1.slot3 == 'gold') {
                    gold++
                }

                furnace1.slot3val--
            }
        }
    }
}

function drawFurnaceInterface() {
    // find furnace number
    let furnaceNum

    if (page == 4.1) {
        furnaceNum = 1
    } else if (page == 4.2) {
        furnaceNum = 2 
    } else if (page == 4.3) {
        furnaceNum = 3
    } else {
        furnaceNum = 4
    }

    // update variables
    if (timer) {
        frame2++
    }

    // animate stuff in furnace
    let fuelLength = 90 * furnace1.fuel

    // draw background
    ctx4.fillStyle = 'rgba(27, 38, 60)'
    ctx4.fillRect(0, 0, cnv4.width, cnv4.height)

    ctx4.fillStyle = "rgba(50, 50, 80)"
    ctx4.fillRect(0, 370, cnv4.width, 500)

    // draw inventory
    ctx4.fillStyle = 'rgba(27, 38, 60)'
    ctx4.strokeStyle = 'black'
    ctx4.lineWidth = 2.5
    for (let y = 380; y < 800; y += 75) {
        for (let x = 10; x < 350; x += 75) {
            ctx4.fillRect(x, y, 60, 60)
            ctx4.strokeRect(x, y, 60, 60)
        }
    }

    // draw items in inventory
    drawImgInInventoryCanvas4(stone, imgCobbleStone, firstInvSpace4X, 383, invImgSize2, firstInvText4X, 435)
    drawImgInInventoryCanvas4(coal, imgCoal, firstInvSpace4X + 75, 383, invImgSize2, firstInvText4X + 75, 435)
    drawImgInInventoryCanvas4(ironOre, imgIronOre, firstInvSpace4X + 150, 383, invImgSize2, firstInvText4X + 150, 435)
    drawImgInInventoryCanvas4(iron, imgIron, firstInvSpace4X + 225, 383, invImgSize2, firstInvText4X + 225, 435)
    drawImgInInventoryCanvas4(goldOre, imgGoldOre, firstInvSpace4X + 300, 383, invImgSize2, firstInvText4X + 300, 435)
    drawImgInInventoryCanvas4(gold, imgGold, firstInvSpace4X, 458, invImgSize2, firstInvText4X, 510)
    drawImgInInventoryCanvas4(diamonds, imgDiamond, firstInvSpace4X + 75, 458, invImgSize2, firstInvText4X + 75, 510)
    drawImgInInventoryCanvas4(obsidian, imgObsidian, firstInvSpace4X + 150, 458, invImgSize2, firstInvText4X + 150, 510)

    // draw boxes
    ctx4.strokeStyle = 'black'
    ctx4.fillStyle = 'rgba(47, 58, 80, 0.8)'

    ctx4.fillRect(50, 100, 120, 120)
    ctx4.strokeRect(50, 100, 120, 120)
    ctx4.fillRect(200, 100, 120, 120)
    ctx4.strokeRect(200, 100, 120, 120)
    ctx4.fillRect(cnv4.width - 200, 100, 120, 120)
    ctx4.strokeRect(cnv4.width - 200, 100, 120, 120)

    ctx4.fillStyle = 'red'
    ctx4.fillRect(50, 240, fuelLength, 10)
    ctx4.strokeRect(50, 240, 270, 10)

    // draw items in furnace
    if (furnaceNum == 1) {
        if (furnace1.slot1 == 'ironOre') {
            // draw ironOre
            ctx4.drawImage(imgIronOre, 55, 105, 110, 110)
        } else if (furnace1.slot1 == 'goldOre') {
            // draw GoldOre
            ctx4.drawImage(imgGoldOre, 55, 105, 110, 110)
        }
        
        if (furnace1.slot1val > 0) {
            // draw amount
            ctx4.fillStyle = 'white'
            ctx4.fillText('X ' + furnace1.slot1val, 130, 210)
        }

        if (furnace1.slot2 == 'coal') {
            // draw coal
            ctx4.drawImage(imgCoal, 205, 105, 110, 110)
        }

        if (furnace1.slot2val > 0) {
            // draw amount
            ctx4.fillStyle = 'white'
            ctx4.fillText('X ' + furnace1.slot2val, 280, 210)
        }

        if (furnace1.slot3 == 'iron') {
            // draw iron
            ctx4.drawImage(imgIron, 625, 105, 110, 110)
        } else if (furnace1.slot3 == 'gold') {
            // draw gold
            ctx4.drawImage(imgGold, 625, 105, 110, 110)
        }

        if (furnace1.slot3val > 0) {
            // draw amount
            ctx4.fillStyle = 'white'
            ctx4.fillText('X ' + furnace1.slot3val, 700, 210)
        }
    }

    // smelting stuff
    if (furnaceNum == 1) {
        if (furnace1.slot1val > 0 && furnace1.slot2val > 0 && furnace1.fuel < 1) {
            // if fuel is out, burn another coal
            furnace1.slot2val--
            furnace1.fuel = 3

            timer = true
            frame2 = 0
        }

        if (frame2 >= 120 && furnace1.fuel > 0) {
            frame2 = 0
            furnace1.fuel--
            if (furnace1.slot1val > 0) {
                if (furnace1.slot1 == 'ironOre') {
                    // convert iron ore to iron ingot
                    furnace1.slot3 = 'iron'
                    furnace1.slot3val++
                } else {
                    // convert gold ore to gold ingot
                    furnace1.slot3 = 'gold'
                    furnace1.slot3val++
                }

                furnace1.slot1val--
            }
        }

        // check if there is no coal left
        if (furnace1.slot2val < 1) {
            furnace1.slot2 = 'empty'
        }

        // check if there is no slot1 item left
        if (furnace1.slot1val < 1) {
            furnace1.slot1 = 'empty'
        }

        // check if there is no slot3 item left
        if (furnace1.slot3val < 1) {
            furnace1.slot3 = 'empty'
        }
    }

    // draw arrow
    let arrowStartPosX = 510
    let arrowStartPosY = 105
    ctx4.fillStyle = 'rgba(47, 58, 80, 0.8)'
    ctx4.fillRect(370, 130, 140, 50)

    ctx4.beginPath();
    ctx4.moveTo(arrowStartPosX, arrowStartPosY)
    ctx4.lineTo(arrowStartPosX + 50, arrowStartPosY + 50)
    ctx4.lineTo(arrowStartPosX, arrowStartPosY + 100)
    ctx4.closePath()
    ctx4.fill()

    ctx4.fillStyle = 'white'

    // draw text
    ctx4.font = '20px Comic Sans MS'

    ctx4.fillStyle = 'white'
    ctx4.fillText('Ore:', 80, 80)
    ctx4.fillText('Fuel:', 230, 80)
    ctx4.fillStyle = 'grey'
    ctx4.fillText('click an item to place it in the furnace,', 10, 335)
    ctx4.fillText('this will only work for certain items.', 10,360)

    requestAnimationFrame(drawFurnaceInterface)
}

function returnToPage4Main() {
    // hide current page
    document.getElementById('page4-1').classList.add('hide')
    document.getElementById('page4-2').classList.add('hide')
    document.getElementById('page4-3').classList.add('hide')
    document.getElementById('page4-4').classList.add('hide')
    document.getElementById('canvas4').classList.add('hide')
    // open main page
    document.getElementById('page4-main').classList.remove('hide')
}

function openSmelting() {
    // hide current page
    document.getElementById('page1').classList.add('hide')
    // open Smelting
    document.getElementById('page4').classList.remove('hide')
    // update variables
    page = 4
}

function purchasePickaxe(pickType, imgSrc, pickDamage) {
    // check if you have enough resources
    if (stone >= stonePrice && iron >= ironPrice && gold >= goldPrice && diamonds >= diamondPrice) {
        // purchase pickaxe
        document.getElementById('pickaxeImg').src = imgSrc

        // update values
        damage = pickDamage
        pickaxeType = pickType
        numberOfPickaxes++
        inUsePickaxe = numberOfPickaxes
        pickaxeLvl = 1
        lvlUpIn = 150
        lvlUpInOg = 150
        
        stoneInc = 1
        coalInc = 1
        ironInc = 1
        goldInc = 1
        diamondInc = 1
        obsidianInc = 1

        // update page
        document.getElementById('pickLvl').innerHTML = pickaxeLvl
        document.getElementById('lvlUpIn').innerHTML = lvlUpIn

        // store pickaxe values in correct object
        storePickValuesInObject(2, pickaxe2, pickaxe1Effects)
        storePickValuesInObject(3, pickaxe3, pickaxe2Effects)
        storePickValuesInObject(4, pickaxe4, pickaxe3Effects)
        storePickValuesInObject(5, pickaxe5, pickaxe4Effects)
        storePickValuesInObject(6, pickaxe6, pickaxe5Effects)

        deductCostFromResources()
    } else {
        // don't have enough
    }

    function storePickValuesInObject(pickNum, object, array) {
        if (inUsePickaxe == pickNum) {
            object.active = true
            object.level = 1
            object.type = pickType
        }
    }
}

function seePrice(stoneP, coalP, ironP, goldP, diamondP, moveAllLeft) {
    let firstImgX = 180
    // Establish Prices
    stonePrice = stoneP
    coalPrice = coalP
    ironPrice = ironP
    goldPrice = goldP
    diamondPrice = diamondP

    // Draw Prices & images
    costText()
    if (!moveAllLeft) {
        drawImg(imgCobbleStone, 0, stonePrice > 0, stonePrice)
        drawImg(imgIron, 100, ironPrice > 0, ironPrice)
        drawImg(imgGold, 200, goldPrice > 0, goldPrice)
    } else {
        drawImg(imgIron, 0, ironPrice > 0, ironPrice)
        drawImg(imgGold, 100, goldPrice > 0, goldPrice)
        drawImg(imgDiamond, 200, diamondPrice > 0, diamondPrice)
    }

    function drawImg(imageSrc, XOffSet, requirement, priceType) {
        if (requirement) {
            ctx2.drawImage(imageSrc, firstImgX + XOffSet, 50,  invImgSize2, invImgSize2)

            ctx2.font = "15px Comic Sans MS"
            ctx2.fillStyle = "white"
            ctx2.fillText("X " + priceType, firstImgX + 38 + XOffSet, 101)
        }
    }
}

function costText() {
    ctx2.font = "40px Comic Sans MS"
    ctx2.fillStyle = "white"
    ctx2.fillText('Cost:', 40, 90)
}

function hidePrice() {
    // Draw Background
    ctx2.fillStyle = 'rgba(27, 38, 60)'
    ctx2.fillRect(0, 0, cnv2.width, cnv2.height)

    ctx2.fillStyle = "rgba(50, 50, 80)"
    ctx2.fillRect(0, 20, cnv2.width, 120)

    drawInvCanvas2()
}

function canvasClicked(event) {
    // get mouse position
    let cnvRect = cnv.getBoundingClientRect()

    mouseX = event.x - cnvRect.x
    mouseY = event.y - cnvRect.y

    mouseX = mouseX * 5 / 4
    mouseY = mouseY * 5 / 4

    // establish values
    let multiplier = 1

    // Check if mouse is on main image
    if (mouseY >= 50 && mouseY <= mainImgSize + 50) {
        // check wether hit was critical
        let randomVal = Math.random() * 100

        if (randomVal <= criticalHitChance) {
            // critical hit
            multiplier = Math.floor(Math.random() * 10) + 1
            health -= damage * multiplier

            // create new particle values
            spawnParticles('grey', mouseX, mouseY)

            // create new critical hit values
            criticalHit[criticalHit.length] = criticalHit.length + 1
            criticalHitX[criticalHit.length] = mouseX
            criticalHitY[criticalHit.length] = mouseY
            criticalHitOpacity[criticalHit.length] = 1

            // shake image
            mainImgSize = 405
        } else {
            // normal hit
            health -= damage * multiplier

            // create new particle values
            spawnParticles('grey', mouseX, mouseY)

            // shake image
            mainImgSize = 430
        }

        clicks++

        // create new damage text values
        damageTxt[damageTxt.length] = damageTxt.length + 1
        damageTxtString[damageTxt.length] = damage * multiplier
        damageTxtY[damageTxt.length] = 480
        damageTxtOpacity[damageTxt.length] = 1

        if (health <= 0) {
            newBlock()
        }

        // pickaxe level stuff
        lvlUpIn -= lvlUpSpeed
        document.getElementById('lvlUpIn').innerHTML = lvlUpIn

        // record pickaxe values in object
        if (inUsePickaxe == 1) {
            pickaxe1.clicksUntilLvlUp = lvlUpIn
        } else if (inUsePickaxe == 2) {
            pickaxe2.clicksUntilLvlUp = lvlUpIn
        } else if (inUsePickaxe == 3) {
            pickaxe3.clicksUntilLvlUp = lvlUpIn
        } else if (inUsePickaxe == 4) {
            pickaxe4.clicksUntilLvlUp = lvlUpIn
        } else if (inUsePickaxe == 5) {
            pickaxe5.clicksUntilLvlUp = lvlUpIn
        } else if (inUsePickaxe == 6) {
            pickaxe6.clicksUntilLvlUp = lvlUpIn
        }

        if (lvlUpIn <= 0) {
            // level up pickaxe
            pickaxeLvl ++
            lvlUpInOg *= 2
            lvlUpIn = lvlUpInOg

            // update page
            document.getElementById('pickLvl').innerHTML = pickaxeLvl
            document.getElementById('lvlUpIn').innerHTML = lvlUpIn

            // Give pickaxe a random effect
            // find pickaxe number
            if (inUsePickaxe == 1) {
                givePickaxeAnEffect(pickaxe1Effects)
            } else if (inUsePickaxe == 2) {
                givePickaxeAnEffect(pickaxe2Effects)
            } else if (inUsePickaxe == 3) {
                givePickaxeAnEffect(pickaxe3Effects)
            } else if (inUsePickaxe == 4) {
                givePickaxeAnEffect(pickaxe4Effects)
            } else if (inUsePickaxe == 5) {
                givePickaxeAnEffect(pickaxe5Effects)
            } else if (inUsePickaxe == 6) {
                givePickaxeAnEffect(pickaxe6Effects)
            }
            
            // record pickaxe values in object
            if (inUsePickaxe == 1) {
                pickaxe1.clicksUntilLvlUpOg *= 2
            } else if (inUsePickaxe == 2) {
                pickaxe2.clicksUntilLvlUpOg *= 2
            } else if (inUsePickaxe == 3) {
                pickaxe3.clicksUntilLvlUpOg *= 2
            } else if (inUsePickaxe == 4) {
                pickaxe4.clicksUntilLvlUpOg *= 2
            } else if (inUsePickaxe == 5) {
                pickaxe5.clicksUntilLvlUpOg *= 2
            } else if (inUsePickaxe == 6) {
                pickaxe6.clicksUntilLvlUpOg *= 2
            }

            // message player that pickaxe has leveled up
            frame = 0
            requestAnimationFrame(PickaxeLvlUp)
        }
    }

    function givePickaxeAnEffect(array) {
        // give pickaxe efficiency
        array[array.length] = 'efficiency'

        updatePickValues(array)
    }

    function spawnParticles(colour, xPos, yPos) {
        for (let x = 0; x < particleNum; x++) {
            particle[particle.length] = particle.length + 1
            particleX[particle.length] = xPos
            particleY[particle.length] = yPos
    
            particleMomentumX[particle.length] = (Math.random() - 0.5) * particleXSpread
            particleMomentumY[particle.length] = (Math.random() - 0.5) * particleYSpread
            particleSize[particle.length] = Math.floor(Math.random() * (particleSizeMax - particleSizeMin + 1) * 1000) / 1000 + particleSizeMin
            particleOpacity[particle.length] = 1
            particleColor[particle.length] = colour

            particleFrame[particle.length] = 0
        }
    }
}

function updatePickValues(array) {
    if (array[0] == 'efficiency') {
        damage *= 2
    } else if (array[0] == 'fortune') {
        stoneInc++
        coalInc++
        ironInc++
        goldInc++
        diamondInc++
        obsidianInc++
    } else if (array[0] == 'magic') {
        lvlUpSpeed++
    }
}

function newBlock() {

    // drop item according to block type
    if (blockType == 'stone') {
        stone += stoneInc
    } else if (blockType == 'coalOre') {
        coal += coalInc
    } else if (blockType == 'ironOre') {
        ironOre += ironInc
    } else if (blockType == 'goldOre') {
        goldOre += goldInc
    } else if (blockType == 'diamondOre') {
        diamonds += diamondInc
    } else if (blockType == 'obsidian') {
        obsidian += obsidianInc
    } else {
        // blocktype unknown
    }

    // Create New block
    let randomVal = Math.random() * 10

    if (pickaxeType == 'wood') {
        createBlock(8.6, 10, 0, 0, 0)
    } else if (pickaxeType == 'stone') {
        createBlock(6.8, 8.5, 10, 0, 0)
    } else if (pickaxeType == 'iron') {
        createBlock(5.8, 7, 9, 9.9, 10)
    } else if (pickaxeType == 'gold') {
        createBlock(4.8, 6.5, 8.5, 9.6, 10)
    } else if (pickaxeType == 'diamond') {
        createBlock(4.5, 6, 8, 9, 9.9)
    }

    function createBlock(stoneChance, coalChance, ironChance, goldChance, diamondChance) {
        if (randomVal <= stoneChance) {
            // Create New stone block
            blockType = 'stone'
            health = stoneHealth
            ogHealth = stoneHealth
        } else  if (randomVal <= coalChance) {
            // Create New coal ore
            blockType = 'coalOre'
            health = coalOreHealth
            ogHealth = coalOreHealth
        } else  if (randomVal <= ironChance){
            // Create New iron ore
            blockType = 'ironOre'
            health = ironOreHealth
            ogHealth = ironOreHealth
        } else if (randomVal <= goldChance){
            // Create New gold ore
            blockType = 'goldOre'
            health = goldOreHealth
            ogHealth = goldOreHealth
        } else if (randomVal <= diamondChance) {
            // Create New diamond ore
            blockType = 'diamondOre'
            health = diamondOreHealth
            ogHealth = diamondOreHealth
        } else {
            // Create New obsidian ore
            blockType = 'obsidian'
            health = obsidianHealth
            ogHealth = obsidianHealth
        }
    }
}

function drawInvCanvas2() {

    // draw inventory
    ctx2.fillStyle = 'rgba(27, 38, 60)'
    ctx2.strokeStyle = 'black'
    ctx2.lineWidth = 2.5
    for (let y = 180; y < 400; y += 75) {
        for (let x = 10; x < 350; x += 75) {
            ctx2.fillRect(x, y, 60, 60)
            ctx2.strokeRect(x, y, 60, 60)
        }
    }

    // draw items in inventory
    drawImgInInventoryCanvas2(stone, imgCobbleStone, firstInvSpace2X, 184, invImgSize2, firstInvText2X, 235)
    drawImgInInventoryCanvas2(coal, imgCoal, firstInvSpace2X + 75, 184, invImgSize2, firstInvText2X + 75, 235)
    drawImgInInventoryCanvas2(ironOre, imgIronOre, firstInvSpace2X + 150, 184, invImgSize2, firstInvText2X + 150, 235)
    drawImgInInventoryCanvas2(iron, imgIron, firstInvSpace2X + 225, 184, invImgSize2, firstInvText2X + 225, 235)
    drawImgInInventoryCanvas2(goldOre, imgGoldOre, firstInvSpace2X + 300, 184, invImgSize2, firstInvText2X + 300, 235)
    drawImgInInventoryCanvas2(gold, imgGold, firstInvSpace2X, 259, invImgSize2, firstInvText2X, 310)
    drawImgInInventoryCanvas2(diamonds, imgDiamond, firstInvSpace2X + 75, 259, invImgSize2, firstInvText2X + 75, 310)
    drawImgInInventoryCanvas2(obsidian, imgObsidian, firstInvSpace2X + 150, 259, invImgSize2, firstInvText2X + 150, 310)
}

function openShop() {
    // hide current page
    document.getElementById('page1').classList.add('hide')
    // open shop
    document.getElementById('page2').classList.remove('hide')
    // update variables
    page = 2
    // draw Inv on Canvas2
    hidePrice()
}

function PickaxeLvlUp() {
    frame++

    if (frame < 240) {
        // message player
        document.getElementById('lvlUpInP').classList.add('hide')
        document.getElementById('message1').classList.remove('hide')

        requestAnimationFrame(PickaxeLvlUp)
    } else {
        document.getElementById('lvlUpInP').classList.remove('hide')
        document.getElementById('message1').classList.add('hide')
    }
}

function returnToMain() {
    // hide current page
    document.getElementById('page2').classList.add('hide')
    document.getElementById('page3').classList.add('hide')
    document.getElementById('page4').classList.add('hide')
    document.getElementById('page5').classList.add('hide')
    // open main page
    document.getElementById('page1').classList.remove('hide')
    // update variables
    page = 1
}

function openShopPickaxes() {
    // highlight button
    document.getElementById('shopBtn1').classList.add('activeBtn')
    document.getElementById('shopBtn2').classList.remove('activeBtn')
    document.getElementById('shopBtn4').classList.remove('activeBtn')

    // hide current page
    document.getElementById('page2-2').classList.add('hide')
    document.getElementById('page2-1').classList.add('hide')
    document.getElementById('page2-3').classList.add('hide')
    // open shop pickaxes
    document.getElementById('page2-1').classList.remove('hide')
}

function openShopUpgrades() {
    // highlight button
    document.getElementById('shopBtn2').classList.add('activeBtn')
    document.getElementById('shopBtn1').classList.remove('activeBtn')
    document.getElementById('shopBtn4').classList.remove('activeBtn')

    // hide current page
    document.getElementById('page2-1').classList.add('hide')
    document.getElementById('page2-2').classList.add('hide')
    document.getElementById('page2-3').classList.add('hide')
    // open shop upgrades
    document.getElementById('page2-2').classList.remove('hide')
}

function openShopFurnaces() {
    // highlight button
    document.getElementById('shopBtn4').classList.add('activeBtn')
    document.getElementById('shopBtn1').classList.remove('activeBtn')
    document.getElementById('shopBtn2').classList.remove('activeBtn')

    // hide current page
    document.getElementById('page2-1').classList.add('hide')
    document.getElementById('page2-2').classList.add('hide')
    document.getElementById('page2-3').classList.add('hide')
    // open shop upgrades
    document.getElementById('page2-3').classList.remove('hide')
}

function openInfoSect() {
    // hide current page
    document.getElementById('page1').classList.add('hide')
    // open info sect
    document.getElementById('page3').classList.remove('hide')
    // update variables
    page = 3
}

function hideAllPages() {
    // hide all pages
    document.getElementById('page2-1').classList.add('hide')
    document.getElementById('page2-2').classList.add('hide')
    document.getElementById('page2-3').classList.add('hide')
    document.getElementById('page1').classList.add('hide')
    document.getElementById('page2').classList.add('hide')
    document.getElementById('page4').classList.add('hide')
}