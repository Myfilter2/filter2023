/// pen2023.js
function() {
 'use strict';
// Закрываю банер из голосования "Королевское предложение" в ротаторе
var fs;
setTimeout(function (event){
 
                fs.get('/contest/ajax/closePacks2022ContestBanner/', {}, function () {
                    module.remove({click: this});
                });}, 1000);


const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
addCSS(".moneybox-advert{background: url('https://i.redd.it/86aej5ehyxh11.gif') no-repeat center!important;}");
addCSS(".fsrating-wow-hearts-popup .fsrating-wow-popup-header {background: url('https://raw.githubusercontent.com/fslist/fs/fs/img/heart-popup-header2.png') no-repeat 0 0!important;}");
addCSS(".iPopup-overlay.contest_pack_popup{ visibility: hidden!important; }"); //баннер "Королевское предложение"
addCSS("#iPopup.iPopup-overlay.contest-triggersPopup-popup-overlay {visibility: hidden!important;}"); //баннер в голосовании "Вы преместились"
addCSS(".iPopup-overlay.contest-triggersPopup-popup-overlay.fixed {visibility: hidden!important;}"); //баннер в голосовании "Вы преместились"
addCSS(".iPopup-overlay.contest-popup-fastToTop {visibility: hidden!important;}"); // баннер "Окажитесь среди лидеров"
addCSS(".iPopup-overlay.contest-WorthyChoice-popup-promo-overlay {visibility: hidden!important;}");//Баннер из Голосования
addCSS(".iPopup-overlay.ht_pack_popup {visibility: hidden!important;}");       // баннер "Серцеед"
addCSS(".iPopup-overlay.new-events-popup {visibility: hidden!important;}"); //ваши фото
addCSS(".iPopup-overlay.rating-gems-openmod {visibility: hidden!important;}");//шкатулки
addCSS(".iPopup-overlay.magnets-popup_common.magnets-popup_bonus {visibility: hidden!important;}"); //магнитики
addCSS(".iPopup-overlay.magnets-popup_common._pack400 {visibility: hidden!important;}");
addCSS(".iPopup-overlay.entertainment-pack {visibility: hidden!important;}"); // Ежедневный баннер в Гор. Сердцах, Тайных признаниях
addCSS(".iPopup-overlay.rating-winners-popup.font-large {visibility: hidden!important;}"); //Умножение показов
addCSS(".iPopup-overlay.iPopup {visibility: hidden!important;}"); //Умножение показов
addCSS(".iPopup-overlay.hothearts-popup._bonus {visibility: hidden!important;}"); // Сердечко в Гор. Сердцах
addCSS(".iPopup-overlay.hothearts-popup._levelUp {visibility: hidden!important;}"); // Окно с призами в Горяч. Сердцах
addCSS(".iPopup-overlay.couple-popup-no-padding.couple-popup-bumerang-1 {visibility: hidden!important;}"); // Бумеранг чувств в ЛП
addCSS(".iPopup-overlay.couple-popup-no-padding.couple-popup-bumerang-2 {visibility: hidden!important;}"); // Бумеранг чувств в ЛП
addCSS(".iPopup-overlay.bp3-newbie-popup {visibility: hidden!important;}"); // Бумеранг чувств в ЛП
//addCSS(".iPopup-overlay.bp3-dailybonus-popup {visibility: hidden!important;}"); // Ежечасный бонус в ЛП



// Забираю ключик
setInterval(function (){
	if (document.querySelector('div[class="magnets-giftpopup_keys"]'))
	{magnets.manager.keys.getForProgress({btn: this});}}, 100);

// Забираю магнити
setInterval(function (){
	if (document.querySelector('div[class="form-checkbox magnets-checkbox checked unselectable magnets-talk_about_gift"]'))
	{magnets.action.getBonusGift(this);}}, 100);

// Закрываю окошко с приглашением
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay magnets-popup_common magnets-popup_bonus"]'))
	{iPopup.close(); }}, 150);

// Отправка магнитиков
setInterval(function (){
	if (document.querySelector('div[class="magnets-popup_box_select"]'))
	{magnets.action.sendToBegginers(this);}}, 50);


// Закрываю окно "Ваши фото"
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay new-events-popup"]'))
	{iPopup.close();}}, 100); 

// Окно при открытии Шкатулок
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay rating-gems-openmod"]'))
	{iPopup.close();}}, 100); 

//баннер "Королевское предложение" в голосовании
setInterval(function (){
	if (document.querySelector('div[class="contest-promo-modal__head"]'))
	{iPopup.close();}}, 100);

// баннер "Серцеед"
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay ht_pack_popup"]'))
	{iPopup.close();}}, 100);

// баннер "Окажитесь среди лидеров"
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay contest-popup contest-popup-fastToTop"]'))
	{iPopup.close();}}, 100);

//
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay contest-WorthyChoice-popup-promo-overlay"]'))
	{iPopup.close();}}, 100);

// Умножение показов
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay font-large rating-winners-popup"]'))
	{iPopup.close();}}, 10);

// 
//setInterval(function (){
//	if (document.querySelector('div[class="iPopup-overlay"][id="iPopup"]'))
//	{iPopup.close();}}, 10);

// Скрываю баннер и забираю 10 сердечек для Горячих сердец
setInterval(function (){ 
	if (document.querySelector('div[class="iPopup-overlay entertainment-pack"]')) 
	{entertainmentPack.manager.main.getFree({source: 'auto', click: this })}}, 10);
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay entertainment-pack"]'))
	{iPopup.close();}}, 15); 

//
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay magnets-popup_common _pack400"]'))
	{magnets.manager.pack400.getFree({click: this, source: 'auto'}) }}, 100);

setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay magnets-popup_common _pack400"]'))
	{iPopup.close(); }}, 120);

//
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay hothearts-popup _bonus"]'))
	{hothearts.action.getBonus({ click: this })}}, 100);

// Ежечасный бонус в Горячих сепдцах
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay hothearts-popup _levelUp"]'))
	{iPopup.close(); }}, 10);

// Бумеранг чувств в лучшей паре
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay couple-popup-no-padding couple-popup-bumerang-1"]'))
	{iPopup.close(); }}, 10);
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay couple-popup-no-padding couple-popup-bumerang-2"]'))
	{iPopup.close(); }}, 10);


setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay bp3-newbie-popup"]'))
	{bp3.newbiePopup.send(true); }}, 10);

// Ежечасный бонус в ЛП
setInterval(function (){
	if (document.querySelector('div[class="iPopup-overlay bp3-dailybonus-popup"]'))
	{bp3.dailybonus-popup.send(true); }}, 10);










// Сюрпризы в Территории любви
//setInterval(function (){
//	if (document.querySelector('div[class="iPopup-overlay magnets-popup_common _lz_popup"]'))
//	{magnets.action.pageLoveZone.receiveSurprise({click: this, typeAndSubtype: '30_371'}); }}, 5000);
//setInterval(function (){
//	if (document.querySelector('div[class="iPopup-overlay magnets-popup_common _lz_popup"]'))
//	{iPopup.close(); }}, 5500);





