scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile127`, function (sprite, location) {
    scene.setBackgroundColor(9)
    music.stopAllSounds()
    game.splash("The End")
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile126`, function (sprite, location) {
    scene.setBackgroundColor(12)
    music.stopAllSounds()
    game.splash("Level 10")
    music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a00000400000000000000000000000000000000026e0000000400020d1904000800020f1d08000c00020c200c00100002112210001400020d191400180002111d18001c00020d1d1c002000020f2220002400010c24002800020f2428002c00020f202c003000020d1e30003400011b34003800020f1938003c00020f1b3c004000020f1d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80061000000010001150400050001060800090001150c000d0001061000110001151400150001061800190001151c001d0001062000210001152400250001062800290001152c002d000106300031000115340035000106380039000216043c003d000104`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level16`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile79`, function (sprite, location) {
    info.setLife(0)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile11`) && myCorg.isHittingTile(CollisionDirection.Top)) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile13`)
        music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile23`) && myCorg.isHittingTile(CollisionDirection.Top)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        music.play(music.createSoundEffect(WaveShape.Square, 188, 1, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 188, 1, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 188, 1, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setWallAt(location, false)
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile26`) && myCorg.isHittingTile(CollisionDirection.Bottom)) {
        myCorg.setBounceOnWall(true)
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . 2 2 2 2 2 . . . 4 4 . 
            . . . . 2 2 2 2 2 2 2 2 4 f 4 . 
            . . . . e e 4 4 f 4 4 . 4 4 4 . 
            . . . e 4 e e 4 4 4 4 4 4 2 2 . 
            . . e e 4 4 4 4 4 f 4 4 4 2 2 . 
            . . e e 4 4 4 4 f f f f 2 2 2 . 
            . . . 2 2 4 4 4 4 4 4 2 2 2 . . 
            . . 2 2 2 8 8 2 2 8 2 2 2 . . . 
            . 2 2 2 8 8 8 2 2 8 2 . . . . . 
            . 2 4 8 8 8 5 8 8 5 . . . . . . 
            . 4 4 4 8 8 8 8 8 8 8 . . . e . 
            . 4 4 8 8 8 8 8 8 8 8 8 . e e . 
            e e 8 8 8 . . . . 8 8 8 8 e e . 
            e e 8 8 . . . . . . . 8 8 e e . 
            e e . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        myCorg.setBounceOnWall(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    scene.setBackgroundColor(12)
    music.stopAllSounds()
    game.splash("Level 2")
    music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a00000400000000000000000000000000000000025c000000040002061904000800010a08000c00020d1e0c0010000205191000140002081914001800020a1e18001c0001051c002000010820002400020c1924002800010f2c00300002141930003400010534003800010838003c00020c19`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level5`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile86`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 101, 847, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . . 2 2 2 2 2 . . . 4 4 . 
        . . . . 2 2 2 2 2 2 2 2 4 f 4 . 
        . . . . e e 4 4 f 4 4 . 4 4 4 . 
        . . . e 4 e e 4 4 4 4 4 4 2 2 . 
        . . e e 4 4 4 4 4 f 4 4 4 2 2 . 
        . . e e 4 4 4 4 f f f f 2 2 2 . 
        . . . 2 2 4 4 4 4 4 4 2 2 2 . . 
        . . 2 2 2 8 8 2 2 8 2 2 2 . . . 
        . 2 2 2 8 8 8 2 2 8 2 . . . . . 
        . 2 4 8 8 8 5 8 8 5 . . . . . . 
        . 4 4 4 8 8 8 8 8 8 8 . . . e . 
        . 4 4 8 8 8 8 8 8 8 8 8 . e e . 
        e e 8 8 8 . . . . 8 8 8 8 e e . 
        e e 8 8 . . . . . . . 8 8 e e . 
        e e . . . . . . . . . . . . . . 
        e . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . 4 4 . . . 2 2 2 2 2 . . . . . 
            . 4 f 4 2 2 2 2 2 2 2 2 . . . . 
            . 4 4 4 . 4 4 f 4 4 e e . . . . 
            . 2 2 4 4 4 4 4 4 e e 4 e . . . 
            . 2 2 4 4 4 f 4 4 4 4 4 e e . . 
            . 2 2 2 f f f f 4 4 4 4 e e . . 
            . . 2 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . 2 2 2 8 2 2 8 8 2 2 2 . . 
            . . . . . 2 8 2 2 8 8 8 2 2 2 . 
            . . . . . . 5 8 8 5 8 8 8 4 2 . 
            . e . . . 8 8 8 8 8 8 8 4 4 4 . 
            . e e . 8 8 8 8 8 8 8 8 8 4 4 . 
            . e e 8 8 8 8 . . . . 8 8 8 e e 
            . e e 8 8 . . . . . . . 8 8 e e 
            . . . . . . . . . . . . . . e e 
            . . . . . . . . . . . . . . . e 
            `],
        100,
        true
        )
    }
    for (let index = 0; index < 80; index++) {
        myCorg.y += -1
        pause(1)
    }
    pauseUntil(() => myCorg.isHittingTile(CollisionDirection.Bottom))
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . e e 4 4 f 4 4 . . . . . . 
        . . e 4 e e 4 4 4 4 4 4 . . . . 
        . e e 4 4 4 4 4 f 4 4 4 . . . . 
        . e e 4 4 4 4 f f f f . . . . . 
        . . . 2 4 4 4 4 4 4 . . . . . . 
        . . . 2 8 2 2 2 8 . . . . . . . 
        . . 2 2 8 2 2 2 8 2 . . . . . . 
        . 2 2 2 8 2 2 2 8 2 2 . . . . . 
        . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
        . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
        . . 4 4 8 8 8 8 8 4 4 . . . . . 
        . . 8 8 8 8 . 8 8 8 8 . . . . . 
        . . e e e . . . e e e . . . . . 
        . e e e e . . . e e e e . . . . 
        `],
    500,
    true
    )
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . e e 8 8 8 8 8 8 8 8 . . . . . 
            . e e 8 8 8 . 8 8 8 8 . . . . . 
            . e e . . . . . . e e e . . . . 
            . e . . . . . . . e e e e . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . 4 4 4 . . 
            . . . 2 8 2 2 2 8 2 2 4 4 4 . . 
            . . 2 2 8 2 2 2 8 2 2 2 . . . . 
            . 2 2 2 8 2 2 2 8 2 . . . . . . 
            4 4 4 2 5 8 8 8 5 . . . . e . . 
            4 4 . 8 8 8 8 8 8 8 . e e e . . 
            . e e 8 8 8 8 8 8 8 8 e e e . . 
            . e e 8 8 8 . 8 8 8 8 e e e . . 
            . e e . . . . . . . . . . . . . 
            . . e e . . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 4 4 8 5 . . . . . . . 
            . . . 8 2 4 4 8 8 8 . . . . . . 
            . . . 8 8 4 8 8 8 8 . . . . . . 
            . . e 8 8 8 . 8 e e . . . . . . 
            . . e e e . . . e e . . . . . . 
            . . . e e e . . . e e . . . . . 
            `],
        100,
        true
        )
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . . 4 2 2 2 2 2 8 . . 
            . . . . . . 8 8 8 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 8 e e . 
            . . . . . 8 8 8 8 . 8 8 8 e e . 
            . . . . e e e . . . . . . e e . 
            . . . e e e e . . . . . . . e . 
            `,img`
            . . . . . . . 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . . 4 4 f 4 4 e e . . . 
            . . . . 4 4 4 4 4 4 e e 4 e . . 
            . . . . 4 4 4 f 4 4 4 4 4 e e . 
            . . . . . f f f f 4 4 4 4 e e . 
            . . 4 4 4 . 4 4 4 4 4 4 2 . . . 
            . . 4 4 4 2 2 8 2 2 2 8 2 . . . 
            . . . . 2 2 2 8 2 2 2 8 2 2 . . 
            . . . . . . 2 8 2 2 2 8 2 2 2 . 
            . . e . . . . 5 8 8 8 5 2 4 4 4 
            . . e e e . 8 8 8 8 8 8 8 . 4 4 
            . . e e e 8 8 8 8 8 8 8 8 e e . 
            . . e e e 8 8 8 8 . 8 8 8 e e . 
            . . . . . . . . . . . . . e e . 
            . . . . . . . . . . . . e e . . 
            `,img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 5 8 4 4 2 2 8 . . 
            . . . . . . 8 8 8 4 4 2 8 . . . 
            . . . . . . 8 8 8 8 4 8 8 . . . 
            . . . . . . e e 8 . 8 8 8 e . . 
            . . . . . . e e . . . e e e . . 
            . . . . . e e . . . e e e . . . 
            `],
        100,
        true
        )
    }
    if (controller.right.isPressed() && controller.A.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . e e 8 8 8 8 8 8 8 8 . . . . . 
            . e e 8 8 8 . 8 8 8 8 . . . . . 
            . e e . . . . . . e e e . . . . 
            . e . . . . . . . e e e e . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . 4 4 4 . . 
            . . . 2 8 2 2 2 8 2 2 4 4 4 . . 
            . . 2 2 8 2 2 2 8 2 2 2 . . . . 
            . 2 2 2 8 2 2 2 8 2 . . . . . . 
            4 4 4 2 5 8 8 8 5 . . . . e . . 
            4 4 . 8 8 8 8 8 8 8 . e e e . . 
            . e e 8 8 8 8 8 8 8 8 e e e . . 
            . e e 8 8 8 . 8 8 8 8 e e e . . 
            . e e . . . . . . . . . . . . . 
            . . e e . . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 4 4 8 5 . . . . . . . 
            . . . 8 2 4 4 8 8 8 . . . . . . 
            . . . 8 8 4 8 8 8 8 . . . . . . 
            . . e 8 8 8 . 8 e e . . . . . . 
            . . e e e . . . e e . . . . . . 
            . . . e e e . . . e e . . . . . 
            `],
        70,
        true
        )
    }
    if (controller.left.isPressed() && controller.A.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . . 4 2 2 2 2 2 8 . . 
            . . . . . . 8 8 8 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 8 e e . 
            . . . . . 8 8 8 8 . 8 8 8 e e . 
            . . . . e e e . . . . . . e e . 
            . . . e e e e . . . . . . . e . 
            `,img`
            . . . . . . . 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . . 4 4 f 4 4 e e . . . 
            . . . . 4 4 4 4 4 4 e e 4 e . . 
            . . . . 4 4 4 f 4 4 4 4 4 e e . 
            . . . . . f f f f 4 4 4 4 e e . 
            . . 4 4 4 . 4 4 4 4 4 4 2 . . . 
            . . 4 4 4 2 2 8 2 2 2 8 2 . . . 
            . . . . 2 2 2 8 2 2 2 8 2 2 . . 
            . . . . . . 2 8 2 2 2 8 2 2 2 . 
            . . e . . . . 5 8 8 8 5 2 4 4 4 
            . . e e e . 8 8 8 8 8 8 8 . 4 4 
            . . e e e 8 8 8 8 8 8 8 8 e e . 
            . . e e e 8 8 8 8 . 8 8 8 e e . 
            . . . . . . . . . . . . . e e . 
            . . . . . . . . . . . . e e . . 
            `,img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 5 8 4 4 2 2 8 . . 
            . . . . . . 8 8 8 4 4 2 8 . . . 
            . . . . . . 8 8 8 8 4 8 8 . . . 
            . . . . . . e e 8 . 8 8 8 e . . 
            . . . . . . e e . . . e e e . . 
            . . . . . e e . . . e e e . . . 
            `],
        70,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile71`, function (sprite, location) {
    scene.setBackgroundColor(12)
    music.stopAllSounds()
    game.splash("Level 4")
    music.play(music.createSong(hex`0078000408040105001c000f0a006400f4010a0000040000000000000000000000000000000002d0000000040002051b04000800011108000c0002051b0c00100001111000140002051b14001800011118001c0002051b1c00200001112000240002051b24002800011128002c0002051b2c00300001113000340002051b34003800011138003c0002051b3c00400001114000440002061d44004800011248004c0002061d4c00500001125000540002061d54005800011258005c0002061d5c00600001126000640002061d64006800011268006c0002061d6c00700001127000740002061d74007800011278007c0002061d7c0080000112`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level7`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 4 . . . . . . 
            . . 8 2 2 2 2 2 4 . . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . e e 8 8 8 8 8 8 8 8 . . . . . 
            . e e 8 8 8 . 8 8 8 8 . . . . . 
            . e e . . . . . . e e e . . . . 
            . e . . . . . . . e e e e . . . 
            `,img`
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . 4 4 4 . . 
            . . . 2 8 2 2 2 8 2 2 4 4 4 . . 
            . . 2 2 8 2 2 2 8 2 2 2 . . . . 
            . 2 2 2 8 2 2 2 8 2 . . . . . . 
            4 4 4 2 5 8 8 8 5 . . . . e . . 
            4 4 . 8 8 8 8 8 8 8 . e e e . . 
            . e e 8 8 8 8 8 8 8 8 e e e . . 
            . e e 8 8 8 . 8 8 8 8 e e e . . 
            . e e . . . . . . . . . . . . . 
            . . e e . . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . e e 4 4 f 4 4 . . . . . 
            . . . e 4 e e 4 4 4 4 4 4 . . . 
            . . e e 4 4 4 4 4 f 4 4 4 . . . 
            . . e e 4 4 4 4 f f f f . . . . 
            . . . . 2 4 4 4 4 4 4 . . . . . 
            . . . 8 8 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 2 2 2 8 . . . . . . . 
            . . 8 2 2 4 4 8 5 . . . . . . . 
            . . . 8 2 4 4 8 8 8 . . . . . . 
            . . . 8 8 4 8 8 8 8 . . . . . . 
            . . e 8 8 8 . 8 e e . . . . . . 
            . . e e e . . . e e . . . . . . 
            . . . e e e . . . e e . . . . . 
            `],
        70,
        true
        )
        controller.moveSprite(myCorg, 120, 0)
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . 4 4 2 2 2 2 2 8 . . 
            . . . . . . . 4 2 2 2 2 2 8 . . 
            . . . . . . 8 8 8 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 8 e e . 
            . . . . . 8 8 8 8 . 8 8 8 e e . 
            . . . . e e e . . . . . . e e . 
            . . . e e e e . . . . . . . e . 
            `,img`
            . . . . . . . 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . . . . 4 4 f 4 4 e e . . . 
            . . . . 4 4 4 4 4 4 e e 4 e . . 
            . . . . 4 4 4 f 4 4 4 4 4 e e . 
            . . . . . f f f f 4 4 4 4 e e . 
            . . 4 4 4 . 4 4 4 4 4 4 2 . . . 
            . . 4 4 4 2 2 8 2 2 2 8 2 . . . 
            . . . . 2 2 2 8 2 2 2 8 2 2 . . 
            . . . . . . 2 8 2 2 2 8 2 2 2 . 
            . . e . . . . 5 8 8 8 5 2 4 4 4 
            . . e e e . 8 8 8 8 8 8 8 . 4 4 
            . . e e e 8 8 8 8 8 8 8 8 e e . 
            . . e e e 8 8 8 8 . 8 8 8 e e . 
            . . . . . . . . . . . . . e e . 
            . . . . . . . . . . . . e e . . 
            `,img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 4 f 4 4 e e . . . . 
            . . . 4 4 4 4 4 4 e e 4 e . . . 
            . . . 4 4 4 f 4 4 4 4 4 e e . . 
            . . . . f f f f 4 4 4 4 e e . . 
            . . . . . 4 4 4 4 4 4 2 . . . . 
            . . . . . . . 8 2 2 2 8 8 . . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 8 2 2 2 2 2 8 . . 
            . . . . . . . 5 8 4 4 2 2 8 . . 
            . . . . . . 8 8 8 4 4 2 8 . . . 
            . . . . . . 8 8 8 8 4 8 8 . . . 
            . . . . . . e e 8 . 8 8 8 e . . 
            . . . . . . e e . . . e e e . . 
            . . . . . e e . . . e e e . . . 
            `],
        70,
        true
        )
        controller.moveSprite(myCorg, 120, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile123`, function (sprite, location) {
    scene.setBackgroundColor(12)
    music.stopAllSounds()
    game.splash("Level 9")
    music.play(music.createSong(hex`0078000408030302001c000c960064006d019001000478002c010000640032000000000a060005830004000800011408000c00011e0c001000011210001400011e14001800011118001c00011e20002400010f24002800020c1e28002c00010a2c003000011e34003800020c1e38003c0002081e3c004000010540004400011e44004800010548004c00011e4c00500001055000540002081e54005800010d58005c0002141e5c006000011804001c00100500640000041e000004000000000000000000000000000a040004480000000400010a08000c00010a10001400010a18001c00010a20002400010a28002c00010a30003400010a38003c00010a40004400010c48004c00010c50005400010c58005c00010c05001c000f0a006400f4010a00000400000000000000000000000000000000025a000000040001050400080001060c001000010a10001400010d18001c0001061c002000010524002800010528002c00010530003400010834003800010c3c004000010544004800010a4c005000010d50005400010858005c000105`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level15`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
    tileUtil.createSpritesOnTiles(assets.tile`myTile124`, img`
        b . . . . . . b 
        . b . . . . b . 
        . . b . . b . . 
        . . . b b . . . 
        . . . b b . . . 
        . . b . . b . . 
        . b . . . . b . 
        b . . . . . . b 
        `, SpriteKind.Projectile)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . 2 2 2 2 2 . . . . . . . . 
            . 2 2 2 2 2 2 2 2 . . . . . . . 
            . . 4 4 f 4 4 e e . . . . . . . 
            4 4 4 4 4 4 e e 4 e . . . . . . 
            4 4 4 f 4 4 4 4 4 e e . . . . . 
            . f f f f 4 4 4 4 e e . . . . . 
            . . 4 4 4 4 4 4 2 . . . . . . . 
            . . . 8 2 2 2 8 2 . . . . . . . 
            . . 2 8 2 2 2 8 2 2 . . . . . . 
            . 2 2 8 2 2 2 8 2 2 2 . . . . . 
            2 2 2 5 8 8 8 5 2 2 2 . . . . . 
            4 4 4 8 8 8 8 8 4 4 4 . . . . . 
            . 4 4 8 8 8 8 8 4 4 . . . . . . 
            . 8 8 8 8 . 8 8 8 8 . . . . . . 
            . e e e . . . e e e . . . . . . 
            e e e e . . . e e e e . . . . . 
            `,img`
            . . 2 2 2 2 2 . . . . . . . . . 
            2 2 2 2 2 2 2 2 . . . . . . . . 
            . 4 4 f 4 4 e e . . . . . . . . 
            4 4 4 4 4 e e 4 e . . . . . . . 
            4 4 f 4 4 4 4 4 e e . . . . . . 
            f f f f 4 4 4 4 e e . . . . . . 
            . 4 4 4 4 4 4 2 . . . . . . . . 
            . . 8 2 2 2 8 2 . . . . . . . . 
            . 2 8 2 2 2 8 2 2 . . . . . . . 
            2 2 8 2 2 2 8 2 2 2 . . . . . . 
            2 2 5 8 8 8 5 2 2 2 . . . . . . 
            4 4 8 8 8 8 8 4 4 4 . . . . . . 
            4 4 8 8 8 8 8 4 4 . . . . . . . 
            8 8 8 8 . 8 8 8 8 . . . . . . . 
            e e e . . . e e e . . . . . . . 
            e e e . . . e e e e . . . . . . 
            `,img`
            . 2 2 2 2 2 . . . . . . . . . . 
            2 2 2 2 2 2 2 . . . . . . . . . 
            4 4 f 4 4 e e . . . . . . . . . 
            4 4 4 4 e e 4 e . . . . . . . . 
            4 f 4 4 4 4 4 e e . . . . . . . 
            f f f 4 4 4 4 e e . . . . . . . 
            4 4 4 4 4 4 2 . . . . . . . . . 
            . 8 2 2 2 8 2 . . . . . . . . . 
            2 8 2 2 2 8 2 2 . . . . . . . . 
            2 8 2 2 2 8 2 2 2 . . . . . . . 
            2 5 8 8 8 5 2 2 2 . . . . . . . 
            4 8 8 8 8 8 4 4 4 . . . . . . . 
            4 8 8 8 8 8 4 4 . . . . . . . . 
            8 8 8 . 8 8 8 8 . . . . . . . . 
            e e . . . e e e . . . . . . . . 
            e e . . . e e e e . . . . . . . 
            `,img`
            2 2 2 2 2 . . . . . . . . . . . 
            2 2 2 2 2 2 . . . . . . . . . . 
            4 f 4 4 e e . . . . . . . . . . 
            4 4 4 e e 4 e . . . . . . . . . 
            f 4 4 4 4 4 e e . . . . . . . . 
            f f 4 4 4 4 e e . . . . . . . . 
            4 4 4 4 4 2 . . . . . . . . . . 
            8 2 2 2 8 2 . . . . . . . . . . 
            8 2 2 2 8 2 2 . . . . . . . . . 
            8 2 2 2 8 2 2 2 . . . . . . . . 
            5 8 8 8 5 2 2 2 . . . . . . . . 
            8 8 8 8 8 4 4 4 . . . . . . . . 
            8 8 8 8 8 4 4 . . . . . . . . . 
            8 8 . 8 8 8 8 . . . . . . . . . 
            e . . . e e e . . . . . . . . . 
            e . . . e e e e . . . . . . . . 
            `,img`
            2 2 2 2 . . . . . . . . . . . . 
            2 2 2 2 2 . . . . . . . . . . . 
            f 4 4 e e . . . . . . . . . . . 
            4 4 e e 4 e . . . . . . . . . . 
            4 4 4 4 4 e e . . . . . . . . . 
            f 4 4 4 4 e e . . . . . . . . . 
            4 4 4 4 2 . . . . . . . . . . . 
            2 2 2 8 2 . . . . . . . . . . . 
            2 2 2 8 2 2 . . . . . . . . . . 
            2 2 2 8 2 2 2 . . . . . . . . . 
            8 8 8 5 2 2 2 . . . . . . . . . 
            8 8 8 8 4 4 4 . . . . . . . . . 
            8 8 8 8 4 4 . . . . . . . . . . 
            8 . 8 8 8 8 . . . . . . . . . . 
            . . . e e e . . . . . . . . . . 
            . . . e e e e . . . . . . . . . 
            `,img`
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 2 . . . . . . . . . . . . 
            4 4 e e . . . . . . . . . . . . 
            4 e e 4 e . . . . . . . . . . . 
            4 4 4 4 e e . . . . . . . . . . 
            4 4 4 4 e e . . . . . . . . . . 
            4 4 4 2 . . . . . . . . . . . . 
            2 2 8 2 . . . . . . . . . . . . 
            2 2 8 2 2 . . . . . . . . . . . 
            2 2 8 2 2 2 . . . . . . . . . . 
            8 8 5 2 2 2 . . . . . . . . . . 
            8 8 8 4 4 4 . . . . . . . . . . 
            8 8 8 4 4 . . . . . . . . . . . 
            . 8 8 8 8 . . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            . . e e e e . . . . . . . . . . 
            `,img`
            2 2 . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            4 e e . . . . . . . . . . . . . 
            e e 4 e . . . . . . . . . . . . 
            4 4 4 e e . . . . . . . . . . . 
            4 4 4 e e . . . . . . . . . . . 
            4 4 2 . . . . . . . . . . . . . 
            2 8 2 . . . . . . . . . . . . . 
            2 8 2 2 . . . . . . . . . . . . 
            2 8 2 2 2 . . . . . . . . . . . 
            8 5 2 2 2 . . . . . . . . . . . 
            8 8 4 4 4 . . . . . . . . . . . 
            8 8 4 4 . . . . . . . . . . . . 
            8 8 8 8 . . . . . . . . . . . . 
            . e e e . . . . . . . . . . . . 
            . e e e e . . . . . . . . . . . 
            `,img`
            2 . . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            e 4 e . . . . . . . . . . . . . 
            4 4 e e . . . . . . . . . . . . 
            4 4 e e . . . . . . . . . . . . 
            4 2 . . . . . . . . . . . . . . 
            8 2 . . . . . . . . . . . . . . 
            8 2 2 . . . . . . . . . . . . . 
            8 2 2 2 . . . . . . . . . . . . 
            5 2 2 2 . . . . . . . . . . . . 
            8 4 4 4 . . . . . . . . . . . . 
            8 4 4 . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            e e e . . . . . . . . . . . . . 
            e e e e . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            4 e . . . . . . . . . . . . . . 
            4 e e . . . . . . . . . . . . . 
            4 e e . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            4 4 4 . . . . . . . . . . . . . 
            4 4 . . . . . . . . . . . . . . 
            8 8 . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            e e e . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . . 
            2 2 . . . . . . . . . . . . . . 
            4 4 . . . . . . . . . . . . . . 
            4 . . . . . . . . . . . . . . . 
            8 . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            e e . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . . 
            4 . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            e . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        music.stopAllSounds()
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        controller.moveSprite(myCorg, 0, 0)
        timer.after(2000, function () {
            for (let index = 0; index < 100; index++) {
                music.stopAllSounds()
            }
            music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400020d240400080002112408000c0001140c001000012410001400010d14001800011118001c000214241c002000012420002400010d2400280002112428002c00011430003400020d243400380002112438003c0001143c0040000124`), music.PlaybackMode.LoopingInBackground)
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
            animation.runImageAnimation(
            myCorg,
            [img`
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . 2 2 2 2 2 2 2 2 . . . . . 
                . . . e e 4 4 f 4 4 . . . . . . 
                . . e 4 e e 4 4 4 4 4 4 . . . . 
                . e e 4 4 4 4 4 f 4 4 4 . . . . 
                . e e 4 4 4 4 f f f f . . . . . 
                . . . 2 4 4 4 4 4 4 . . . . . . 
                . . . 2 8 2 2 2 8 . . . . . . . 
                . . 2 2 8 2 2 2 8 2 . . . . . . 
                . 2 2 2 8 2 2 2 8 2 2 . . . . . 
                . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
                . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
                . . 4 4 8 8 8 8 8 4 4 . . . . . 
                . . 8 8 8 8 . 8 8 8 8 . . . . . 
                . . e e e . . . e e e . . . . . 
                . e e e e . . . e e e e . . . . 
                `],
            500,
            true
            )
            controller.moveSprite(myCorg, 50, 0)
            tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
            scene.setBackgroundColor(9)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 4 4 f 4 4 e e . . . . 
        . . . 4 4 4 4 4 4 e e 4 e . . . 
        . . . 4 4 4 f 4 4 4 4 4 e e . . 
        . . . . f f f f 4 4 4 4 e e . . 
        . . . . . 4 4 4 4 4 4 2 . . . . 
        . . . . . . . 8 2 2 2 8 8 . . . 
        . . . . . . 4 4 2 2 2 2 2 8 . . 
        . . . . . . 4 4 2 2 2 2 2 8 . . 
        . . . . . . . 4 2 2 2 2 2 8 . . 
        . . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . . 8 8 8 8 8 8 8 8 e e . 
        . . . . . 8 8 8 8 . 8 8 8 e e . 
        . . . . e e e . . . . . . e e . 
        . . . e e e e . . . . . . . e . 
        `,img`
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . 4 4 f 4 4 e e . . . 
        . . . . 4 4 4 4 4 4 e e 4 e . . 
        . . . . 4 4 4 f 4 4 4 4 4 e e . 
        . . . . . f f f f 4 4 4 4 e e . 
        . . 4 4 4 . 4 4 4 4 4 4 2 . . . 
        . . 4 4 4 2 2 8 2 2 2 8 2 . . . 
        . . . . 2 2 2 8 2 2 2 8 2 2 . . 
        . . . . . . 2 8 2 2 2 8 2 2 2 . 
        . . e . . . . 5 8 8 8 5 2 4 4 4 
        . . e e e . 8 8 8 8 8 8 8 . 4 4 
        . . e e e 8 8 8 8 8 8 8 8 e e . 
        . . e e e 8 8 8 8 . 8 8 8 e e . 
        . . . . . . . . . . . . . e e . 
        . . . . . . . . . . . . e e . . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . 4 4 f 4 4 e e . . . . 
        . . . 4 4 4 4 4 4 e e 4 e . . . 
        . . . 4 4 4 f 4 4 4 4 4 e e . . 
        . . . . f f f f 4 4 4 4 e e . . 
        . . . . . 4 4 4 4 4 4 2 . . . . 
        . . . . . . . 8 2 2 2 8 8 . . . 
        . . . . . . . 8 2 2 2 2 2 8 . . 
        . . . . . . . 8 2 2 2 2 2 8 . . 
        . . . . . . . 5 8 4 4 2 2 8 . . 
        . . . . . . 8 8 8 4 4 2 8 . . . 
        . . . . . . 8 8 8 8 4 8 8 . . . 
        . . . . . . e e 8 . 8 8 8 e . . 
        . . . . . . e e . . . e e e . . 
        . . . . . e e . . . e e e . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, undefined) {
	
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . e e 4 4 f 4 4 . . . . . . 
        . . e 4 e e 4 4 4 4 4 4 . . . . 
        . e e 4 4 4 4 4 f 4 4 4 . . . . 
        . e e 4 4 4 4 f f f f . . . . . 
        . . . 2 4 4 4 4 4 4 . . . . . . 
        . . . 2 8 2 2 2 8 . . . . . . . 
        . . 2 2 8 2 2 2 8 2 . . . . . . 
        . 2 2 2 8 2 2 2 8 2 2 . . . . . 
        . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
        . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
        . . 4 4 8 8 8 8 8 4 4 . . . . . 
        . . 8 8 8 8 . 8 8 8 8 . . . . . 
        . . e e e . . . e e e . . . . . 
        . e e e e . . . e e e e . . . . 
        `],
    500,
    true
    )
    controller.moveSprite(myCorg, 50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . 4 4 f 4 4 e e . . . 
        . . . . 4 4 4 4 4 4 e e 4 e . . 
        . . . . 4 4 4 f 4 4 4 4 4 e e . 
        . . . . . f f f f 4 4 4 4 e e . 
        . . . . . . 4 4 4 4 4 4 2 . . . 
        . . . . . . . 8 2 2 2 8 2 . . . 
        . . . . . . 2 8 2 2 2 8 2 2 . . 
        . . . . . 2 2 8 2 2 2 8 2 2 2 . 
        . . . . 2 2 2 5 8 8 8 5 2 2 2 . 
        . . . . 4 4 4 8 8 8 8 8 4 4 4 . 
        . . . . . 4 4 8 8 8 8 8 4 4 . . 
        . . . . . 8 8 8 8 . 8 8 8 8 . . 
        . . . . . e e e . . . e e e . . 
        . . . . e e e e . . . e e e e . 
        `],
    500,
    true
    )
    controller.moveSprite(myCorg, 50, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile117`, function (sprite, location) {
    scene.setBackgroundColor(9)
    music.stopAllSounds()
    game.splash("Level 7")
    music.play(music.createSong(hex`0078000408030105001c000f0a006400f4010a00000400000000000000000000000000000000026900000004000216290400080002162908000c000216290c0010000212251000140002142918001c0002182c2000240002142528002c000212203000340002162438003c000218254000440002162048004c0002141d5000540002161e540058000218225c006000021827`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level13`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile85`, function (sprite, location) {
    scene.setBackgroundColor(9)
    music.stopAllSounds()
    game.splash("Level 6")
    music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a00000400000000000000000000000000000000024b000000040002051e08000c00011e1000140002051e18001c00011e2000240002051e24002800010c28002c00011e2c003000011130003400011e34003800010638003c00011e3c004000010d`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level10`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    info.setLife(0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        myCorg,
        [img`
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
            . . 4 4 8 8 8 8 8 4 4 . . . . . 
            . . 8 8 8 8 . 8 8 8 8 . . . . . 
            . . e e e . . . e e e . . . . . 
            . e e e e . . . e e e e . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
            . . 4 4 8 8 8 8 8 4 4 . . . . . 
            . . 8 8 8 8 . 8 8 8 8 . . . . . 
            . . e e e . . . e e e . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
            . . 4 4 8 8 8 8 8 4 4 . . . . . 
            . . 8 8 8 8 . 8 8 8 8 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
            . . 4 4 8 8 8 8 8 4 4 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            . 2 2 2 8 2 2 2 8 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            . . 2 2 8 2 2 2 8 2 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            . . . 2 8 2 2 2 8 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            . . . 2 4 4 4 4 4 4 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            . e e 4 4 4 4 f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            . e e 4 4 4 4 4 f 4 4 4 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            . . e 4 e e 4 4 4 4 4 4 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . e e 4 4 f 4 4 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        music.stopAllSounds()
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("A G F A G F - - ", 920), music.PlaybackMode.InBackground)
        controller.moveSprite(myCorg, 0, 0)
        timer.after(2000, function () {
            for (let index = 0; index < 100; index++) {
                music.stopAllSounds()
            }
            music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a00000400000000000000000000000000000000025c000000040002061904000800010a08000c00020d1e0c0010000205191000140002081914001800020a1e18001c0001051c002000010820002400020c1924002800010f2c00300002141930003400010534003800010838003c00020c19`), music.PlaybackMode.LoopingInBackground)
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level4`))
            animation.runImageAnimation(
            myCorg,
            [img`
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . 2 2 2 2 2 2 2 2 . . . . . 
                . . . e e 4 4 f 4 4 . . . . . . 
                . . e 4 e e 4 4 4 4 4 4 . . . . 
                . e e 4 4 4 4 4 f 4 4 4 . . . . 
                . e e 4 4 4 4 f f f f . . . . . 
                . . . 2 4 4 4 4 4 4 . . . . . . 
                . . . 2 8 2 2 2 8 . . . . . . . 
                . . 2 2 8 2 2 2 8 2 . . . . . . 
                . 2 2 2 8 2 2 2 8 2 2 . . . . . 
                . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
                . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
                . . 4 4 8 8 8 8 8 4 4 . . . . . 
                . . 8 8 8 8 . 8 8 8 8 . . . . . 
                . . e e e . . . e e e . . . . . 
                . e e e e . . . e e e e . . . . 
                `],
            500,
            true
            )
            controller.moveSprite(myCorg, 50, 0)
            tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
            scene.setBackgroundColor(12)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    scene.setBackgroundColor(12)
    music.stopAllSounds()
    game.splash("Level 5")
    music.play(music.createSong(hex`0078000408030302001c000c960064006d019001000478002c010000640032000000000a060005540000000400011604000800011408000c00011220002400011624002800011428002c00011234003800011138003c00010f3c004000010d48004c00010d4c005000010c50005400010a58005c0001065c006000010504001c00100500640000041e000004000000000000000000000000000a040004900000000400010804000800010508000c0001080c001000010510001400010814001800010518001c0001081c002000010520002400010824002800010528002c0001082c003000010530003400010834003800010538003c0001083c004000010540004400010844004800010548004c0001084c005000010550005400010854005800010558005c0001065c006000010505001c000f0a006400f4010a00000400000000000000000000000000000000021c000400080002111e08000c00020d1d10001400020f1d18001c00020f1e`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level9`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e 4 4 f 4 4 . . . . . 
        . . . e 4 e e 4 4 4 4 4 4 . . . 
        . . e e 4 4 4 4 4 f 4 4 4 . . . 
        . . e e 4 4 4 4 f f f f . . . . 
        . . . . 2 4 4 4 4 4 4 . . . . . 
        . . . 8 8 2 2 2 8 . . . . . . . 
        . . 8 2 2 2 2 2 4 4 . . . . . . 
        . . 8 2 2 2 2 2 4 4 . . . . . . 
        . . 8 2 2 2 2 2 4 . . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . e e 8 8 8 8 8 8 8 8 . . . . . 
        . e e 8 8 8 . 8 8 8 8 . . . . . 
        . e e . . . . . . e e e . . . . 
        . e . . . . . . . e e e e . . . 
        `,img`
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . e e 4 4 f 4 4 . . . . . . 
        . . e 4 e e 4 4 4 4 4 4 . . . . 
        . e e 4 4 4 4 4 f 4 4 4 . . . . 
        . e e 4 4 4 4 f f f f . . . . . 
        . . . 2 4 4 4 4 4 4 . 4 4 4 . . 
        . . . 2 8 2 2 2 8 2 2 4 4 4 . . 
        . . 2 2 8 2 2 2 8 2 2 2 . . . . 
        . 2 2 2 8 2 2 2 8 2 . . . . . . 
        4 4 4 2 5 8 8 8 5 . . . . e . . 
        4 4 . 8 8 8 8 8 8 8 . e e e . . 
        . e e 8 8 8 8 8 8 8 8 e e e . . 
        . e e 8 8 8 . 8 8 8 8 e e e . . 
        . e e . . . . . . . . . . . . . 
        . . e e . . . . . . . . . . . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e 4 4 f 4 4 . . . . . 
        . . . e 4 e e 4 4 4 4 4 4 . . . 
        . . e e 4 4 4 4 4 f 4 4 4 . . . 
        . . e e 4 4 4 4 f f f f . . . . 
        . . . . 2 4 4 4 4 4 4 . . . . . 
        . . . 8 8 2 2 2 8 . . . . . . . 
        . . 8 2 2 2 2 2 8 . . . . . . . 
        . . 8 2 2 2 2 2 8 . . . . . . . 
        . . 8 2 2 4 4 8 5 . . . . . . . 
        . . . 8 2 4 4 8 8 8 . . . . . . 
        . . . 8 8 4 8 8 8 8 . . . . . . 
        . . e 8 8 8 . 8 e e . . . . . . 
        . . e e e . . . e e . . . . . . 
        . . . e e e . . . e e . . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(myCorg, 50, 0)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
    info.setLife(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile118`, function (sprite, location) {
    scene.setBackgroundColor(9)
    music.stopAllSounds()
    game.splash("Level 8")
    music.play(music.createSong(hex`0078000408030105001c000f0a006400f4010a0000040000000000000000000000000000000002a1000000040002051d0400080002082008000c00020d240c00100002121d100014000216201400180002122218001c0001161c00200002121d2000240001052400280002061d28002c00010c2c003000020f1d30003400010c34003800010838003c0002051d3c00400002082440004400010c4400480002112548004c000218224c00500002141e5000540001185400580002141d58005c00020f1e5c006000020c1d`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level14`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C - C5 - - - - - ", 920), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`transparency8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    scene.setBackgroundColor(9)
    music.stopAllSounds()
    game.splash("Level 3")
    music.play(music.createSong(hex`0078000408060204001c00100500640000041e000004000000000000000000000000000a0400042a003f004000010c46004700010a4d004e00010c54005500010d5b005c00010f5f006000010867006800010605001c000f0a006400f4010a0000040000000000000000000000000000000002c70000000400010d04000800010d0c001000010f10001400011118001c00010d1c002000010d20002400010f28002c00010830003400010838003c00010c40004100012047004800011d4e004f00011e5500560001245c005d00011e61006200011b68006900011b74007800010a7c008000010c88008c0002051b8c00900001119000940002051b94009800011198009c0002051b9c00a0000111a000a40002051ba400a8000111a800ac0002051bac00b0000111b000b40002051bb400b8000111b800bc0002051b`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level6`))
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
})
let myCorg: Corgio = null
music.setVolume(99999999999)
myCorg = corgio.create(SpriteKind.Player)
sprites.destroy(myCorg)
story.showPlayerChoices("GB", "GBC")
if (story.checkLastAnswer("GB")) {
    color.setPalette(
    color.GrayScale
    )
}
scene.setBackgroundColor(9)
game.splash("Aiden's Awesome Games", "2026")
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level12`))
story.showPlayerChoices("START", "")
if (story.checkLastAnswer("START")) {
    game.splash("Level 1")
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
    myCorg = corgio.create(SpriteKind.Player)
    animation.runImageAnimation(
    myCorg,
    [img`
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . e e 4 4 f 4 4 . . . . . . 
        . . e 4 e e 4 4 4 4 4 4 . . . . 
        . e e 4 4 4 4 4 f 4 4 4 . . . . 
        . e e 4 4 4 4 f f f f . . . . . 
        . . . 2 4 4 4 4 4 4 . . . . . . 
        . . . 2 8 2 2 2 8 . . . . . . . 
        . . 2 2 8 2 2 2 8 2 . . . . . . 
        . 2 2 2 8 2 2 2 8 2 2 . . . . . 
        . 2 2 2 5 8 8 8 5 2 2 2 . . . . 
        . 4 4 4 8 8 8 8 8 4 4 4 . . . . 
        . . 4 4 8 8 8 8 8 4 4 . . . . . 
        . . 8 8 8 8 . 8 8 8 8 . . . . . 
        . . e e e . . . e e e . . . . . 
        . e e e e . . . e e e e . . . . 
        `],
    500,
    true
    )
    controller.moveSprite(myCorg, 50, 0)
    scene.cameraFollowSprite(myCorg)
    info.setLife(100)
    info.setScore(0)
    music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400020d240400080002112408000c0001140c001000012410001400010d14001800011118001c000214241c002000012420002400010d2400280002112428002c00011430003400020d243400380002112438003c0001143c0040000124`), music.PlaybackMode.LoopingInBackground)
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile18`)
    scene.setBackgroundColor(9)
}
