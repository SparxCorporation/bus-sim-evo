        globalThis.unityStringify = function(v){ return (typeof v === "string") ? v : String(v); };
        globalThis.UnitySDK = { logError(){}, log(){}, unlockPointer(){}, lockPointer(){}, pointerLockElement:null, enableDebug:false };
        globalThis.CrazyGames = { SDK: {
          init(){ return Promise.resolve(); },
          getInstance(){ return this; },
          ad:{
            requestAd(type, cb){ try{ cb?.adStarted?.(); cb?.adFinished?.(); }catch(e){} return Promise.resolve(); },
            hasAdblock(){ return Promise.resolve(false); },
            addAdblockPopupListener(){}
          },
          banner:{ requestOverlayBanners(){} },
          game:{ inviteLink(){return "";}, setGameContext(){}, updateRoom(){}, hideInviteButton(){}, happytime(){} },
          user:{
            systemInfo:{},
            showAccountLinkPrompt(){ return Promise.resolve({}); },
            showAuthPrompt(){ return Promise.resolve({}); },
            submitScore(){},
            getUser(){ return Promise.resolve({}); },
            getUserToken(){ return Promise.resolve(""); },
            getXsollaUserToken(){ return Promise.resolve(""); },
            isUserAccountAvailable:false
          },
          data:{ syncUnityGameData(){} }
        }};
        Object.defineProperty(window, "unityStringify", {
            configurable: false,
            writable: false,
            value: function(v){
                return typeof v === "string" ? v : String(v);
            }
        });