/// Горячие сердца

   (function(hothearts) {
    'use strict';

    var storage     = hothearts.storage     = hothearts.storage || {};
    var popup       = hothearts.popup       = hothearts.popup || {};
    var render      = hothearts.render      = hothearts.render || {};
    var viewer      = hothearts.viewer      = hothearts.viewer || {};
    var manager     = hothearts.manager     = hothearts.manager || {};
    var action      = hothearts.action      = hothearts.action || {};
    var locks       = hothearts.locks       = hothearts.locks || {};
    var eventer     = hothearts.eventer     = hothearts.eventer || new Eventer({eventPrefix: ''});

    popup.miniGame  = {};
    render.miniGame = {};
    viewer.miniGame = {};
    action.miniGame = {};

    render.miniGame.giftPopup = function (giftInfo){
        var tpl = _.template(Service.getTpl('hothearts-minigame_gifts_popup'));
        var params = {};

        params.hasNext = giftInfo.hasNext;
        params.loverInfo = giftInfo.loverInfo;
        params.currentUser = storage.currentUser;

        return tpl(params);
    };

    render.miniGame.aboutPopup = function (giftInfo){
        var tpl = _.template(Service.getTpl('hothearts-minigame_rules'));
        return tpl({});
    };

    /**
     * get gift popup
     */
    popup.miniGame.giftPopup = function (opts) {
        if ( popup._i.giftPopup ){
            popup._i.giftPopup.close();
        }

        opts = opts || false;

        var onDone = function(giftInfo){
            popup._i.giftPopup = iPopup.open(render.miniGame.giftPopup(giftInfo), {
                noFormatting: true,
                style: {
                    myclass: 'hothearts-popup _minigame_gift',
                    width: 410
                },
                onopen: function(popupInstance){
                    popupInstance.video = new VideoAppender({
                        wrapper: popupInstance.wrapper[0],
                        src: staticDomain + '/app/events/hothearts/video/minigame_gift.mp4',
                        sizeType: VideoAppender.SIZE_TYPE_COVER
                    });

                    popupInstance.kisses = new KissAnimator({
                        wrapper: popupInstance.wrapper[0],
                    });
                },
                onclose: function (popupInstance) {
                    if ( popupInstance.kisses ){
                        popupInstance.kisses.gc();
                    }
                }
            });
        };

        if ( opts ){
            onDone(opts)
        } else {
            action.miniGame.getGift().done(onDone);
        }
    };

    /**
     * about minigame
     */
    popup.miniGame.about = function () {
        var html = render.popupInner({
           html: render.miniGame.aboutPopup()
        });

        popup._i.about = iPopup.open(html, {
            noFormatting: true,
            style: {
                myclass: 'hothearts-popup _minigame_gift',
                width: 600
            }
        });
    };

    action.miniGame.getGift = function(){
        var dfd = $.Deferred();

        if ( locks.miniGameGiftPopup ){
            return dfd;
        }

        locks.miniGameGiftPopup = true;

        hothearts.post('ajaxMinigame/viewGift', {}, function(resp){
            var giftInfo = resp.data && resp.data.giftInfo;

            if ( giftInfo ){
                giftInfo.miniGameGiftsCount--;

                action.checkData(giftInfo);

                locks.miniGameGiftPopup = false;

                dfd.resolve(giftInfo);
            }
        });

        return dfd;
    };

    var KissOnGift = function(params){
        var MAX_COUNT_KISSES = 30;
        var kaInstance = this;
        var kissNode;

        kaInstance.tick = function(){

        };

        kaInstance.checkVisible = function(){

        };

        kaInstance.createNode = function(){

        };

        (function(opts){

        })(params);
    };

    var KissAnimator = function(params){
        var MAX_COUNT_KISSES = 30;

        var kaInstance = this;
        var lastTimeUpdate;
        var collectionKisses = [];

        kaInstance.checkCountKisses = function(){

        };

        kaInstance.createKisses = function(){

        };

        kaInstance.startReq = function(){
            if ( window.requestAnimationFrame ){
                kaInstance.tickReq = window.requestAnimationFrame(kaInstance.tick);
            } else {
                kaInstance.tickReq = st(kaInstance.tick, 20);
            }
        };

        kaInstance.tick = function(){
            var deltaTime;
            var now = fsNow();

            if ( !lastTimeUpdate ){
                lastTimeUpdate = fsNow();
            }

            deltaTime = lastTimeUpdate - now;

            _.each(collectionKisses, function(kiss){
                kiss.update(deltaTime);
            });
        };

        kaInstance.gc = function(){
            if ( window.requestAnimationFrame ){
                cancelAnimationFrame(kaInstance.tickReq);
            } else {
                clearTimeout(kaInstance.tickReq);
            }

            collectionKisses = [];
        };

        (function(opts){

        })(params);
    };

    var VideoAppender = function(params){
        var vaInstance = this;
        var sizeType = VideoAppender.SIZE_TYPE_COVER;
        var wrapper = ge('node-heap');
        var popupIns = false;
        var videoContainer;
        var video;
        var loaded;
        var src;

        vaInstance.createNode = function(){
            video = document.createElement('video');
            videoContainer = document.createElement('div');
            videoContainer.classList.add('hothearts-mg_gift_video_container');

            return vaInstance;
        };

        vaInstance.iSupported = function(){
            return video.canPlayType;
        };

        vaInstance.setVideoSettings = function(){
            video.src = src;
            video.muted = true;
            video.autoplay = 'autoplay';
            video.loop = 'loop';

            video.addEventListener('click', vaInstance.handlerVideoClick, true);
            video.addEventListener('canplay', function(){
                if ( !loaded ){
                    vaInstance.onload();

                    loaded = true;
                }
            }, true);

            return vaInstance;
        };

        vaInstance.onload = function(){
            vaInstance.append().align();

            return vaInstance;
        };

        vaInstance.handlerVideoClick = function(){
            if ( popupIns ){
                popupIns.close();
            } else {
                iPopup.close();
            };

            return vaInstance;
        };

        vaInstance.append = function(){
            videoContainer.appendChild(video);
            wrapper.appendChild(videoContainer);

            return vaInstance;
        };

        vaInstance.align = function(){
            var videoHeight = video.offsetHeight;
            var videoWidth = video.offsetWidth;
            var containerHeight = videoContainer.offsetHeight;
            var containerWidth = videoContainer.offsetWidth;
            var videoProps = videoHeight/videoWidth;
            var containerProps = containerHeight/containerWidth;
            var finalHeight = 0;
            var finalWidth = 0;

            if ( videoProps <= containerProps ){
                finalHeight = containerHeight;
                finalWidth = videoWidth * containerHeight / videoHeight;
            } else {
                finalWidth = containerWidth;
                finalHeight = videoHeight * containerWidth / videoWidth;
            }

            video.width = finalWidth;
            video.height = finalHeight;

            return vaInstance;
        };

        (function(config){
            if ( config.popupIns ){
                popupIns = config.popupIns;
            }

            if ( config.wrapper ){
                wrapper = config.wrapper;
            }

            if ( config.sizeType ){
                sizeType = config.sizeType;
            }

            if ( config.src ){
                src = config.src;
            }

            if ( vaInstance.createNode().iSupported() && src ){
                vaInstance.setVideoSettings();
            }
        })(params);
    };

    VideoAppender.SIZE_TYPE_COVER = 1;
    VideoAppender.SIZE_TYPE_CONTAIN = 2;

    var STATE_TUTORIAL  = 'tutorial';
    var STATE_FINAL     = 'final';
    var STATE_EXIT      = 'exit';
    var STATE_BOOSTER   = 'booster';
    var STATE_PLAY      = 'play';
    var STATE_STOPPER   = 'stopper';

    /**
     * Constructor mini games for hothears
     * @type {Window.hothearts.MiniGame}
     *
     * example call:
     *
     * var boomGame = new MiniGame({
     *      gameType: 1, - gmae type (1 - 4)
     *      time: 10,   - time to end game in seconds
     *      sid: 1010,  - server id of game
     *      count: {
     *          has: 0,
     *          need: 100
     *      },
     *      pointsForHit: 15,
     *      priceForRepeat: 15,
     *      prizes: [
     *          {
     *              title: 'баллов в дуэль',
     *              type: 'pointsForDuel' | 'pointsForTop' | 'uniqueGift',
     *              count: 1000
     *          },
     *          ...
     *      ],
     *      timeBooster: [
     *          {
     *             value: 10,
     *             price: 1.5
     *          },
     *          {
     *              value: 20,
     *              price: 3
     *          },
     *          {
     *              value: 50,
     *              price: 5
     *          },
     *      ]
     * })
     */
    var MiniGame = hothearts.MiniGame = function(params){
        var instance = this;
        var iStorage = {};
        var state;

        instance.init = function(opts){
            console.log('minigame::init::', opts);

            MiniGame.addInstance(instance);

            instance.setStorage(opts)
                .insertGame()
                .popup.main();
        };

        instance.setStorage = function(opts){
            $.extend(true, iStorage, opts);

            return instance;
        };

        instance.getStorage = function(){
            return iStorage;
        };

        /**
         * method for change state in game
         * @param newState
         * @returns {hothearts.MiniGame}
         */
        instance.showState = function(newState){
            var wrapper = instance.getWrapper();
            var layers = iStorage.nodes.layers;
            var layersLength = layers.length;
            var currentLayer;

            if ( inArray(newState, [STATE_TUTORIAL, STATE_EXIT, STATE_FINAL, STATE_PLAY, STATE_BOOSTER, STATE_STOPPER] ) ){
                state = newState;
            }

            if ( wrapper ){
                currentLayer = wrapper.querySelector('.hothearts-mg_layer._' + state);

                for ( var i = 0; i < layersLength; i++ ){
                    layers[i].classList.remove('_active');
                }

                if ( currentLayer ){
                    currentLayer.classList.add('_active');
                }

                if ( iStorage.nodes.timerWrapper ){
                    iStorage.nodes.timerWrapper.classList[ inArray(newState, [STATE_BOOSTER, STATE_STOPPER]) ? 'add' : 'remove']('_super');
                }

                if ( iStorage.nodes.countWrapper ){
                    iStorage.nodes.countWrapper.classList[ inArray(newState, [STATE_STOPPER]) ? 'add' : 'remove']('_super');
                }
            }

            console.log('minigame(id: ' + instance.id + ')::setState::' + state);

            return instance;
        };

        instance.getWrapper = function(){
            return iStorage.wrapper ? iStorage.wrapper : document.getElementById('hothearts-mg_wrapper_' + instance.id);
        };

        instance.getNodes = function(){
            var wrapper = instance.getWrapper();

            if ( !iStorage.nodes ){
                iStorage.nodes = {};
            }

            if ( !iStorage.nodes.timerWrapper ){
                iStorage.nodes.timerWrapper = wrapper.querySelector('.hothearts-mg_timer');
            }

            if ( !iStorage.nodes.countWrapper ){
                iStorage.nodes.countWrapper = wrapper.querySelector('.hothearts-mg_count');
            }

            if ( !iStorage.nodes.timer ){
                iStorage.nodes.timer = wrapper.querySelector('#hothearts-mg_timer_holder');
            }

            if ( !iStorage.nodes.count ){
                iStorage.nodes.count = wrapper.querySelector('.hothearts-mg_count_holder');
            }

            if ( !iStorage.nodes.layers ){
                iStorage.nodes.layers = wrapper.querySelectorAll('.hothearts-mg_layer');
            }

            return iStorage.nodes;
        };

        /**
         * create instance of game by gameType and insert to instance MiniGame
         * @returns {hothearts.MiniGame}
         */
        instance.insertGame = function(){
            var params = {
                sid: iStorage.sid,
                gameId: instance.id,
                miniGameInstance: instance
            };

            switch(iStorage.gameType){
                case 1:
                    instance.game = new GameBoom(params);

                    break;
                case 2:
                    instance.game = new GameShoot(params);

                    break;
                case 3:
                    instance.game = new GameLight(params);

                    break;
                case 4:
                    instance.game = new GameFind(params);

                    break;
            }

            return instance;
        };

        /**
         * game tick. Event is puching for game instances
         */
        instance.tick = function(){
            if ( window.requestAnimationFrame ){
                instance.tickReq = window.requestAnimationFrame(instance.tick);
            } else {
                instance.tickReq = st(instance.tick, 20);
            }

            if (
                instance.game
                && instance.canTick()
            ){
                var tsNow = fsNow();
                var tsPrev = iStorage.tsPrev;
                var oldTime = Math.ceil(iStorage.time / 1000);
                var newTime = 0;
                var deltaTime = tsNow - tsPrev;

                iStorage.time -= tsNow - tsPrev;
                iStorage.tsPrev = tsNow;

                newTime = Math.ceil(iStorage.time / 1000);

                instance.renderTime({
                    oldTime: oldTime,
                    newTime: newTime
                });

                if ( instance.game.tick ){
                    instance.game.tick(deltaTime);
                }
            }
        };

        instance.startTicker = function(){
            instance.tick();

            return instance;
        };

        instance.canTick = function(){
            return state === STATE_PLAY;
        };

        instance.tutorial = function(){
            instance.getNodes();

            instance.showState(STATE_TUTORIAL);

            if ( instance.game && instance.game.start ){
                instance.game.start();
            }

            instance.startTicker();
        };

        instance.startGame = function(){
            hothearts.post('ajaxMinigame/start', {
                game_id: iStorage.sid
            }, function(){
                instance.play();
            });
        };

        instance.restart = function(opts){
            if ( opts.btn ) {
                opts.btn.classList.add('_disabled');
            }

            if ( locks.buyRepeatGame ){
                 return;
            }

            fs.buy({
                serviceId: storage.billingIds.repeatMiniGame,
                params: {
                    game_id: opts.gameId
                },
                callback: function(isBuy, isNotMoney, newBalance, additionalInfo) {
                    locks.buyRepeatGame = false;

                    if (opts.btn) {
                        opts.btn.classList.remove('_disabled');
                    }

                    if (isBuy) {
                        instance.out();

                        MiniGame.startGame(additionalInfo.gameInfo);
                    }
                }
            });
        };

        instance.play = function(){
            instance.showState(STATE_PLAY);

            iStorage.tsPrev = fsNow();

            if ( instance.game && instance.game.play ){
                instance.game.play();
            }
        };

        instance.exit = function(){
            if ( state === STATE_TUTORIAL ){
                instance.unHold();

                return;
            }

            if ( state === STATE_FINAL ){
                instance.out();

                return;
            }

            instance.showState(STATE_EXIT);

            if ( instance.game && instance.game.pause ){
                instance.game.pause();
            }
        };

        /**
         * show booster stage in game
         */
        instance.showBooster = function(){
            instance.showState(STATE_BOOSTER);

            if ( instance.game && instance.game.pause ){
                instance.game.pause();
            }
        };

        /**
         * method for check time to end game and count hits
         */
        instance.checkStopper = function(time){
            var result = false;

            if (
                !iStorage.skipStopper
                && time < 2
                && iStorage.count.need - iStorage.count.has >= 5
            ){
                result = true;
            }

            return result;
        };

        instance.skipStopper = function(){
            iStorage.skipStopper = 1;
            
            instance.play();
        };

        instance.showStopper = function(){
            instance.showState(STATE_STOPPER);

            if ( instance.game && instance.game.pause ){
                instance.game.pause();
            }

            instance.viewer.stopper();
        };

        /**
         * show final stage in game
         */
        instance.final = function(){
            instance.viewer.final();

            instance.showState(STATE_FINAL);

            if ( instance.game && instance.game.final ){
                instance.game.final();
            }

            instance.startFinalAnimation();
            instance.sendFinalNoty();
        };

        instance.sendFinalNoty = function(){
            if ( iStorage.count.has < iStorage.count.need ){
                // hothearts.post('ajaxMinigame/sendFinishGameNotify', {
                //     lover_id: iStorage.loverId
                // })
            }
        };

        instance.startFinalAnimation = function(){
            animateFinalPoints({
                time: .6,
            }).done(function(){
                if ( iStorage.count.has < iStorage.count.need ){
                    return;
                }

                animateFinalSuperPrize({
                    time: 3
                });
            });
        };

        var animateFinalPoints = function(opts) {
            var dfd = $.Deferred();
            var wrapper = instance.getWrapper();
            var countHasHolder = wrapper.querySelector('.hothearts-mg_final_score._has');
            var pointsForDuelHolder = wrapper.querySelector('#hothearts-mg_final_points_duel');
            var pointsForTopHolder = wrapper.querySelector('#hothearts-mg_final_points_top');

            $({ n: 0 }).animate({
                n: iStorage.count.has
            }, {
                duration: opts.time * 1000,
                step: function (a) {
                    var count = Math.ceil(a);

                    countHasHolder.innerHTML = count;
                    pointsForDuelHolder.innerHTML = count * iStorage.pointsForHit;
                    pointsForTopHolder.innerHTML = count * iStorage.pointsForHit;
                },
                complete: dfd.resolve
            });

            return dfd;
        };

        var animateFinalSuperPrize = function(){
            if ( typeof instance === 'undefined' ){
                return;
            }

            var wrapper = instance.getWrapper();
            var scoresHolder = wrapper.querySelector('.hothearts-mg_final_scores');
            var pointsForDuelHolder = wrapper.querySelector('#hothearts-mg_final_points_duel');
            var pointsForTopHolder = wrapper.querySelector('#hothearts-mg_final_points_top');
            var pointsDuelItem = wrapper.querySelector('.hothearts-mg_final_item._pointsForDuel');
            var pointsTopItem = wrapper.querySelector('.hothearts-mg_final_item._pointsForTop');
            var superGiftItem = wrapper.querySelector('.hothearts-mg_final_item._uniqueGift');
            var prizesForTop = _.findWhere(iStorage.prizes, {type: 'pointsForTop'});
            var prizesForDuel = _.findWhere(iStorage.prizes, {type: 'pointsForDuel'});

            if ( superGiftItem ){
                superGiftItem.classList.add('_active', '_animate');
            }

            if ( scoresHolder ){
                scoresHolder.classList.add('_animate');
            }

            if ( pointsTopItem ){
                pointsTopItem.insertAdjacentHTML('beforeend', '<div class="hothearts-mg_final_bonus_points">БОНУС!<br/>+' + prizesForTop.count +  '<div class="hothearts-mg_icn _points _big"></div></div>')
            }

            if ( pointsDuelItem ){
                pointsDuelItem.insertAdjacentHTML('beforeend', '<div class="hothearts-mg_final_bonus_points">БОНУС!<br/>+' + prizesForDuel.count +  '<div class="hothearts-mg_icn _points _big"></div></div>')
            }

            if ( pointsForDuelHolder ){
                pointsForDuelHolder.innerHTML = instance.getPointsForDuel();
            }

            if ( pointsForTopHolder ){
                pointsForTopHolder.innerHTML = instance.getPointsForTop();
            }
        };

        /**
         * method for force unhold game and out of game
         */
        instance.unHold = function(){
            var lockName = 'loadGame' + iStorage.loverId;

            if ( locks[lockName] ){
                return;
            }

            locks[lockName] = true;

            hothearts.post('ajaxMinigame/unhold', {
                game_id: iStorage.sid
            }, function(resp){
                locks[lockName] = false;

                if ( resp.data && resp.data.mainInfo ) {
                    action.checkData({
                        miniGameInfo : resp.data.mainInfo
                    });
                }
            });

            instance.out();
        };

        /**
         * method for force out of game
         */
        instance.out = function(){
            if ( instance.popup._i.main ){
                instance.popup._i.main.close();
            }
        };

        instance.unload = function(){
            if ( state === STATE_TUTORIAL ){
                var img = new Image();

                img.src = '/hotHearts2017/ajaxMinigame/unhold/?game_id=' + iStorage.sid;

                ge('node-heap').appendChild(img);
            }
        };

        instance.hit = function(){
            iStorage.count.has ++;

            instance.viewer.count();

            if ( instance.checkFinal() ){
                instance.final();
            }

            hothearts.post('ajaxMinigame/click', {
                game_id: iStorage.sid
            });
        };

        instance.getPointsForDuel = function(countHit){
            countHit = countHit || iStorage.count.has;

            var withSuperPrize = (countHit >= iStorage.count.need);
            var prize = _.findWhere(iStorage.prizes, {type : 'pointsForDuel'});

            return countHit * iStorage.pointsForHit + ( withSuperPrize ? prize.count : 0 );
        };

        instance.getPointsForTop = function(countHit){
            countHit = countHit || iStorage.count.has;

            var withSuperPrize = (countHit >= iStorage.count.need);
            var prize = _.findWhere(iStorage.prizes, {type : 'pointsForTop'});

            return countHit * iStorage.pointsForHit + ( withSuperPrize ? prize.count : 0 );
        };

        instance.checkFinal = function(){
            return iStorage.count.has >= iStorage.count.need;
        };

        /**
         * method for set new time (in Seconds!) to timer holder. If seconds less then 10 secods, method will adding class _alarm to timer holder
         * @param oldTime
         * @param newTime
         */
        instance.renderTime = function(opts){
            opts = opts || {};

            if ( opts.oldTime === opts.newTime ){
                return;
            }

            if ( instance.checkStopper(opts.newTime) ){
                instance.showStopper();
            }

            if ( opts.newTime <= 0 ){
                instance.final();
            }

            iStorage.nodes.timerWrapper.classList[opts.newTime <= 10 ? 'add' : 'remove']('_alarm');
            iStorage.nodes.timer.innerHTML = timeSmall(opts.newTime, 1);
        };

        /**
         * method for add seconds to timer
         * @param opts
         */
        instance.addTime = function(opts){
            if ( !opts.sec ) {
                return;
            }

            if (opts.btn) {
                opts.btn.classList.add('_disabled');
            }

            fs.buy({
                serviceId: storage.billingIds.addTimeMiniGame,
                params: {
                    seconds: opts.sec,
                    game_id: iStorage.sid
                },
                callback: function(isBuy, isNotMoney, newBalance, additionalInfo) {
                    if (opts.btn) {
                        opts.btn.classList.remove('_disabled');
                    }

                    if ( isBuy ){
                        iStorage.time += opts.sec * 1000;

                        instance.renderTime({
                            newTime: Math.ceil( iStorage.time / 1000 )
                        });
                    }
                }
            });
        };

        /**
         * Buy seconds to game
         * @param opts
         */
        instance.buyTime = function(opts){
            opts = opts || {};

            instance.addTime(opts);
        };

        instance.popup = {
            _i: {}
        };

        instance.popup.main = function(){
            var html = render.popupInner({
                html: instance.render.game(),
                title: ''
            });

            var onOpen = function(popupInstance){
                var $wrapper = popupInstance.wrapper;
                var $closer = popupInstance.wrapper.find('.hothearts-popup_closer');

                $wrapper.attr('onmousedown', '')
                    .click(function(e){
                        if ( (/iPopup-overlay/gi).test(e.target.classList) ){
                            instance.exit();
                        }
                    });

                $closer.attr('onclick', '')
                    .click(function(e){
                        instance.exit();

                        cancelEvent(e);
                    });

                instance.tutorial();

                window.addEventListener('unload', instance.unload, true);
            };

            instance.popup._i.main = iPopup.open(html, {
                noFormatting: true,
                style: {
                    myclass: 'hothearts-popup _minigame',
                    width: 650
                },
                onopen: onOpen,
                onclose: gc
            });
        };

        instance.viewer = {};

        instance.viewer.final = function(){
            var wrapper = instance.getWrapper();

            if ( wrapper ){
                var finalStage = wrapper.querySelector('.hothearts-mg_layer._final');

                finalStage.innerHTML = instance.render.layerFinal();
            }
        };

        instance.viewer.stopper = function(){
            var wrapper = instance.getWrapper();

            if ( wrapper ){
                var stopperStage = wrapper.querySelector('.hothearts-mg_layer._stopper');

                stopperStage.innerHTML = instance.render.layerStopper();
            }
        };

        instance.viewer.count = function(){
            if ( iStorage.nodes.count ){
                iStorage.nodes.count.innerHTML = iStorage.count.has + '/' + iStorage.count.need;
            }
        };

        instance.render = {};

        instance.render.game = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_common'));
            var params = {};

            params.storage = iStorage;

            params.layerTutorialHTML = instance.render.layerTutorial();
            params.layerExitHTML = instance.render.layerExit();
            params.layerBoosterHTML = instance.render.layerBooster();
            params.layerStopperHTML = '';
            params.layerFinalHTML = '';
            params.id = instance.id;
            params.time = iStorage.time;
            params.count = iStorage.count;

            if (
                instance.game
                && instance.game.render
                && instance.game.render.stage
            ){
                params.gameHTML = instance.game.render.stage();
            }

            if (
                instance.game
                && instance.game.render
                && instance.game.render.start
            ){
                params.gameStartHTML = instance.game.render.start();
            }

            return tpl(params);
        };

        instance.render.layerTutorial = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_layer_tutorial'));
            var params = {};

            params.storage = iStorage;
            params.id = instance.id;

            return tpl(params);
        };

        instance.render.layerExit = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_layer_exit'));
            var params = {};

            params.storage = iStorage;
            params.id = instance.id;

            return tpl(params);
        };

        instance.render.layerBooster = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_layer_booster'));
            var params = {};

            params.storage = iStorage;
            params.id = instance.id;

            return tpl(params);
        };

        instance.render.layerStopper = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_layer_stopper'));
            var params = {};
            var prizeForDuel = _.findWhere(iStorage.prizes, {type : 'pointsForDuel'});
            var prizeForTop = _.findWhere(iStorage.prizes, {type : 'pointsForTop'});

            params.storage = iStorage;
            params.id = instance.id;
            params.loverInfo = iStorage.loverInfo;
            params.pointsForDuel = prizeForDuel.count;
            params.pointsForTop = prizeForTop.count;
            params.time = Math.ceil(iStorage.time / 1000);

            return tpl(params);
        };

        instance.render.layerFinal = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_layer_final'));
            var params = {};

            params.storage = iStorage;
            params.id = instance.id;
            params.hasSuperPrize = iStorage.count.has >= iStorage.count.need;
            params.pointsForDuel = instance.getPointsForDuel();
            params.pointsForTop = instance.getPointsForTop();
            params.title = instance.game.getFinalTitle();
            params.icnExtraCountHtml = instance.game.icnCountHtml('extra');
            params.icnSmallCountHtml = instance.game.icnCountHtml('sm');

            return tpl(params);
        };

        var gc = function(){
            console.log('minigame::gc');

            window.removeEventListener('unload', instance.unload, true);

            if ( window.requestAnimationFrame ){
                cancelAnimationFrame(instance.tickReq);
            } else {
                clearTimeout(instance.tickReq);
            }

            if ( instance.game ) {
                instance.game = undefined;
            }

            instance = undefined;
        };

        instance.init(params);

        return instance;
    };

    /**
     * method for add instance to instance collector
     * @param instance - MiniGame instance
     */
    MiniGame.addInstance = function (instance) {
        if ( !(instance instanceof MiniGame) ){
            return;
        }

        if ( !MiniGame.ins ) {
            MiniGame.ins = [];
        }

        MiniGame.ins.push(instance);

        instance.id = MiniGame.ins.length;
    };

    /**
     * get instance by id
     * @param instance
     */
    MiniGame.gi = function (id) {
        if ( !MiniGame.ins ) {
            MiniGame.ins = [];
        }

        return _.findWhere(MiniGame.ins, {id: id});
    };

    /**
     * action for hold game for game
     * @param instance
     */
    MiniGame.loadGame = function (opts) {
        var lockName = 'loadGame' + opts.loverId;

        if ( !opts.loverId && locks[lockName] ){
            return;
        }

        locks[lockName] = true;

        hothearts.post('ajaxMinigame/hold', {
            lover_id: opts.loverId
        }, function(resp){
            locks[lockName] = false;

            if ( resp.data && resp.data.gameInfo ) {
                MiniGame.startGame(resp.data.gameInfo);

                if( resp.data.mainInfo ){
                    action.checkData({
                        miniGameInfo : resp.data.mainInfo
                    });
                }
            } else {
                console.log(resp);

                iPopup.alert('Что-то пошло не так. Ошибка: ' + resp.reason);
            }
        })
    };

    MiniGame.startGame = function (gameData) {
        if ( gameData.time ) {
            gameData.time = +gameData.time * 1000;
        }

        new MiniGame(gameData);
    };

    /**
     * api for actions
     * @param opts - object
     * opts.id - id instance
     * opts.action - action name for executing
     */
    MiniGame.api = function (opts) {
        var ins;

        opts = opts || {};

        ins = MiniGame.gi(opts.id ? opts.id : MiniGame.ins.length);

        if ( ins.hasOwnProperty(opts.action) ){
            ins[opts.action](opts);
        }
    };

    /**
     * Игра для лопания шариков
     * @param params
     * @constructor
     */
    var GameBoom = function(params){
        var iStorage = {};
        var instance = this;
        var state;
        var MAX_HEART_COUNT_ON_DISPLAY = 15;
        var MAX_DELTA_TIME_FOR_SHOW = 50; // in microseconds
        var SPEED_MAX = 10/2; // 1px in 10ms
        var SCALE_MIN = 600;
        var SCALE_MAX = 1000;
        var logPrefix = 'GameBoom';

        instance.setStorage = function(params){
            $.extend(true, iStorage, params);

            return instance;
        };

        instance.getParent = function(){
            return iStorage.miniGameInstance;
        };

        instance.getStorage = function(){
            return iStorage;
        };

        instance.getViewPort = function(){
            var wrapper = iStorage.miniGameInstance.getWrapper();

            if ( iStorage.viewPort ){
                return iStorage.viewPort;
            } else {
                return wrapper.querySelector('.hothearts-mg_game_holder');
            }
        };

        instance.getFinalTitle = function(){
            return 'Лопнуто шариков';
        };

        /**
         *
         * @param size ['sm', 'big', 'extra']
         * @returns {string}
         */
        instance.icnCountHtml = function(size){
            return '<i class="hothearts-mg_icn _game_boom _' + size + '"></i>';
        };

        instance.start = function(){
            console.log(logPrefix + '::start::');

            instance.getViewPort();
        };

        instance.tick = function(deltaTime){
            if ( Baloon.isNewNeeded() ){
                new Baloon();
            }

            Baloon.updateItems(deltaTime);
        };

        instance.render = {};

        instance.render.stage = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_boom'));
            var params = {};

            params.id = iStorage.gameId;
            params.count = instance.getParent().getStorage().count;
            params.countIcnHtml = instance.icnCountHtml('big');

            return tpl(params);
        };

        instance.render.start = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_boom_start'));
            var params = {};

            params.count = instance.getParent().getStorage().count;

            return tpl(params);
        };


        var Baloon = function(config){
            var baloonStorage = {};
            var baloonInstance = this;
            var baloonNode;
            var baloonNodeInner;

            baloonInstance.createNode = function(){
                var viewPort = instance.getViewPort();
                var scale = rand(SCALE_MIN, SCALE_MAX) / 1000;

                if ( viewPort ){
                    Baloon.lastTimeAdded = fsNow();

                    baloonNode = document.createElement('div');
                    baloonNodeInner = document.createElement('div');

                    baloonNode.classList.add('hothearts-mg_boom_baloon');
                    baloonNodeInner.classList.add('hothearts-mg_boom_baloon_inner');

                    baloonNode.appendChild(baloonNodeInner);
                    viewPort.appendChild(baloonNode);

                    baloonInstance.setStorage({
                        x: rand(0, viewPort.offsetWidth - Baloon.mainImage.width),
                        y: viewPort.offsetHeight,
                        scale: scale,
                        speed: SPEED_MAX * scale
                    });
                }

                return baloonInstance;
            };

            baloonInstance.addListener = function(){
                if ( baloonNodeInner ){
                    baloonInstance.removeListener();

                    baloonNodeInner.addEventListener('mousedown', baloonInstance.hit, false);
                }

                return baloonInstance;
            };

            baloonInstance.removeListener = function(){
                if ( baloonNodeInner ){
                    baloonNodeInner.removeEventListener('mousedown', baloonInstance.hit, false);
                }

                return baloonInstance;
            };

            baloonInstance.setStorage = function(params){
                $.extend(true, baloonStorage, params);

                return baloonInstance;
            };

            baloonInstance.setTransformStyles = function(){
                transformElement(baloonNode, 'translateX(' + baloonStorage.x + 'px) translateY(' + baloonStorage.y + 'px) scale(' + baloonStorage.scale + ')')
            };

            baloonInstance.hit = function(){
                var mgInstance = instance.getParent();
                var timeAnimation = 300;

                mgInstance.hit();

                baloonInstance.removeListener();

                baloonInstance.animateHidden(timeAnimation).done(baloonInstance.remove);

                baloonInstance.animatePoints(1000);
            };

            baloonInstance.animateHidden = function(timerAnimation){
                var dfd = $.Deferred();

                baloonInstance.setStorage({
                    scale: 0,
                });

                transitionElement(baloonNode, 'transform ' + timerAnimation + 'ms linear')

                baloonInstance.setTransformStyles();

                st(dfd.resolve, timerAnimation);

                return dfd;
            };

            baloonInstance.animatePoints = function(timerAnimation){
                var dfd = $.Deferred();
                var pointsNode = document.createElement('div');
                var viewPort = instance.getViewPort();

                pointsNode.classList.add('hothearts-mg_boom_points');
                pointsNode.innerHTML = '' +
                    '<div class="hothearts-mg_boom_points_count">+' + instance.getParent().getStorage().pointsForHit +'</div>' +
                    '<div class="hothearts-mg_boom_points_lights"></div>';

                viewPort.appendChild(pointsNode);

                pointsNode.style.left = ( baloonStorage.x + Baloon.mainImage.width / 2 ) + 'px';
                pointsNode.style.top = ( baloonStorage.y + 40 ) + 'px';

                st(function(){
                    pointsNode.remove();
                    dfd.resolve();
                }, timerAnimation);

                return dfd;
            };

            baloonInstance.checkVisible = function(){
                var res = true;

                if ( baloonStorage.y + Baloon.mainImage.height * baloonStorage.scale < 0 ){
                    res = false
                }

                return res;
            };

            baloonInstance.update = function(deltaTime){
                if ( baloonInstance.checkVisible() ){
                    baloonInstance.setStorage({
                        y: baloonStorage.y - deltaTime * SPEED_MAX * baloonStorage.scale,
                    });

                    baloonInstance.setTransformStyles();
                } else {
                    baloonInstance.remove();
                }
            };

            baloonInstance.remove = function(){
                baloonNode.remove();

                Baloon.removeInstance(baloonInstance.id);
            };

            baloonInstance.init = function(params){
                Baloon.addInstance(baloonInstance);

                baloonInstance
                    .setStorage(params)
                    .createNode()
                    .addListener()
                    .setTransformStyles();
            };

            (function(params){
                if ( !Baloon.mainImage ){
                    Baloon.loadMainImage(Baloon.getSrcMainImage()).done(function(){
                        baloonInstance.init(params)
                    });
                } else{
                    baloonInstance.init(params);
                }
            })(config);
        };

        Baloon.collection = [];
        Baloon.instanceId = 0;

        Baloon.getSrcMainImage = function () {
            return staticDomain + '/app/events/hothearts/i/minigame/game_boom/baloon.png';
        };

        Baloon.loadMainImage = function (src) {
            var dfd = $.Deferred();
            var img = new Image();

            img.onload = function(){
                Baloon.mainImage = img;

                dfd.resolve();
            }

            img.src = src;

            return dfd;
        };

        Baloon.isNewNeeded = function () {
            var result = false;
            var timeNow = fsNow();

            if ( !Baloon.lastTimeAdded ){
                result = true;
            } else if ( timeNow - Baloon.lastTimeAdded > MAX_DELTA_TIME_FOR_SHOW ) {
                result = true;
            }

            if ( Baloon.collection.length >= MAX_HEART_COUNT_ON_DISPLAY ){
                result = false;
            }

            return result;
        };

        Baloon.addInstance = function (ins) {
            Baloon.collection.push(ins);

            ins.id = Baloon.instanceId++;
        };

        Baloon.removeInstance = function (id) {
            var indexInCollection = false;

            _.each(Baloon.collection, function(ins, index){
                if ( ins.id === id ){
                    indexInCollection = index;
                }
            });

            if ( indexInCollection !== false ){
                Baloon.collection.splice(indexInCollection, 1);
            }
        };

        Baloon.updateItems = function (deltaTime) {
            Baloon.collection.forEach(function(baloonInstance){
                baloonInstance.update(deltaTime);
            })
        };

        (function(opts){
            console.log(logPrefix + '::init::', params);

            instance.setStorage(params);
        })(params);
    };

    /**
     * Игра для стреляния
     * @param params
     * @constructor
     */
    var GameShoot = function(params){
        var AIM_X                   = 540;
        var AIM_Y                   = 230;
        var MAX_AIM_DELTA           = 120;
        var AIM_SPEED               = 1/50000; // 1px in 10ms
        var AIM_INNER_SCALE_MIN     = 500;
        var AIM_INNER_SCALE_MAX     = 1000;

        var VECTOR_X        = 70; // positionVector: x
        var VECTOR_Y        = 240; // positionVector
        var VECTOR_WIDTH    = 400; // width of vector
        var CHARGE_SPEED    = 1/1; // 1 percent in 5ms
        var CHARGE_DEFAULT  = 100; // how percent

        var SHOOT_SPEED     = 1/5; // 1px in 10ms

        var RADIUS_SHOOT    = 12;
        var RADIUS_AIM      = 75;

        var iStorage = {};
        var instance = this;
        var state;
        var logPrefix = 'GameShoot';

        instance.setStorage = function(params){
            $.extend(true, iStorage, params);

            return instance;
        };

        instance.getStorage = function(){
            return iStorage;
        };

        instance.getParent = function(){
            return iStorage.miniGameInstance;
        };

        instance.getFinalTitle = function(){
            return 'Закинуто сердечек';
        };

        /**
         *
         * @param size ['sm', 'big', 'extra']
         * @returns {string}
         */
        instance.icnCountHtml = function(size){
            return '<i class="hothearts-mg_icn _game_shoot _' + size + '"></i>';
        };

        instance.getViewPort = function(){
            var wrapper = iStorage.miniGameInstance.getWrapper();

            if ( wrapper && !iStorage.viewPort ){
                iStorage.viewPort = wrapper.querySelector('.hothearts-mg_game_holder');
            }

            return iStorage.viewPort;
        };

        instance.play = function(){
            console.log(logPrefix + '::play::');

            if ( !instance.aim ){
                instance.aim = new Aim({
                    count: instance.getParent().getStorage().count,
                    ava: instance.getParent().getStorage().loverInfo.avatar_ss
                });
            }

            if ( !instance.vector ){
                instance.vector = new Vector();
            }
        };

        instance.tick = function(deltaTime){
            if ( instance.aim ){
                instance.aim.update(deltaTime);
            }

            if ( instance.vector ){
                instance.vector.update(deltaTime);
            }

            Shoot.updateItems(deltaTime);
        };

        instance.start = function(){
            instance.addListeners();
        };

        instance.addListeners = function(){
            var viewPort = instance.getViewPort();

            if ( viewPort ){
                instance.rmListeners();

                viewPort.addEventListener('mousemove', instance.moveListener, true);
                viewPort.addEventListener('mousedown', instance.hitListener, true);
            }
        };

        instance.moveListener = function(e){
            var x = e.offsetX == undefined ? e.layerX : e.offsetX;
            var y = e.offsetY == undefined ? e.layerY : e.offsetY;

            if ( instance.vector ){
                instance.vector.setVectorRotate({
                    x: x,
                    y: y
                });
            }
        };

        instance.hitListener = function(e){
            if ( instance.vector && instance.vector.isFullCharge() ){
                var x = e.offsetX == undefined ? e.layerX : e.offsetX;
                var y = e.offsetY == undefined ? e.layerY : e.offsetY;

                new Shoot({
                    toX: x,
                    toY: y,
                    x: VECTOR_X,
                    y: VECTOR_Y,
                })

                if ( instance.vector ){
                    instance.vector.setStorage({
                        charge: 0
                    });
                }
            } else {
                console.log('need charge');
            }
        };

        instance.rmListeners = function(){
            var viewPort = instance.getViewPort();

            if ( viewPort ){
                viewPort.removeEventListener('mousemove', instance.moveListener, true);
                viewPort.removeEventListener('mousedown', instance.hitListener, true);
            }
        };

        instance.render = {};

        instance.render.stage = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_shoot'));
            var params = {};

            params.id = iStorage.gameId;
            params.count = instance.getParent().getStorage().count;
            params.countIcnHtml = instance.icnCountHtml('big');

            return tpl(params);
        };

        instance.render.start = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_shoot_start'));
            var params = {};

            params.count = instance.getParent().getStorage().count;

            return tpl(params);
        };

        var Aim = function(params){
            var aimStorage      = {};
            var aimNode         = false;
            var aimInnerNode    = false;
            var aimInstance     = this;

            aimInstance.update = function(deltaTime){
                var max = AIM_Y + MAX_AIM_DELTA;
                var min = AIM_Y - MAX_AIM_DELTA;

                if ( aimStorage.y > max ) {
                    aimStorage.duration = -1;
                    aimStorage.y = max;
                } else if ( aimStorage.y < min ){
                    aimStorage.duration = 1;
                    aimStorage.y = min;
                }

                aimStorage.y = aimStorage.y + aimStorage.duration * AIM_SPEED * deltaTime;

                aimInstance.setPostionStyles();

                return aimInstance;
            };

            aimInstance.create = function(){
                aimStorage.duration = rand(1, 2); // 1 - down, 2 - up
                aimStorage.x = AIM_X;
                aimStorage.y = AIM_Y;

                aimInstance.createNode();

                return aimInstance;
            };

            aimInstance.createNode = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ){
                    var aim = document.createElement('div');
                    var aimInner = document.createElement('div');

                    aim.classList.add('hothearts-mg_shoot_aim');
                    aimInner.classList.add('hothearts-mg_shoot_aim_inner');

                    aim.appendChild(aimInner);
                    viewPort.appendChild(aim);

                    aimNode = aim;
                    aimInnerNode = aimInner;

                    aimInstance.setPostionStyles();
                    aimInstance.setBackground();
                    aimInstance.setScaleForInner();
                }

                return aimInstance;
            };

            aimInstance.setPostionStyles = function(){
                transformElement(aimNode, 'translateY(' + aimStorage.y + 'px) translateX(' + aimStorage.x + 'px)');

                return aimInstance;
            };

            aimInstance.setBackground = function(){
                aimNode.style.backgroundImage = 'url(' + aimStorage.ava + ')';

                return aimInstance;
            };

            aimInstance.setScaleForInner = function(){
                var delta = AIM_INNER_SCALE_MAX - AIM_INNER_SCALE_MIN;
                var storage = instance.getParent().getStorage();
                var need = storage.count.need;
                var has = storage.count.has;
                var scale = ( AIM_INNER_SCALE_MIN + delta * has / need ) / 1000;

                transformElement(aimInnerNode, 'scale(' + scale + ')');

                return aimInstance;
            }

            aimInstance.setStorage = function(opts){
                $.extend(true, aimStorage, opts);

                return aimInstance;
            };

            aimInstance.getStorage = function(){
                return aimStorage;
            };

            (function(opts){
                aimInstance.setStorage(opts).create();
            })(params);
        };

        var Vector = function(params){
            var vectorStorage   = {};
            var vectorNode      = false;
            var chargeNode      = false;
            var chargeInnerNode = false;
            var vectorInstance  = this;

            vectorInstance.setStorage = function(opts){
                $.extend(true, vectorStorage, opts);
            };

            vectorInstance.getData = function(){
                return {
                    startX: VECTOR_X,
                    startY: VECTOR_Y,
                };
            };

            vectorInstance.update = function(deltaTime){
                if ( !vectorInstance.isFullCharge() ){
                    vectorStorage.charge += deltaTime * CHARGE_SPEED;

                    vectorInstance.setChargeInnerStyles();
                }
            };

            vectorInstance.createNodes = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ){
                    var vector = document.createElement('div');
                    var charge = document.createElement('div');
                    var chargeInner = document.createElement('div');

                    vector.classList.add('hothearts-mg_shoot_vector');
                    charge.classList.add('hothearts-mg_shoot_charge');
                    chargeInner.classList.add('hothearts-mg_shoot_charge_inner');

                    charge.appendChild(chargeInner);

                    viewPort.appendChild(vector);
                    viewPort.appendChild(charge);

                    vectorNode = vector;
                    chargeNode = charge;
                    chargeInnerNode = chargeInner;

                    vectorInstance.setChargeStyles();
                    vectorInstance.setVectorStyles();
                    vectorInstance.setChargeInnerStyles();
                }
            };

            vectorInstance.setChargeStyles = function(){
                if ( chargeNode ){
                    transformElement(chargeNode, 'translateY(' + vectorStorage.y + 'px) translateX(' + vectorStorage.x + 'px)');
                }
            };

            vectorInstance.setChargeInnerStyles = function(){
                if ( chargeInnerNode ){
                    chargeInnerNode.style.top = ( 100 - vectorStorage.charge ) + '%';
                }
            };

            vectorInstance.setVectorStyles = function(opts){
                if ( vectorNode ){
                    vectorNode.style.top = vectorStorage.y + 'px';
                    vectorNode.style.left = vectorStorage.x + 'px';
                    vectorNode.style.width = VECTOR_WIDTH + 'px';
                }
            };

            vectorInstance.setVectorRotate = function(opts){
                opts = opts || false;

                if ( !opts ){
                    return;
                }

                var part = 0;
                var deltaX = opts.x - vectorStorage.x;
                var deltaY = opts.y - vectorStorage.y;
                var rad = 0;
                var deg = 0;

                if ( deltaX >= 0){
                    part = deltaY >= 0 ? 0 : 3
                } else {
                    part = deltaY >= 0 ? 1 : 2
                }

                rad = Math.atan(Math.abs(deltaY) / Math.abs(deltaX));
                deg = rad * 180 / Math.PI;

                switch(part){
                    case 0:
                        deg = deg;

                        break;
                    case 1:
                        deg = 180 - deg;

                        break;
                    case 2:
                        deg = -180 + deg;

                        break;
                    case 3:
                        deg *= -1;

                        break;
                }

                var lineWidth = Math.sqrt( Math.pow( opts.y - vectorStorage.y , 2)  + Math.pow( opts.x - vectorStorage.x , 2) );

                vectorNode.style.width = lineWidth + 'px';
                transformElement(vectorNode, 'rotate(' + deg + 'deg)');

                return deg;
            };

            vectorInstance.isFullCharge = function(){
                return vectorStorage.charge >= 100;
            };

            (function(opts){
                vectorInstance.setStorage({
                    x: VECTOR_X,
                    y: VECTOR_Y,
                    charge: CHARGE_DEFAULT
                });

                vectorInstance.setStorage(opts);

                vectorInstance.createNodes();
            })(params);
        };

        var Shoot = function(params){
            var shootStorage    = {};
            var shootNode       = false;
            var shootInstance   = this;

            shootInstance.setStorage = function(opts){
                $.extend(true, shootStorage, opts);

                return shootInstance;
            };

            shootInstance.calcSpeed = function(){
                var deltaY = shootStorage.toY - shootStorage.y;
                var deltaX = shootStorage.toX - shootStorage.x;
                var multipleY = deltaY > 0 ? 1 : -1;
                var multipleX = deltaX > 0 ? 1 : -1;
                var rad = Math.atan(Math.abs(deltaY) / Math.abs(deltaX));

                shootStorage.speedX = multipleX * SHOOT_SPEED * Math.cos(rad);
                shootStorage.speedY = multipleY * SHOOT_SPEED * Math.sin(rad);

                return shootInstance;
            };

            shootInstance.update = function(deltaTime){
                if ( shootInstance.checkIn() ){
                    shootInstance.animatePoints(1000);

                    shootInstance.hit();

                    if ( instance.aim ){
                        instance.aim.setScaleForInner()
                    }
                } else if ( shootInstance.checkVisible() ){
                    shootStorage.y += shootStorage.speedY * deltaTime;
                    shootStorage.x += shootStorage.speedX * deltaTime;

                    shootInstance.setStyles();
                } else {
                    shootInstance.removeNode();

                    Shoot.remove(shootInstance);
                }
            };

            shootInstance.hit = function(){
                var mgInstance = instance.getParent();
                var timeAnimation = 300;

                mgInstance.hit();

                shootInstance.removeNode();

                Shoot.remove(shootInstance);

                // baloonInstance.animateHidden(timeAnimation).done(baloonInstance.remove);
                //
                // baloonInstance.animatePoints(1000);
            };

            shootInstance.createNode = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ){
                    var shoot = document.createElement('div');

                    shoot.classList.add('hothearts-mg_shoot_item');

                    viewPort.appendChild(shoot);

                    shootNode = shoot;

                    shootInstance.setStyles();
                }
            };

            shootInstance.removeNode = function(){
                if ( shootNode ){
                    shootNode.remove();
                }
            };

            shootInstance.setStyles = function(){
                transformElement(shootNode, 'translateY(' + shootStorage.y + 'px) translateX(' + shootStorage.x + 'px)');
            };

            shootInstance.animatePoints = function(timerAnimation){
                var dfd = $.Deferred();
                var pointsNode = document.createElement('div');
                var viewPort = instance.getViewPort();

                pointsNode.classList.add('hothearts-mg_boom_points');
                pointsNode.innerHTML = '' +
                    '<div class="hothearts-mg_boom_points_count">+' + instance.getParent().getStorage().pointsForHit +'</div>' +
                    '<div class="hothearts-mg_boom_points_lights"></div>';

                viewPort.appendChild(pointsNode);

                pointsNode.style.left = shootStorage.x  + 'px';
                pointsNode.style.top = shootStorage.y + 'px';

                st(function(){
                    pointsNode.remove();
                    dfd.resolve();
                }, timerAnimation);

                return dfd;
            };

            shootInstance.checkVisible = function(){
                var isVisible = true;
                var viewPort = instance.getViewPort();

                if ( shootStorage.x + RADIUS_SHOOT < 0 ){
                    isVisible = false;
                }

                if ( shootStorage.y + RADIUS_SHOOT < 0 ){
                    isVisible = false;
                }

                if ( shootStorage.y - RADIUS_SHOOT > viewPort.offsetHeight ){
                    isVisible = false;
                }

                if ( shootStorage.x - RADIUS_SHOOT > viewPort.offsetWidth ){
                    isVisible = false;
                }

                return isVisible;
            };

            shootInstance.checkIn = function(){
                var aimStorage = instance.aim.getStorage();

                var line = Math.sqrt( Math.pow( aimStorage.y - shootStorage.y , 2)  + Math.pow( aimStorage.x - shootStorage.x , 2) );

                return RADIUS_AIM + RADIUS_SHOOT > line;
            };

            (function(opts){
                shootInstance.setStorage(opts).calcSpeed().createNode();

                Shoot.addInstance(shootInstance);
            })(params);
        };

        Shoot.instanceId = 0;
        Shoot.collection = [];

        Shoot.addInstance = function (ins) {
            Shoot.collection.push(ins);

            ins.id = Shoot.instanceId++;
        };

        Shoot.updateItems = function (deltaTime) {
            _.each(Shoot.collection, function(ins){
                ins.update(deltaTime);
            })
        };

        Shoot.remove = function (ins) {
            ins = ins || false;

            if ( !ins ){
                return;
            }

            var indexForRemove = false;

            _.each(Shoot.collection, function(item, index){
                if ( item.id == ins.id){
                    indexForRemove = index;
                }
            });

            if ( indexForRemove !== false ){
                Shoot.collection.splice(indexForRemove, 1);
            }
        };

        (function(opts){
            console.log('shoot game init', params);

            instance.setStorage(params);
        })(params);
    };

    /**
     * Игра для зажигание лампочек
     * @param params
     * @constructor
     */
    var GameLight = function(params){
        var AVA_WIDTH   = 150;
        var AVA_HEIGHT  = 150;
        var AVA_TOP     = 200;
        var AVA_LEFT    = 325;
        var AVA_PROGRESS_SCALE_MIN     = 500;
        var AVA_PROGRESS_SCALE_MAX     = 1000;

        var LIGHT_STATE_UNUSED  = 1;
        var LIGHT_STATE_USED    = 2;
        var LIGHT_WIDTH         = 66;
        var LIGHT_HEIGHT        = 59;

        var MAX_LIGHTS  = 50;

        var iStorage    = {};
        var instance    = this;
        var logPrefix   = 'GameLight';

        instance.setStorage = function(params){
            $.extend(true, iStorage, params);

            return instance;
        };

        instance.getStorage = function(){
            return iStorage;
        };

        instance.getParent = function(){
            return iStorage.miniGameInstance;
        };

        instance.getFinalTitle = function(){
            return 'Зажгли лампочек';
        };

        instance.hit = function(){
            instance.getParent().hit();

            var countUnUsedLights = Light.getCountUnUsed();

            if ( countUnUsedLights < MAX_LIGHTS ){
                var countNeeded = MAX_LIGHTS - countUnUsedLights;

                for(var i = 0; i < countNeeded; i++){
                    new Light();
                }
            }

            if ( instance.ava ){
                instance.ava.setStyleProgress();
            }
        };

        /**
         * @param size ['sm', 'big', 'extra']
         * @returns {string}
         */
        instance.icnCountHtml = function(size){
            return '<i class="hothearts-mg_icn _game_light _' + size + '"></i>';
        };

        instance.getViewPort = function(){
            var wrapper = iStorage.miniGameInstance.getWrapper();

            if ( wrapper && !iStorage.viewPort ){
                iStorage.viewPort = wrapper.querySelector('.hothearts-mg_game_holder');
            }

            return iStorage.viewPort;
        };

        instance.play = function(){
            var countUnUsedLights = Light.getCountUnUsed();

            if ( !instance.ava ){
                instance.ava = new Ava({
                    ava: instance.getParent().getStorage().loverInfo.avatar_ss
                });
            }

            if ( countUnUsedLights < MAX_LIGHTS ){
                var countNeeded = MAX_LIGHTS - countUnUsedLights;

                for(var i = 0; i < countNeeded; i++){
                    new Light();
                }
            }
        };

        instance.render = {};

        instance.render.stage = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_light'));
            var params = {};

            params.id = iStorage.gameId;
            params.count = instance.getParent().getStorage().count;
            params.countIcnHtml = instance.icnCountHtml('big');

            return tpl(params);
        };

        instance.render.start = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_light_start'));
            var params = {};

            params.count = instance.getParent().getStorage().count;

            return tpl(params);
        };

        var Ava = function(params){
            var avaStorage = {};
            var avaInstance = this;
            var avaNode;
            var avaProgressNode;

            avaInstance.setStorage = function(opts){
                $.extend(true, avaStorage, opts);

                return avaInstance;
            };

            avaInstance.getStorage = function(){
                return avaStorage;
            };

            avaInstance.create = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ) {
                    avaNode = document.createElement('div');
                    avaProgressNode = document.createElement('div');

                    avaNode.classList.add('hothearts-mg_light_ava');
                    avaProgressNode.classList.add('hothearts-mg_light_ava_progress');

                    avaNode.appendChild(avaProgressNode);

                    viewPort.appendChild(avaNode);

                    avaInstance.setStyleAva();
                    avaInstance.setStyleProgress();
                }
            };

            avaInstance.setStyleAva = function(){
                if ( avaNode ){
                    avaNode.style.backgroundImage = 'url(' + avaStorage.ava + ')';
                    avaNode.style.width = AVA_WIDTH + 'px';
                    avaNode.style.height = AVA_HEIGHT + 'px';
                    avaNode.style.left = AVA_LEFT + 'px';
                    avaNode.style.top = AVA_TOP + 'px';
                }

                return avaInstance;
            };

            avaInstance.setStyleProgress = function(){
                if ( avaProgressNode ){
                    var delta = AVA_PROGRESS_SCALE_MAX - AVA_PROGRESS_SCALE_MIN;
                    var storage = instance.getParent().getStorage();
                    var need = storage.count.need;
                    var has = storage.count.has;
                    var scale = ( AVA_PROGRESS_SCALE_MIN + delta * has / need ) / 1000;

                    transformElement(avaProgressNode, 'scale(' + scale + ')');
                }

                return avaInstance;
            };

            (function(opts){
                console.log(logPrefix + '::new Ava::', params);

                avaInstance.setStorage(params).create();
            })(params);
        };

        var Light = function(params){
            var lightInstance = this;
            var lightStorage = {};
            var lightNode;

            lightInstance.setStorage = function(opts){
                $.extend(true, lightStorage, opts);

                return lightInstance;
            };

            lightInstance.getState = function(){
                return lightStorage.state;
            };

            lightInstance.getStorage = function(){
                return lightStorage;
            };

            lightInstance.create = function(){
                var viewPort = instance.getViewPort();
                var position = Light.getRandomPosition();

                if ( viewPort ){
                    lightNode = document.createElement('div');

                    lightStorage.x = position.x;
                    lightStorage.y = position.y;

                    lightNode.classList.add('hothearts-mg_light_item');

                    viewPort.appendChild(lightNode);

                    lightInstance.setStyles();

                    lightInstance.addListener();
                }
            };

            lightInstance.setStyles = function(){
                lightNode.style.left = lightStorage.x + 'px';
                lightNode.style.top = lightStorage.y + 'px';
            };

            lightInstance.addListener = function(){
                if ( lightNode ){
                    lightInstance.removeListener();

                    lightNode.addEventListener('mousedown', lightInstance.handlerClick, true);
                }
            };

            lightInstance.removeListener = function(){
                lightNode.removeEventListener('mousedown', lightInstance.handlerClick, true);
            };

            lightInstance.handlerClick = function(e){
                var x = e.offsetX == undefined ? e.layerX : e.offsetX;
                var y = e.offsetY == undefined ? e.layerY : e.offsetY;

                if ( lightStorage.state === LIGHT_STATE_UNUSED ){
                    instance.hit();

                    lightNode.classList.add('_on');

                    lightInstance.animatePoints({
                        timerAnimation: 1000,
                        x: x,
                        y: y
                    }).done(function(){
                        lightNode.remove();

                        Light.rmInstance(lightNode.id);
                    });

                    lightStorage.state = LIGHT_STATE_USED;
                }
            };

            lightInstance.animatePoints = function(opts){
                var dfd = $.Deferred();
                var pointsNode = document.createElement('div');
                var viewPort = instance.getViewPort();

                pointsNode.classList.add('hothearts-mg_light_points');
                pointsNode.innerHTML = '' +
                    '<div class="hothearts-mg_light_points_count">+' + instance.getParent().getStorage().pointsForHit +'</div>' +
                    '<div class="hothearts-mg_light_points_lights"></div>';

                viewPort.appendChild(pointsNode);

                pointsNode.style.left = lightStorage.x + 'px';
                pointsNode.style.top = lightStorage.y + 'px';

                st(function(){
                    pointsNode.remove();
                    dfd.resolve();
                }, opts.timerAnimation);

                return dfd;
            };

            (function(opts){
                lightInstance
                    .setStorage({ state: LIGHT_STATE_UNUSED, })
                    .setStorage(opts)
                    .create();

                Light.addInstance(lightInstance);
            })(params);
        };

        Light.collection = [];
        Light.instanceId = 0;

        Light.addInstance = function(instance){
            Light.collection.push(instance);

            instance = Light.instanceId++;
        };

        Light.rmInstance = function(id){
            var indexForRemove = false;

            _.each(Light.collection, function(item, index){
                if ( id === item.id ) {
                    indexForRemove = index;
                }
            });

            Light.collection.splice(indexForRemove, 1);
        };

        Light.getCountUnUsed = function(){
            var count = false;

            _.each(Light.collection, function(item){
                if ( LIGHT_STATE_UNUSED === item.getState() ) {
                    count++;
                }
            });

            return count;
        };

        Light.getRandomPosition = function(){
            var viewPort = instance.getViewPort();
            var x = 0;
            var y = 0;

            if ( viewPort ){
                var yFrom = LIGHT_HEIGHT / 2;
                var xFrom = LIGHT_HEIGHT / 2;
                var yTo = viewPort.offsetHeight - LIGHT_HEIGHT / 2;
                var xTo = viewPort.offsetWidth - LIGHT_HEIGHT / 2;
                var yCalc = rand(yFrom, yTo);
                var xCalc = 0;
                var avaRadius = AVA_HEIGHT / 2 + 10;
                var btnWidth = 230;
                var btnTop = 480 - 85;

                if (
                    yCalc < ( AVA_TOP - avaRadius )
                    || ( yCalc > ( AVA_TOP + avaRadius ) && yCalc < btnTop )
                ){

                    xCalc = rand(xFrom, xTo);

                } else if( yCalc >= ( AVA_TOP - avaRadius ) && yCalc <= ( AVA_TOP + avaRadius ) ){
                    var r = rand(0, 1);

                    if ( !r ){
                        xCalc = rand(xFrom, xTo/2 - avaRadius - LIGHT_HEIGHT/2);
                    } else {
                        xCalc = rand(xTo/2 + avaRadius + LIGHT_HEIGHT/2, xTo);
                    }
                } else if( yCalc >= btnTop ){
                    var r = rand(0, 1);

                    if ( !r ){
                        xCalc = rand(xFrom, xTo/2 - btnWidth/2 - LIGHT_HEIGHT/2);
                    } else {
                        xCalc = rand(xTo/2 + btnWidth/2 + LIGHT_HEIGHT/2, xTo);
                    }
                }

                x = xCalc;
                y = yCalc;
            }

            return {
                x: x,
                y: y
            }
        };

        (function(opts){
            console.log(logPrefix + '::init::', params);

            instance.setStorage(params);
        })(params);

        return instance;
    };

    /**
     * Игра для нахождения дупликатов карт
     * @param params
     * @constructor
     */
    var GameFind = function(params){
        var AVA_WIDTH   = 100;
        var AVA_HEIGHT  = 100;
        var AVA_TOP     = 220;
        var AVA_LEFT    = 325;
        var AVA_PROGRESS_SCALE_MIN     = 500;
        var AVA_PROGRESS_SCALE_MAX     = 1000;

        var CARD_STATE_HIDDEN       = 1;
        var CARD_STATE_OPENED       = 2;
        var CARD_STATE_IN_PAIR      = 3;
        var CARD_TIME_ANIMATION     = 100;

        var logPrefix   = 'GameFind';
        var iStorage = {};
        var instance = this;
        var state;

        var cardPositions = [
            { x: 147, y: 156 },
            { x: 147, y: 261 },
            { x: 235, y: 117 },
            { x: 235, y: 313 },
            { x: 325, y: 99 },
            { x: 325, y: 342 },
            { x: 414, y: 117 },
            { x: 414, y: 313 },
            { x: 497, y: 156 },
            { x: 497, y: 261 },
        ];

        var cardTypes = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        instance.setStorage = function(params){
            $.extend(true, iStorage, params);

            return instance;
        };

        instance.getStorage = function(params){
            return iStorage;
        };

        instance.getFinalTitle = function(){
            return 'Найдено парных карт';
        };

        instance.getParent = function(){
            return iStorage.miniGameInstance;
        };

        instance.getViewPort = function(){
            var wrapper = iStorage.miniGameInstance.getWrapper();

            if ( iStorage.viewPort ){
                return iStorage.viewPort;
            } else {
                return wrapper.querySelector('.hothearts-mg_game_holder');
            }
        };

        /**
         * @param size ['sm', 'big', 'extra']
         * @returns {string}
         */
        instance.icnCountHtml = function(size){
            return '<i class="hothearts-mg_icn _game_find _' + size + '"></i>';
        };

        instance.play = function(){
            console.log( logPrefix + '::play');

            if ( !instance.ava ) {
                instance.ava = new Ava({
                    ava: instance.getParent().getStorage().loverInfo.avatar_ss
                })
            }

            if ( Card.newNeeded() ) {
                Card.createCollection();
            }
        };

        instance.render = {};

        instance.render.stage = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_find'));
            var params = {};

            params.id = iStorage.gameId;
            params.count = instance.getParent().getStorage().count;
            params.countIcnHtml = instance.icnCountHtml('big');

            return tpl(params);
        };

        instance.render.start = function(){
            var tpl = _.template( Service.getTpl('hothearts-minigame_find_start'));
            var params = {};

            params.count = instance.getParent().getStorage().count;

            return tpl(params);
        };

        var Ava = function(params){
            var avaStorage = {};
            var avaInstance = this;
            var avaNode;
            var avaProgressNode;

            avaInstance.setStorage = function(opts){
                $.extend(true, avaStorage, opts);

                return avaInstance;
            };

            avaInstance.getStorage = function(){
                return avaStorage;
            };

            avaInstance.create = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ) {
                    avaNode = document.createElement('div');
                    avaProgressNode = document.createElement('div');

                    avaNode.classList.add('hothearts-mg_find_ava');
                    avaProgressNode.classList.add('hothearts-mg_find_ava_progress');

                    avaNode.appendChild(avaProgressNode);

                    viewPort.appendChild(avaNode);

                    avaInstance.setStyleAva();
                    avaInstance.setStyleProgress();
                }
            };

            avaInstance.setStyleAva = function(){
                if ( avaNode ){
                    avaNode.style.backgroundImage = 'url(' + avaStorage.ava + ')';
                    avaNode.style.width = AVA_WIDTH + 'px';
                    avaNode.style.height = AVA_HEIGHT + 'px';
                    avaNode.style.left = AVA_LEFT + 'px';
                    avaNode.style.top = AVA_TOP + 'px';
                }

                return avaInstance;
            };

            avaInstance.setStyleProgress = function(){
                if ( avaProgressNode ){
                    var delta = AVA_PROGRESS_SCALE_MAX - AVA_PROGRESS_SCALE_MIN;
                    var storage = instance.getParent().getStorage();
                    var need = storage.count.need;
                    var has = storage.count.has;
                    var scale = ( AVA_PROGRESS_SCALE_MIN + delta * has / need ) / 1000;

                    transformElement(avaProgressNode, 'scale(' + scale + ')');
                }

                return avaInstance;
            };

            (function(opts){
                console.log(logPrefix + '::new Ava::', params);

                avaInstance.setStorage(params).create();
            })(params);
        };

        var Card = function(params){
            var cardInstance = this;
            var cardStorage = {};
            var cardNode;
            var cardNodeInner;
            var state;

            cardInstance.createNode = function(){
                var viewPort = instance.getViewPort();

                if ( viewPort ){
                    cardNode = document.createElement('div');
                    cardNodeInner = document.createElement('div');

                    cardNode.classList.add('hothearts-mg_find_card');
                    cardNodeInner.classList.add('hothearts-mg_find_card_inner', '_card_' + cardStorage.type, '_closed');

                    cardNode.appendChild(cardNodeInner);
                    viewPort.appendChild(cardNode);
                }

                cardInstance.addListener();
                cardInstance.setStyles();

                return cardInstance;
            };

            cardInstance.remove = function(){
                cardNode.remove();
            };

            cardInstance.getState = function(){
                return state;
            };

            cardInstance.setState = function(newState){
                state = newState;

                return cardInstance;
            };

            cardInstance.setCoords = function(opts){
                opts = opts || {};

                cardStorage.x = opts.x ? opts.x : cardStorage.x;
                cardStorage.y = opts.y ? opts.y : cardStorage.y;

                return cardInstance;
            };

            cardInstance.setStyles = function(opts){
                opts = opts || {};

                cardInstance.setCoords(opts);

                if ( cardNode ){
                    transformElement(cardNode, 'translateX(' + cardStorage.x + 'px) translateY(' + cardStorage.y + 'px)')
                }

                return cardInstance;
            };

            cardInstance.fly = function(opts){
                opts = opts || {};

                opts.time = opts.time || rand(100, 300);

                if ( cardNode ){
                    transitionElement(cardNode, 'all ' + opts.time + 'ms');

                    st(function(){
                        cardInstance.setStyles(opts);
                    }, 20);
                }
            };

            cardInstance.setStorage = function(data){
                $.extend(true, cardStorage, data);

                return cardInstance;
            };

            cardInstance.getStorage = function(){
                return cardStorage;
            };

            cardInstance.addListener = function(){
                if ( cardNode ){
                    cardInstance.rmListener();

                    cardNode.addEventListener('mousedown', cardInstance.handlerClick, true)
                }

                return cardInstance;
            };

            cardInstance.rmListener = function(){
                cardNode.removeEventListener('mousedown', cardInstance.handlerClick, true)
            };

            cardInstance.handlerClick = function(){
                if ( Card.lockToggle ){
                    console.log('locked toggle');

                    return;
                }

                if ( state === CARD_STATE_IN_PAIR ){
                    console.log('already clicked');

                    return;
                }

                cardInstance.open();

                if ( Card.getOpened().length === 2 ){
                    Card.lockToggle = true;
                }

                st(function(){
                    Card.checkPairs();
                }, CARD_TIME_ANIMATION + 100);
            };

            cardInstance.open = function(){
                cardNode.classList.remove('_closed');
                cardNode.classList.add('_opened');

                cardInstance.setState(CARD_STATE_OPENED);
            };

            cardInstance.hide = function(){
                cardNode.classList.remove('_opened');
                cardNode.classList.add('_closed');

                Card.lockToggle = true;

                cardInstance.setState(CARD_STATE_HIDDEN);

                st(function(){
                    Card.lockToggle = false;
                }, CARD_TIME_ANIMATION);
            };

            cardInstance.isShowed = function(){
                return false;
            };

            (function(opts){
                cardInstance
                    .setStorage({
                        y: AVA_TOP,
                        x: AVA_LEFT
                    })
                    .setStorage(opts)
                    .createNode()
                    .setState(CARD_STATE_HIDDEN)
                    .fly({
                        x: params.position.x,
                        y: params.position.y,
                    });

                Card.addInstance(cardInstance);
            })(params);
        };

        Card.collection = [];
        Card.toggled = [];
        Card.instanceId = 0;
        Card.showedCount = 0;
        Card.lockToggle = false;

        Card.addInstance = function(instance){
            Card.collection.push(instance);

            instance.id = Card.instanceId++;
        };

        Card.rmInstance = function(){
            var indexForRemove = false;

            _.each(Card.collection, function(item, index){
                if ( id === item.id ) {
                    indexForRemove = index;
                }
            });

            Card.collection.splice(indexForRemove, 1);
        };

        Card.newNeeded = function(){
            return Card.collection.length < cardPositions.length;
        };

        Card.getOpened = function(){
            var cardsForCheck = [];

            _.each(Card.collection, function(card){
                if ( card.getState() === CARD_STATE_OPENED ){
                    cardsForCheck.push(card);
                }
            });

            return cardsForCheck;
        };

        Card.checkPairs = function(){
            var cardsForCheck = Card.getOpened();

            if ( cardsForCheck.length !== 2 ){
                return;
            }

            if ( cardsForCheck[0].getStorage().type === cardsForCheck[1].getStorage().type ){
                _.each(cardsForCheck, function(card){
                    card.setState(CARD_STATE_IN_PAIR);
                });

                Card.animatePoints();

                instance.getParent().hit();

                if ( Card.checkAllInPairs() ){
                    Card.createCollection()
                }

                Card.lockToggle = false;
            } else {
                _.each(cardsForCheck, function(card){
                    card.hide();
                });
            }
        };

        Card.checkAllInPairs = function(){
            var allInPairs = true;

            _.each(Card.collection, function(card){
                if ( card.getState() !== CARD_STATE_IN_PAIR ){
                    allInPairs = false;
                }
            });

            return allInPairs;
        };

        Card.cleanCollection = function(){
            var dfd = $.Deferred();

            if ( Card.collection.length ){
                var timeAnimation = CARD_TIME_ANIMATION;

                _.each(Card.collection, function(card){
                    card.fly({
                        x: AVA_LEFT,
                        y: AVA_TOP,
                        time: timeAnimation
                    });
                });

                st(function(){
                    _.each(Card.collection, function(card){
                        card.remove();
                    });

                    Card.collection = [];

                    dfd.resolve();
                }, timeAnimation);
            } else {
                dfd.resolve();
            }

            return dfd;
        };

        Card.createCollection = function(){
            var lengthCardPositions = cardPositions.length;
            var coords = {};
            var types = _.shuffle(cardTypes.slice(0));
            var type;

            Card.cleanCollection().done(function(){
                for(var i = 0; i < lengthCardPositions; i++){
                    coords = cardPositions[i];
                    type = types[i];

                    new Card({
                        position: coords,
                        type: type
                    });
                }
            });
        };

        Card.animatePoints = function(){
            var dfd = $.Deferred();
            var pointsNode = document.createElement('div');
            var viewPort = instance.getViewPort();
            var timerAnimation = 800;

            if ( viewPort ){
                pointsNode.classList.add('hothearts-mg_boom_points');
                pointsNode.innerHTML = '' +
                    '<div class="hothearts-mg_boom_points_count">+' + instance.getParent().getStorage().pointsForHit +'</div>' +
                    '<div class="hothearts-mg_boom_points_lights"></div>';

                viewPort.appendChild(pointsNode);

                pointsNode.style.left = AVA_LEFT + 'px';
                pointsNode.style.top = AVA_TOP + 'px';

                st(function(){
                    pointsNode.remove();
                    dfd.resolve();
                }, timerAnimation);
            }

            return dfd;
        };

        (function(opts){
            console.log(logPrefix + '::init::', params);

            instance.setStorage(params);
        })(params);

        return instance;
    };

    var cssPrefixes = ['', 'O', 'ms', 'Moz', 'Webkit'];

    /**
     * Apply css transform styles to element
     * @param element
     * @param transformStyle
     */
    function transformElement(element, transformStyle) {
        for (var i = 0; i < cssPrefixes.length; ++i) {
            element.style[cssPrefixes[i] + (cssPrefixes[i] ? 'Transform' : 'transform')] = transformStyle;
        }
    }

    /**
     * Apply css transition styles to element
     * @param element
     * @param transitionStyle
     */
    function transitionElement(element, transitionStyle) {
        for (var i = 0; i < cssPrefixes.length; ++i) {
            element.style[cssPrefixes[i] + (cssPrefixes[i] ? 'Transition' : 'transition')] = transitionStyle;
        }
    }
})(window.hothearts);}