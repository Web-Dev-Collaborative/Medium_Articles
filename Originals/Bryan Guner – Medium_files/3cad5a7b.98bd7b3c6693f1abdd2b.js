(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "5/z4": function (e, t, n) {
      let r, o, i;
      (o = [n("VDtp")]),
        void 0 ===
          (i =
            "function" ===
            typeof (r = e => {
              "use strict";
              const t = e.Reader, n = e.Writer, r = e.util, o = e.roots.default || (e.roots.default = {});
              return (o.api = (() => {
                const i = {};
                return (i.Command = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  let a;
                  return (i.prototype.channel = 0),
                  (i.prototype.session = 0),
                  (i.prototype.openChan = null),
                  (i.prototype.openChanRes = null),
                  (i.prototype.closeChan = null),
                  (i.prototype.closeChanRes = null),
                  (i.prototype.containerState = null),
                  (i.prototype.portOpen = null),
                  (i.prototype.toast = null),
                  (i.prototype.redirect = null),
                  (i.prototype.alwaysOn = null),
                  (i.prototype.runMain = null),
                  (i.prototype.clear = null),
                  (i.prototype.eval = ""),
                  (i.prototype.result = ""),
                  (i.prototype.input = ""),
                  (i.prototype.output = ""),
                  (i.prototype.error = ""),
                  (i.prototype.saneTerm = null),
                  (i.prototype.resizeTerm = null),
                  (i.prototype.state = 0),
                  (i.prototype.ok = null),
                  (i.prototype.persist = null),
                  (i.prototype.persistMirror = null),
                  (i.prototype.write = null),
                  (i.prototype.remove = null),
                  (i.prototype.move = null),
                  (i.prototype.tryRemove = null),
                  (i.prototype.mkdir = null),
                  (i.prototype.stat = null),
                  (i.prototype.statRes = null),
                  (i.prototype.read = null),
                  (i.prototype.readdir = null),
                  (i.prototype.files = null),
                  (i.prototype.file = null),
                  (i.prototype.checkChanges = null),
                  (i.prototype.changedFiles = null),
                  (i.prototype.lintResults = null),
                  (i.prototype.runContainedTest = null),
                  (i.prototype.testResult = null),
                  (i.prototype.debuggerStart = ""),
                  (i.prototype.debuggerStep = null),
                  (i.prototype.debuggerStatus = null),
                  (i.prototype.ensurePackages = null),
                  (i.prototype.ping = null),
                  (i.prototype.pong = null),
                  (i.prototype.hello = null),
                  (i.prototype.goodbye = null),
                  (i.prototype.hint = null),
                  (i.prototype.connect = null),
                  (i.prototype.send = null),
                  (i.prototype.recv = null),
                  (i.prototype.disconnect = null),
                  (i.prototype.fileAuthReq = null),
                  (i.prototype.fileAuthRes = null),
                  (i.prototype.mutliFileAuthRes = null),
                  (i.prototype.listObjects = null),
                  (i.prototype.listObjectsResp = null),
                  (i.prototype.ot = null),
                  (i.prototype.otstatus = null),
                  (i.prototype.otLinkFile = null),
                  (i.prototype.otNewCursor = null),
                  (i.prototype.otDeleteCursor = null),
                  (i.prototype.otFetchRequest = null),
                  (i.prototype.otFetchResponse = null),
                  (i.prototype.flush = null),
                  (i.prototype.debug = null),
                  (i.prototype.startVCR = null),
                  (i.prototype.readVCR = null),
                  (i.prototype.VCRLog = null),
                  (i.prototype.auth = null),
                  (i.prototype.execInfo = null),
                  (i.prototype.subscribeFile = null),
                  (i.prototype.fileEvent = null),
                  (i.prototype.roster = null),
                  (i.prototype.join = null),
                  (i.prototype.part = null),
                  (i.prototype.exec = null),
                  (i.prototype.packageSearch = null),
                  (i.prototype.packageSearchResp = null),
                  (i.prototype.packageInfo = null),
                  (i.prototype.packageInfoResp = null),
                  (i.prototype.packageAdd = null),
                  (i.prototype.packageRemove = null),
                  (i.prototype.packageInstall = null),
                  (i.prototype.packageListSpecfile = null),
                  (i.prototype.packageListSpecfileResp = null),
                  (i.prototype.packageCacheSave = null),
                  (i.prototype.chatMessage = null),
                  (i.prototype.chatTyping = null),
                  (i.prototype.chatScrollback = null),
                  (i.prototype.fsSnapshot = null),
                  (i.prototype.fsTakeLock = null),
                  (i.prototype.fsReleaseLock = null),
                  (i.prototype.hasCap = !1),
                  (i.prototype.pid1Config = null),
                  (i.prototype.metrics = null),
                  (i.prototype.bootStatus = null),
                  (i.prototype.readMeta = null),
                  (i.prototype.writeMeta = null),
                  (i.prototype.appendMeta = null),
                  (i.prototype.audio = null),
                  (i.prototype.pprofRequest = null),
                  (i.prototype.pprofResponse = null),
                  (i.prototype.audio2 = null),
                  (i.prototype.PTYConfig = null),
                  (i.prototype.ref = ""),
                  Object.defineProperty(i.prototype, "body", {
                    get: r.oneOfGetter(
                      (a = [
                        "openChan",
                        "openChanRes",
                        "closeChan",
                        "closeChanRes",
                        "containerState",
                        "portOpen",
                        "toast",
                        "redirect",
                        "alwaysOn",
                        "runMain",
                        "clear",
                        "eval",
                        "result",
                        "input",
                        "output",
                        "error",
                        "saneTerm",
                        "resizeTerm",
                        "state",
                        "ok",
                        "persist",
                        "persistMirror",
                        "write",
                        "remove",
                        "move",
                        "tryRemove",
                        "mkdir",
                        "stat",
                        "statRes",
                        "read",
                        "readdir",
                        "files",
                        "file",
                        "checkChanges",
                        "changedFiles",
                        "lintResults",
                        "runContainedTest",
                        "testResult",
                        "debuggerStart",
                        "debuggerStep",
                        "debuggerStatus",
                        "ensurePackages",
                        "ping",
                        "pong",
                        "hello",
                        "goodbye",
                        "hint",
                        "connect",
                        "send",
                        "recv",
                        "disconnect",
                        "fileAuthReq",
                        "fileAuthRes",
                        "mutliFileAuthRes",
                        "listObjects",
                        "listObjectsResp",
                        "ot",
                        "otstatus",
                        "otLinkFile",
                        "otNewCursor",
                        "otDeleteCursor",
                        "otFetchRequest",
                        "otFetchResponse",
                        "flush",
                        "debug",
                        "startVCR",
                        "readVCR",
                        "VCRLog",
                        "auth",
                        "execInfo",
                        "subscribeFile",
                        "fileEvent",
                        "roster",
                        "join",
                        "part",
                        "exec",
                        "packageSearch",
                        "packageSearchResp",
                        "packageInfo",
                        "packageInfoResp",
                        "packageAdd",
                        "packageRemove",
                        "packageInstall",
                        "packageListSpecfile",
                        "packageListSpecfileResp",
                        "packageCacheSave",
                        "chatMessage",
                        "chatTyping",
                        "chatScrollback",
                        "fsSnapshot",
                        "fsTakeLock",
                        "fsReleaseLock",
                        "hasCap",
                        "pid1Config",
                        "metrics",
                        "bootStatus",
                        "readMeta",
                        "writeMeta",
                        "appendMeta",
                        "audio",
                        "pprofRequest",
                        "pprofResponse",
                        "audio2",
                        "PTYConfig",
                      ])
                    ),
                    set: r.oneOfSetter(a),
                  }),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.channel &&
                        Object.hasOwnProperty.call(e, "channel") &&
                        t.uint32(8).int32(e.channel),
                      null != e.session &&
                        Object.hasOwnProperty.call(e, "session") &&
                        t.uint32(16).int32(e.session),
                      null != e.openChan &&
                        Object.hasOwnProperty.call(e, "openChan") &&
                        o.api.OpenChannel.encode(
                          e.openChan,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.openChanRes &&
                        Object.hasOwnProperty.call(e, "openChanRes") &&
                        o.api.OpenChannelRes.encode(
                          e.openChanRes,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.closeChan &&
                        Object.hasOwnProperty.call(e, "closeChan") &&
                        o.api.CloseChannel.encode(
                          e.closeChan,
                          t.uint32(42).fork()
                        ).ldelim(),
                      null != e.closeChanRes &&
                        Object.hasOwnProperty.call(e, "closeChanRes") &&
                        o.api.CloseChannelRes.encode(
                          e.closeChanRes,
                          t.uint32(50).fork()
                        ).ldelim(),
                      null != e.containerState &&
                        Object.hasOwnProperty.call(e, "containerState") &&
                        o.api.ContainerState.encode(
                          e.containerState,
                          t.uint32(74).fork()
                        ).ldelim(),
                      null != e.portOpen &&
                        Object.hasOwnProperty.call(e, "portOpen") &&
                        o.api.PortOpen.encode(
                          e.portOpen,
                          t.uint32(82).fork()
                        ).ldelim(),
                      null != e.toast &&
                        Object.hasOwnProperty.call(e, "toast") &&
                        o.api.Toast.encode(
                          e.toast,
                          t.uint32(90).fork()
                        ).ldelim(),
                      null != e.redirect &&
                        Object.hasOwnProperty.call(e, "redirect") &&
                        o.api.Redirect.encode(
                          e.redirect,
                          t.uint32(98).fork()
                        ).ldelim(),
                      null != e.alwaysOn &&
                        Object.hasOwnProperty.call(e, "alwaysOn") &&
                        o.api.AlwaysOn.encode(
                          e.alwaysOn,
                          t.uint32(106).fork()
                        ).ldelim(),
                      null != e.runMain &&
                        Object.hasOwnProperty.call(e, "runMain") &&
                        o.api.RunMain.encode(
                          e.runMain,
                          t.uint32(130).fork()
                        ).ldelim(),
                      null != e.clear &&
                        Object.hasOwnProperty.call(e, "clear") &&
                        o.api.Clear.encode(
                          e.clear,
                          t.uint32(138).fork()
                        ).ldelim(),
                      null != e.eval &&
                        Object.hasOwnProperty.call(e, "eval") &&
                        t.uint32(162).string(e.eval),
                      null != e.result &&
                        Object.hasOwnProperty.call(e, "result") &&
                        t.uint32(170).string(e.result),
                      null != e.input &&
                        Object.hasOwnProperty.call(e, "input") &&
                        t.uint32(178).string(e.input),
                      null != e.output &&
                        Object.hasOwnProperty.call(e, "output") &&
                        t.uint32(186).string(e.output),
                      null != e.error &&
                        Object.hasOwnProperty.call(e, "error") &&
                        t.uint32(194).string(e.error),
                      null != e.saneTerm &&
                        Object.hasOwnProperty.call(e, "saneTerm") &&
                        o.api.SaneTerm.encode(
                          e.saneTerm,
                          t.uint32(210).fork()
                        ).ldelim(),
                      null != e.resizeTerm &&
                        Object.hasOwnProperty.call(e, "resizeTerm") &&
                        o.api.ResizeTerm.encode(
                          e.resizeTerm,
                          t.uint32(218).fork()
                        ).ldelim(),
                      null != e.state &&
                        Object.hasOwnProperty.call(e, "state") &&
                        t.uint32(224).int32(e.state),
                      null != e.ok &&
                        Object.hasOwnProperty.call(e, "ok") &&
                        o.api.OK.encode(
                          e.ok,
                          t.uint32(242).fork()
                        ).ldelim(),
                      null != e.persist &&
                        Object.hasOwnProperty.call(e, "persist") &&
                        o.api.File.encode(
                          e.persist,
                          t.uint32(250).fork()
                        ).ldelim(),
                      null != e.write &&
                        Object.hasOwnProperty.call(e, "write") &&
                        o.api.File.encode(
                          e.write,
                          t.uint32(258).fork()
                        ).ldelim(),
                      null != e.remove &&
                        Object.hasOwnProperty.call(e, "remove") &&
                        o.api.File.encode(
                          e.remove,
                          t.uint32(266).fork()
                        ).ldelim(),
                      null != e.move &&
                        Object.hasOwnProperty.call(e, "move") &&
                        o.api.Move.encode(
                          e.move,
                          t.uint32(274).fork()
                        ).ldelim(),
                      null != e.read &&
                        Object.hasOwnProperty.call(e, "read") &&
                        o.api.File.encode(
                          e.read,
                          t.uint32(282).fork()
                        ).ldelim(),
                      null != e.tryRemove &&
                        Object.hasOwnProperty.call(e, "tryRemove") &&
                        o.api.File.encode(
                          e.tryRemove,
                          t.uint32(290).fork()
                        ).ldelim(),
                      null != e.readdir &&
                        Object.hasOwnProperty.call(e, "readdir") &&
                        o.api.File.encode(
                          e.readdir,
                          t.uint32(298).fork()
                        ).ldelim(),
                      null != e.files &&
                        Object.hasOwnProperty.call(e, "files") &&
                        o.api.Files.encode(
                          e.files,
                          t.uint32(306).fork()
                        ).ldelim(),
                      null != e.mkdir &&
                        Object.hasOwnProperty.call(e, "mkdir") &&
                        o.api.File.encode(
                          e.mkdir,
                          t.uint32(314).fork()
                        ).ldelim(),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(322).fork()
                        ).ldelim(),
                      null != e.persistMirror &&
                        Object.hasOwnProperty.call(e, "persistMirror") &&
                        o.api.File.encode(
                          e.persistMirror,
                          t.uint32(330).fork()
                        ).ldelim(),
                      null != e.checkChanges &&
                        Object.hasOwnProperty.call(e, "checkChanges") &&
                        o.api.CheckChanges.encode(
                          e.checkChanges,
                          t.uint32(338).fork()
                        ).ldelim(),
                      null != e.changedFiles &&
                        Object.hasOwnProperty.call(e, "changedFiles") &&
                        o.api.Files.encode(
                          e.changedFiles,
                          t.uint32(346).fork()
                        ).ldelim(),
                      null != e.lintResults &&
                        Object.hasOwnProperty.call(e, "lintResults") &&
                        o.api.LintResults.encode(
                          e.lintResults,
                          t.uint32(354).fork()
                        ).ldelim(),
                      null != e.runContainedTest &&
                        Object.hasOwnProperty.call(
                          e,
                          "runContainedTest"
                        ) &&
                        o.api.ContainedTest.encode(
                          e.runContainedTest,
                          t.uint32(562).fork()
                        ).ldelim(),
                      null != e.testResult &&
                        Object.hasOwnProperty.call(e, "testResult") &&
                        o.api.TestResult.encode(
                          e.testResult,
                          t.uint32(570).fork()
                        ).ldelim(),
                      null != e.debuggerStart &&
                        Object.hasOwnProperty.call(e, "debuggerStart") &&
                        t.uint32(722).string(e.debuggerStart),
                      null != e.debuggerStep &&
                        Object.hasOwnProperty.call(e, "debuggerStep") &&
                        o.api.RunMain.encode(
                          e.debuggerStep,
                          t.uint32(730).fork()
                        ).ldelim(),
                      null != e.debuggerStatus &&
                        Object.hasOwnProperty.call(e, "debuggerStatus") &&
                        o.api.DebugStatus.encode(
                          e.debuggerStatus,
                          t.uint32(738).fork()
                        ).ldelim(),
                      null != e.ensurePackages &&
                        Object.hasOwnProperty.call(e, "ensurePackages") &&
                        o.api.EnsurePackages.encode(
                          e.ensurePackages,
                          t.uint32(802).fork()
                        ).ldelim(),
                      null != e.ping &&
                        Object.hasOwnProperty.call(e, "ping") &&
                        o.api.Ping.encode(
                          e.ping,
                          t.uint32(962).fork()
                        ).ldelim(),
                      null != e.pong &&
                        Object.hasOwnProperty.call(e, "pong") &&
                        o.api.Pong.encode(
                          e.pong,
                          t.uint32(970).fork()
                        ).ldelim(),
                      null != e.hello &&
                        Object.hasOwnProperty.call(e, "hello") &&
                        o.api.Hello.encode(
                          e.hello,
                          t.uint32(978).fork()
                        ).ldelim(),
                      null != e.goodbye &&
                        Object.hasOwnProperty.call(e, "goodbye") &&
                        o.api.Goodbye.encode(
                          e.goodbye,
                          t.uint32(986).fork()
                        ).ldelim(),
                      null != e.hint &&
                        Object.hasOwnProperty.call(e, "hint") &&
                        o.api.Hint.encode(
                          e.hint,
                          t.uint32(1042).fork()
                        ).ldelim(),
                      null != e.connect &&
                        Object.hasOwnProperty.call(e, "connect") &&
                        o.api.Connect.encode(
                          e.connect,
                          t.uint32(1202).fork()
                        ).ldelim(),
                      null != e.send &&
                        Object.hasOwnProperty.call(e, "send") &&
                        o.api.Send.encode(
                          e.send,
                          t.uint32(1210).fork()
                        ).ldelim(),
                      null != e.recv &&
                        Object.hasOwnProperty.call(e, "recv") &&
                        o.api.Recv.encode(
                          e.recv,
                          t.uint32(1218).fork()
                        ).ldelim(),
                      null != e.disconnect &&
                        Object.hasOwnProperty.call(e, "disconnect") &&
                        o.api.Disconnect.encode(
                          e.disconnect,
                          t.uint32(1226).fork()
                        ).ldelim(),
                      null != e.fileAuthReq &&
                        Object.hasOwnProperty.call(e, "fileAuthReq") &&
                        o.api.FileAuthReq.encode(
                          e.fileAuthReq,
                          t.uint32(1602).fork()
                        ).ldelim(),
                      null != e.fileAuthRes &&
                        Object.hasOwnProperty.call(e, "fileAuthRes") &&
                        o.api.FileAuthRes.encode(
                          e.fileAuthRes,
                          t.uint32(1610).fork()
                        ).ldelim(),
                      null != e.mutliFileAuthRes &&
                        Object.hasOwnProperty.call(
                          e,
                          "mutliFileAuthRes"
                        ) &&
                        o.api.MultiFileAuthRes.encode(
                          e.mutliFileAuthRes,
                          t.uint32(1618).fork()
                        ).ldelim(),
                      null != e.listObjects &&
                        Object.hasOwnProperty.call(e, "listObjects") &&
                        o.api.ListObjects.encode(
                          e.listObjects,
                          t.uint32(1642).fork()
                        ).ldelim(),
                      null != e.listObjectsResp &&
                        Object.hasOwnProperty.call(
                          e,
                          "listObjectsResp"
                        ) &&
                        o.api.ListObjectsResp.encode(
                          e.listObjectsResp,
                          t.uint32(1650).fork()
                        ).ldelim(),
                      null != e.ot &&
                        Object.hasOwnProperty.call(e, "ot") &&
                        o.api.OTPacket.encode(
                          e.ot,
                          t.uint32(1762).fork()
                        ).ldelim(),
                      null != e.otstatus &&
                        Object.hasOwnProperty.call(e, "otstatus") &&
                        o.api.OTStatus.encode(
                          e.otstatus,
                          t.uint32(1770).fork()
                        ).ldelim(),
                      null != e.otLinkFile &&
                        Object.hasOwnProperty.call(e, "otLinkFile") &&
                        o.api.OTLinkFile.encode(
                          e.otLinkFile,
                          t.uint32(1778).fork()
                        ).ldelim(),
                      null != e.otNewCursor &&
                        Object.hasOwnProperty.call(e, "otNewCursor") &&
                        o.api.OTCursor.encode(
                          e.otNewCursor,
                          t.uint32(1786).fork()
                        ).ldelim(),
                      null != e.otDeleteCursor &&
                        Object.hasOwnProperty.call(e, "otDeleteCursor") &&
                        o.api.OTCursor.encode(
                          e.otDeleteCursor,
                          t.uint32(1794).fork()
                        ).ldelim(),
                      null != e.otFetchRequest &&
                        Object.hasOwnProperty.call(e, "otFetchRequest") &&
                        o.api.OTFetchRequest.encode(
                          e.otFetchRequest,
                          t.uint32(1802).fork()
                        ).ldelim(),
                      null != e.otFetchResponse &&
                        Object.hasOwnProperty.call(
                          e,
                          "otFetchResponse"
                        ) &&
                        o.api.OTFetchResponse.encode(
                          e.otFetchResponse,
                          t.uint32(1810).fork()
                        ).ldelim(),
                      null != e.debug &&
                        Object.hasOwnProperty.call(e, "debug") &&
                        o.api.Debug.encode(
                          e.debug,
                          t.uint32(1842).fork()
                        ).ldelim(),
                      null != e.startVCR &&
                        Object.hasOwnProperty.call(e, "startVCR") &&
                        o.api.StartVCR.encode(
                          e.startVCR,
                          t.uint32(1850).fork()
                        ).ldelim(),
                      null != e.readVCR &&
                        Object.hasOwnProperty.call(e, "readVCR") &&
                        o.api.ReadVCR.encode(
                          e.readVCR,
                          t.uint32(1858).fork()
                        ).ldelim(),
                      null != e.VCRLog &&
                        Object.hasOwnProperty.call(e, "VCRLog") &&
                        o.api.VCRLog.encode(
                          e.VCRLog,
                          t.uint32(1866).fork()
                        ).ldelim(),
                      null != e.auth &&
                        Object.hasOwnProperty.call(e, "auth") &&
                        o.api.Auth.encode(
                          e.auth,
                          t.uint32(1882).fork()
                        ).ldelim(),
                      null != e.execInfo &&
                        Object.hasOwnProperty.call(e, "execInfo") &&
                        o.api.ExecInfo.encode(
                          e.execInfo,
                          t.uint32(1922).fork()
                        ).ldelim(),
                      null != e.flush &&
                        Object.hasOwnProperty.call(e, "flush") &&
                        o.api.Flush.encode(
                          e.flush,
                          t.uint32(2010).fork()
                        ).ldelim(),
                      null != e.subscribeFile &&
                        Object.hasOwnProperty.call(e, "subscribeFile") &&
                        o.api.SubscribeFile.encode(
                          e.subscribeFile,
                          t.uint32(2050).fork()
                        ).ldelim(),
                      null != e.fileEvent &&
                        Object.hasOwnProperty.call(e, "fileEvent") &&
                        o.api.FileEvent.encode(
                          e.fileEvent,
                          t.uint32(2058).fork()
                        ).ldelim(),
                      null != e.roster &&
                        Object.hasOwnProperty.call(e, "roster") &&
                        o.api.Roster.encode(
                          e.roster,
                          t.uint32(2082).fork()
                        ).ldelim(),
                      null != e.join &&
                        Object.hasOwnProperty.call(e, "join") &&
                        o.api.User.encode(
                          e.join,
                          t.uint32(2090).fork()
                        ).ldelim(),
                      null != e.part &&
                        Object.hasOwnProperty.call(e, "part") &&
                        o.api.User.encode(
                          e.part,
                          t.uint32(2098).fork()
                        ).ldelim(),
                      null != e.exec &&
                        Object.hasOwnProperty.call(e, "exec") &&
                        o.api.Exec.encode(
                          e.exec,
                          t.uint32(2162).fork()
                        ).ldelim(),
                      null != e.packageSearch &&
                        Object.hasOwnProperty.call(e, "packageSearch") &&
                        o.api.PackageSearch.encode(
                          e.packageSearch,
                          t.uint32(2242).fork()
                        ).ldelim(),
                      null != e.packageSearchResp &&
                        Object.hasOwnProperty.call(
                          e,
                          "packageSearchResp"
                        ) &&
                        o.api.PackageSearchResp.encode(
                          e.packageSearchResp,
                          t.uint32(2250).fork()
                        ).ldelim(),
                      null != e.packageInfo &&
                        Object.hasOwnProperty.call(e, "packageInfo") &&
                        o.api.PackageInfo.encode(
                          e.packageInfo,
                          t.uint32(2258).fork()
                        ).ldelim(),
                      null != e.packageInfoResp &&
                        Object.hasOwnProperty.call(
                          e,
                          "packageInfoResp"
                        ) &&
                        o.api.PackageInfoResp.encode(
                          e.packageInfoResp,
                          t.uint32(2266).fork()
                        ).ldelim(),
                      null != e.packageAdd &&
                        Object.hasOwnProperty.call(e, "packageAdd") &&
                        o.api.PackageAdd.encode(
                          e.packageAdd,
                          t.uint32(2274).fork()
                        ).ldelim(),
                      null != e.packageRemove &&
                        Object.hasOwnProperty.call(e, "packageRemove") &&
                        o.api.PackageRemove.encode(
                          e.packageRemove,
                          t.uint32(2282).fork()
                        ).ldelim(),
                      null != e.packageInstall &&
                        Object.hasOwnProperty.call(e, "packageInstall") &&
                        o.api.PackageInstall.encode(
                          e.packageInstall,
                          t.uint32(2290).fork()
                        ).ldelim(),
                      null != e.packageListSpecfile &&
                        Object.hasOwnProperty.call(
                          e,
                          "packageListSpecfile"
                        ) &&
                        o.api.PackageListSpecfile.encode(
                          e.packageListSpecfile,
                          t.uint32(2298).fork()
                        ).ldelim(),
                      null != e.packageListSpecfileResp &&
                        Object.hasOwnProperty.call(
                          e,
                          "packageListSpecfileResp"
                        ) &&
                        o.api.PackageListSpecfileResp.encode(
                          e.packageListSpecfileResp,
                          t.uint32(2306).fork()
                        ).ldelim(),
                      null != e.packageCacheSave &&
                        Object.hasOwnProperty.call(
                          e,
                          "packageCacheSave"
                        ) &&
                        o.api.PackageCacheSave.encode(
                          e.packageCacheSave,
                          t.uint32(2314).fork()
                        ).ldelim(),
                      null != e.chatMessage &&
                        Object.hasOwnProperty.call(e, "chatMessage") &&
                        o.api.ChatMessage.encode(
                          e.chatMessage,
                          t.uint32(2482).fork()
                        ).ldelim(),
                      null != e.chatTyping &&
                        Object.hasOwnProperty.call(e, "chatTyping") &&
                        o.api.ChatTyping.encode(
                          e.chatTyping,
                          t.uint32(2490).fork()
                        ).ldelim(),
                      null != e.chatScrollback &&
                        Object.hasOwnProperty.call(e, "chatScrollback") &&
                        o.api.ChatScrollback.encode(
                          e.chatScrollback,
                          t.uint32(2498).fork()
                        ).ldelim(),
                      null != e.fsSnapshot &&
                        Object.hasOwnProperty.call(e, "fsSnapshot") &&
                        o.api.FSSnapshot.encode(
                          e.fsSnapshot,
                          t.uint32(2642).fork()
                        ).ldelim(),
                      null != e.fsTakeLock &&
                        Object.hasOwnProperty.call(e, "fsTakeLock") &&
                        o.api.FSLock.encode(
                          e.fsTakeLock,
                          t.uint32(2650).fork()
                        ).ldelim(),
                      null != e.fsReleaseLock &&
                        Object.hasOwnProperty.call(e, "fsReleaseLock") &&
                        o.api.FSLock.encode(
                          e.fsReleaseLock,
                          t.uint32(2658).fork()
                        ).ldelim(),
                      null != e.hasCap &&
                        Object.hasOwnProperty.call(e, "hasCap") &&
                        t.uint32(2680).bool(e.hasCap),
                      null != e.pid1Config &&
                        Object.hasOwnProperty.call(e, "pid1Config") &&
                        o.api.Pid1Config.encode(
                          e.pid1Config,
                          t.uint32(2722).fork()
                        ).ldelim(),
                      null != e.metrics &&
                        Object.hasOwnProperty.call(e, "metrics") &&
                        o.api.Metrics.encode(
                          e.metrics,
                          t.uint32(2802).fork()
                        ).ldelim(),
                      null != e.bootStatus &&
                        Object.hasOwnProperty.call(e, "bootStatus") &&
                        o.api.BootStatus.encode(
                          e.bootStatus,
                          t.uint32(2810).fork()
                        ).ldelim(),
                      null != e.readMeta &&
                        Object.hasOwnProperty.call(e, "readMeta") &&
                        o.api.ReadMeta.encode(
                          e.readMeta,
                          t.uint32(2882).fork()
                        ).ldelim(),
                      null != e.writeMeta &&
                        Object.hasOwnProperty.call(e, "writeMeta") &&
                        o.api.WriteMeta.encode(
                          e.writeMeta,
                          t.uint32(2890).fork()
                        ).ldelim(),
                      null != e.appendMeta &&
                        Object.hasOwnProperty.call(e, "appendMeta") &&
                        o.api.AppendMeta.encode(
                          e.appendMeta,
                          t.uint32(2898).fork()
                        ).ldelim(),
                      null != e.audio &&
                        Object.hasOwnProperty.call(e, "audio") &&
                        o.api.Audio.encode(
                          e.audio,
                          t.uint32(2906).fork()
                        ).ldelim(),
                      null != e.pprofRequest &&
                        Object.hasOwnProperty.call(e, "pprofRequest") &&
                        o.api.PprofRequest.encode(
                          e.pprofRequest,
                          t.uint32(2914).fork()
                        ).ldelim(),
                      null != e.pprofResponse &&
                        Object.hasOwnProperty.call(e, "pprofResponse") &&
                        o.api.PprofResponse.encode(
                          e.pprofResponse,
                          t.uint32(2922).fork()
                        ).ldelim(),
                      null != e.audio2 &&
                        Object.hasOwnProperty.call(e, "audio2") &&
                        o.api.Audio2.encode(
                          e.audio2,
                          t.uint32(2930).fork()
                        ).ldelim(),
                      null != e.PTYConfig &&
                        Object.hasOwnProperty.call(e, "PTYConfig") &&
                        o.api.PTYConfig.encode(
                          e.PTYConfig,
                          t.uint32(2938).fork()
                        ).ldelim(),
                      null != e.stat &&
                        Object.hasOwnProperty.call(e, "stat") &&
                        o.api.File.encode(
                          e.stat,
                          t.uint32(2946).fork()
                        ).ldelim(),
                      null != e.statRes &&
                        Object.hasOwnProperty.call(e, "statRes") &&
                        o.api.StatResult.encode(
                          e.statRes,
                          t.uint32(2954).fork()
                        ).ldelim(),
                      null != e.ref &&
                        Object.hasOwnProperty.call(e, "ref") &&
                        t.uint32(8002).string(e.ref),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Command();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.channel = e.int32();
                          break;
                        case 2:
                          i.session = e.int32();
                          break;
                        case 3:
                          i.openChan = o.api.OpenChannel.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 4:
                          i.openChanRes = o.api.OpenChannelRes.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 5:
                          i.closeChan = o.api.CloseChannel.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 6:
                          i.closeChanRes = o.api.CloseChannelRes.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 9:
                          i.containerState = o.api.ContainerState.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 10:
                          i.portOpen = o.api.PortOpen.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 11:
                          i.toast = o.api.Toast.decode(e, e.uint32());
                          break;
                        case 12:
                          i.redirect = o.api.Redirect.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 13:
                          i.alwaysOn = o.api.AlwaysOn.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 16:
                          i.runMain = o.api.RunMain.decode(e, e.uint32());
                          break;
                        case 17:
                          i.clear = o.api.Clear.decode(e, e.uint32());
                          break;
                        case 20:
                          i.eval = e.string();
                          break;
                        case 21:
                          i.result = e.string();
                          break;
                        case 22:
                          i.input = e.string();
                          break;
                        case 23:
                          i.output = e.string();
                          break;
                        case 24:
                          i.error = e.string();
                          break;
                        case 26:
                          i.saneTerm = o.api.SaneTerm.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 27:
                          i.resizeTerm = o.api.ResizeTerm.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 28:
                          i.state = e.int32();
                          break;
                        case 30:
                          i.ok = o.api.OK.decode(e, e.uint32());
                          break;
                        case 31:
                          i.persist = o.api.File.decode(e, e.uint32());
                          break;
                        case 41:
                          i.persistMirror = o.api.File.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 32:
                          i.write = o.api.File.decode(e, e.uint32());
                          break;
                        case 33:
                          i.remove = o.api.File.decode(e, e.uint32());
                          break;
                        case 34:
                          i.move = o.api.Move.decode(e, e.uint32());
                          break;
                        case 36:
                          i.tryRemove = o.api.File.decode(e, e.uint32());
                          break;
                        case 39:
                          i.mkdir = o.api.File.decode(e, e.uint32());
                          break;
                        case 368:
                          i.stat = o.api.File.decode(e, e.uint32());
                          break;
                        case 369:
                          i.statRes = o.api.StatResult.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 35:
                          i.read = o.api.File.decode(e, e.uint32());
                          break;
                        case 37:
                          i.readdir = o.api.File.decode(e, e.uint32());
                          break;
                        case 38:
                          i.files = o.api.Files.decode(e, e.uint32());
                          break;
                        case 40:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        case 42:
                          i.checkChanges = o.api.CheckChanges.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 43:
                          i.changedFiles = o.api.Files.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 44:
                          i.lintResults = o.api.LintResults.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 70:
                          i.runContainedTest = o.api.ContainedTest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 71:
                          i.testResult = o.api.TestResult.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 90:
                          i.debuggerStart = e.string();
                          break;
                        case 91:
                          i.debuggerStep = o.api.RunMain.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 92:
                          i.debuggerStatus = o.api.DebugStatus.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 100:
                          i.ensurePackages = o.api.EnsurePackages.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 120:
                          i.ping = o.api.Ping.decode(e, e.uint32());
                          break;
                        case 121:
                          i.pong = o.api.Pong.decode(e, e.uint32());
                          break;
                        case 122:
                          i.hello = o.api.Hello.decode(e, e.uint32());
                          break;
                        case 123:
                          i.goodbye = o.api.Goodbye.decode(e, e.uint32());
                          break;
                        case 130:
                          i.hint = o.api.Hint.decode(e, e.uint32());
                          break;
                        case 150:
                          i.connect = o.api.Connect.decode(e, e.uint32());
                          break;
                        case 151:
                          i.send = o.api.Send.decode(e, e.uint32());
                          break;
                        case 152:
                          i.recv = o.api.Recv.decode(e, e.uint32());
                          break;
                        case 153:
                          i.disconnect = o.api.Disconnect.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 200:
                          i.fileAuthReq = o.api.FileAuthReq.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 201:
                          i.fileAuthRes = o.api.FileAuthRes.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 202:
                          i.mutliFileAuthRes = o.api.MultiFileAuthRes.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 205:
                          i.listObjects = o.api.ListObjects.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 206:
                          i.listObjectsResp = o.api.ListObjectsResp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 220:
                          i.ot = o.api.OTPacket.decode(e, e.uint32());
                          break;
                        case 221:
                          i.otstatus = o.api.OTStatus.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 222:
                          i.otLinkFile = o.api.OTLinkFile.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 223:
                          i.otNewCursor = o.api.OTCursor.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 224:
                          i.otDeleteCursor = o.api.OTCursor.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 225:
                          i.otFetchRequest = o.api.OTFetchRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 226:
                          i.otFetchResponse = o.api.OTFetchResponse.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 251:
                          i.flush = o.api.Flush.decode(e, e.uint32());
                          break;
                        case 230:
                          i.debug = o.api.Debug.decode(e, e.uint32());
                          break;
                        case 231:
                          i.startVCR = o.api.StartVCR.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 232:
                          i.readVCR = o.api.ReadVCR.decode(e, e.uint32());
                          break;
                        case 233:
                          i.VCRLog = o.api.VCRLog.decode(e, e.uint32());
                          break;
                        case 235:
                          i.auth = o.api.Auth.decode(e, e.uint32());
                          break;
                        case 240:
                          i.execInfo = o.api.ExecInfo.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 256:
                          i.subscribeFile = o.api.SubscribeFile.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 257:
                          i.fileEvent = o.api.FileEvent.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 260:
                          i.roster = o.api.Roster.decode(e, e.uint32());
                          break;
                        case 261:
                          i.join = o.api.User.decode(e, e.uint32());
                          break;
                        case 262:
                          i.part = o.api.User.decode(e, e.uint32());
                          break;
                        case 270:
                          i.exec = o.api.Exec.decode(e, e.uint32());
                          break;
                        case 280:
                          i.packageSearch = o.api.PackageSearch.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 281:
                          i.packageSearchResp = o.api.PackageSearchResp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 282:
                          i.packageInfo = o.api.PackageInfo.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 283:
                          i.packageInfoResp = o.api.PackageInfoResp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 284:
                          i.packageAdd = o.api.PackageAdd.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 285:
                          i.packageRemove = o.api.PackageRemove.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 286:
                          i.packageInstall = o.api.PackageInstall.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 287:
                          i.packageListSpecfile = o.api.PackageListSpecfile.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 288:
                          i.packageListSpecfileResp = o.api.PackageListSpecfileResp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 289:
                          i.packageCacheSave = o.api.PackageCacheSave.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 310:
                          i.chatMessage = o.api.ChatMessage.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 311:
                          i.chatTyping = o.api.ChatTyping.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 312:
                          i.chatScrollback = o.api.ChatScrollback.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 330:
                          i.fsSnapshot = o.api.FSSnapshot.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 331:
                          i.fsTakeLock = o.api.FSLock.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 332:
                          i.fsReleaseLock = o.api.FSLock.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 335:
                          i.hasCap = e.bool();
                          break;
                        case 340:
                          i.pid1Config = o.api.Pid1Config.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 350:
                          i.metrics = o.api.Metrics.decode(e, e.uint32());
                          break;
                        case 351:
                          i.bootStatus = o.api.BootStatus.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 360:
                          i.readMeta = o.api.ReadMeta.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 361:
                          i.writeMeta = o.api.WriteMeta.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 362:
                          i.appendMeta = o.api.AppendMeta.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 363:
                          i.audio = o.api.Audio.decode(e, e.uint32());
                          break;
                        case 364:
                          i.pprofRequest = o.api.PprofRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 365:
                          i.pprofResponse = o.api.PprofResponse.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 366:
                          i.audio2 = o.api.Audio2.decode(e, e.uint32());
                          break;
                        case 367:
                          i.PTYConfig = o.api.PTYConfig.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 1e3:
                          i.ref = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    const t = {};
                    if (
                      null != e.channel &&
                      e.hasOwnProperty("channel") &&
                      !r.isInteger(e.channel)
                    )
                      return "channel: integer expected";
                    if (
                      null != e.session &&
                      e.hasOwnProperty("session") &&
                      !r.isInteger(e.session)
                    )
                      return "session: integer expected";
                    if (
                      null != e.openChan &&
                      e.hasOwnProperty("openChan") &&
                      ((t.body = 1),
                      (n = o.api.OpenChannel.verify(e.openChan)))
                    )
                      return "openChan." + n;
                    if (
                      null != e.openChanRes &&
                      e.hasOwnProperty("openChanRes")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OpenChannelRes.verify(e.openChanRes)))
                      )
                        return "openChanRes." + n;
                    }
                    if (
                      null != e.closeChan &&
                      e.hasOwnProperty("closeChan")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.CloseChannel.verify(e.closeChan)))
                      )
                        return "closeChan." + n;
                    }
                    if (
                      null != e.closeChanRes &&
                      e.hasOwnProperty("closeChanRes")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.CloseChannelRes.verify(
                          e.closeChanRes
                        )))
                      )
                        return "closeChanRes." + n;
                    }
                    if (
                      null != e.containerState &&
                      e.hasOwnProperty("containerState")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ContainerState.verify(
                          e.containerState
                        )))
                      )
                        return "containerState." + n;
                    }
                    if (
                      null != e.portOpen &&
                      e.hasOwnProperty("portOpen")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PortOpen.verify(e.portOpen)))
                      )
                        return "portOpen." + n;
                    }
                    if (null != e.toast && e.hasOwnProperty("toast")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Toast.verify(e.toast)))
                      )
                        return "toast." + n;
                    }
                    if (
                      null != e.redirect &&
                      e.hasOwnProperty("redirect")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Redirect.verify(e.redirect)))
                      )
                        return "redirect." + n;
                    }
                    if (
                      null != e.alwaysOn &&
                      e.hasOwnProperty("alwaysOn")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.AlwaysOn.verify(e.alwaysOn)))
                      )
                        return "alwaysOn." + n;
                    }
                    if (
                      null != e.runMain &&
                      e.hasOwnProperty("runMain")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.RunMain.verify(e.runMain)))
                      )
                        return "runMain." + n;
                    }
                    if (null != e.clear && e.hasOwnProperty("clear")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Clear.verify(e.clear)))
                      )
                        return "clear." + n;
                    }
                    if (null != e.eval && e.hasOwnProperty("eval")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.eval)))
                        return "eval: string expected";
                    }
                    if (null != e.result && e.hasOwnProperty("result")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.result)))
                        return "result: string expected";
                    }
                    if (null != e.input && e.hasOwnProperty("input")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.input)))
                        return "input: string expected";
                    }
                    if (null != e.output && e.hasOwnProperty("output")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.output)))
                        return "output: string expected";
                    }
                    if (null != e.error && e.hasOwnProperty("error")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.error)))
                        return "error: string expected";
                    }
                    if (
                      null != e.saneTerm &&
                      e.hasOwnProperty("saneTerm")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.SaneTerm.verify(e.saneTerm)))
                      )
                        return "saneTerm." + n;
                    }
                    if (
                      null != e.resizeTerm &&
                      e.hasOwnProperty("resizeTerm")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ResizeTerm.verify(e.resizeTerm)))
                      )
                        return "resizeTerm." + n;
                    }
                    if (null != e.state && e.hasOwnProperty("state")) {
                      if (1 === t.body) return "body: multiple values";
                      switch (((t.body = 1), e.state)) {
                        default:
                          return "state: enum value expected";
                        case 0:
                        case 1:
                      }
                    }
                    if (null != e.ok && e.hasOwnProperty("ok")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.OK.verify(e.ok))))
                        return "ok." + n;
                    }
                    if (
                      null != e.persist &&
                      e.hasOwnProperty("persist")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.File.verify(e.persist)))
                      )
                        return "persist." + n;
                    }
                    if (
                      null != e.persistMirror &&
                      e.hasOwnProperty("persistMirror")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.File.verify(e.persistMirror)))
                      )
                        return "persistMirror." + n;
                    }
                    if (null != e.write && e.hasOwnProperty("write")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.File.verify(e.write)))
                      )
                        return "write." + n;
                    }
                    if (null != e.remove && e.hasOwnProperty("remove")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.File.verify(e.remove)))
                      )
                        return "remove." + n;
                    }
                    if (null != e.move && e.hasOwnProperty("move")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Move.verify(e.move))))
                        return "move." + n;
                    }
                    if (
                      null != e.tryRemove &&
                      e.hasOwnProperty("tryRemove")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.File.verify(e.tryRemove)))
                      )
                        return "tryRemove." + n;
                    }
                    if (null != e.mkdir && e.hasOwnProperty("mkdir")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.File.verify(e.mkdir)))
                      )
                        return "mkdir." + n;
                    }
                    if (null != e.stat && e.hasOwnProperty("stat")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.File.verify(e.stat))))
                        return "stat." + n;
                    }
                    if (
                      null != e.statRes &&
                      e.hasOwnProperty("statRes")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.StatResult.verify(e.statRes)))
                      )
                        return "statRes." + n;
                    }
                    if (null != e.read && e.hasOwnProperty("read")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.File.verify(e.read))))
                        return "read." + n;
                    }
                    if (
                      null != e.readdir &&
                      e.hasOwnProperty("readdir")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.File.verify(e.readdir)))
                      )
                        return "readdir." + n;
                    }
                    if (null != e.files && e.hasOwnProperty("files")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Files.verify(e.files)))
                      )
                        return "files." + n;
                    }
                    if (null != e.file && e.hasOwnProperty("file")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.File.verify(e.file))))
                        return "file." + n;
                    }
                    if (
                      null != e.checkChanges &&
                      e.hasOwnProperty("checkChanges")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.CheckChanges.verify(e.checkChanges)))
                      )
                        return "checkChanges." + n;
                    }
                    if (
                      null != e.changedFiles &&
                      e.hasOwnProperty("changedFiles")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Files.verify(e.changedFiles)))
                      )
                        return "changedFiles." + n;
                    }
                    if (
                      null != e.lintResults &&
                      e.hasOwnProperty("lintResults")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.LintResults.verify(e.lintResults)))
                      )
                        return "lintResults." + n;
                    }
                    if (
                      null != e.runContainedTest &&
                      e.hasOwnProperty("runContainedTest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ContainedTest.verify(
                          e.runContainedTest
                        )))
                      )
                        return "runContainedTest." + n;
                    }
                    if (
                      null != e.testResult &&
                      e.hasOwnProperty("testResult")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.TestResult.verify(e.testResult)))
                      )
                        return "testResult." + n;
                    }
                    if (
                      null != e.debuggerStart &&
                      e.hasOwnProperty("debuggerStart")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), !r.isString(e.debuggerStart)))
                        return "debuggerStart: string expected";
                    }
                    if (
                      null != e.debuggerStep &&
                      e.hasOwnProperty("debuggerStep")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.RunMain.verify(e.debuggerStep)))
                      )
                        return "debuggerStep." + n;
                    }
                    if (
                      null != e.debuggerStatus &&
                      e.hasOwnProperty("debuggerStatus")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.DebugStatus.verify(e.debuggerStatus)))
                      )
                        return "debuggerStatus." + n;
                    }
                    if (
                      null != e.ensurePackages &&
                      e.hasOwnProperty("ensurePackages")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.EnsurePackages.verify(
                          e.ensurePackages
                        )))
                      )
                        return "ensurePackages." + n;
                    }
                    if (null != e.ping && e.hasOwnProperty("ping")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Ping.verify(e.ping))))
                        return "ping." + n;
                    }
                    if (null != e.pong && e.hasOwnProperty("pong")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Pong.verify(e.pong))))
                        return "pong." + n;
                    }
                    if (null != e.hello && e.hasOwnProperty("hello")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Hello.verify(e.hello)))
                      )
                        return "hello." + n;
                    }
                    if (
                      null != e.goodbye &&
                      e.hasOwnProperty("goodbye")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Goodbye.verify(e.goodbye)))
                      )
                        return "goodbye." + n;
                    }
                    if (null != e.hint && e.hasOwnProperty("hint")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Hint.verify(e.hint))))
                        return "hint." + n;
                    }
                    if (
                      null != e.connect &&
                      e.hasOwnProperty("connect")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Connect.verify(e.connect)))
                      )
                        return "connect." + n;
                    }
                    if (null != e.send && e.hasOwnProperty("send")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Send.verify(e.send))))
                        return "send." + n;
                    }
                    if (null != e.recv && e.hasOwnProperty("recv")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Recv.verify(e.recv))))
                        return "recv." + n;
                    }
                    if (
                      null != e.disconnect &&
                      e.hasOwnProperty("disconnect")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Disconnect.verify(e.disconnect)))
                      )
                        return "disconnect." + n;
                    }
                    if (
                      null != e.fileAuthReq &&
                      e.hasOwnProperty("fileAuthReq")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FileAuthReq.verify(e.fileAuthReq)))
                      )
                        return "fileAuthReq." + n;
                    }
                    if (
                      null != e.fileAuthRes &&
                      e.hasOwnProperty("fileAuthRes")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FileAuthRes.verify(e.fileAuthRes)))
                      )
                        return "fileAuthRes." + n;
                    }
                    if (
                      null != e.mutliFileAuthRes &&
                      e.hasOwnProperty("mutliFileAuthRes")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.MultiFileAuthRes.verify(
                          e.mutliFileAuthRes
                        )))
                      )
                        return "mutliFileAuthRes." + n;
                    }
                    if (
                      null != e.listObjects &&
                      e.hasOwnProperty("listObjects")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ListObjects.verify(e.listObjects)))
                      )
                        return "listObjects." + n;
                    }
                    if (
                      null != e.listObjectsResp &&
                      e.hasOwnProperty("listObjectsResp")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ListObjectsResp.verify(
                          e.listObjectsResp
                        )))
                      )
                        return "listObjectsResp." + n;
                    }
                    if (null != e.ot && e.hasOwnProperty("ot")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.OTPacket.verify(e.ot)))
                      )
                        return "ot." + n;
                    }
                    if (
                      null != e.otstatus &&
                      e.hasOwnProperty("otstatus")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTStatus.verify(e.otstatus)))
                      )
                        return "otstatus." + n;
                    }
                    if (
                      null != e.otLinkFile &&
                      e.hasOwnProperty("otLinkFile")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTLinkFile.verify(e.otLinkFile)))
                      )
                        return "otLinkFile." + n;
                    }
                    if (
                      null != e.otNewCursor &&
                      e.hasOwnProperty("otNewCursor")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTCursor.verify(e.otNewCursor)))
                      )
                        return "otNewCursor." + n;
                    }
                    if (
                      null != e.otDeleteCursor &&
                      e.hasOwnProperty("otDeleteCursor")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTCursor.verify(e.otDeleteCursor)))
                      )
                        return "otDeleteCursor." + n;
                    }
                    if (
                      null != e.otFetchRequest &&
                      e.hasOwnProperty("otFetchRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTFetchRequest.verify(
                          e.otFetchRequest
                        )))
                      )
                        return "otFetchRequest." + n;
                    }
                    if (
                      null != e.otFetchResponse &&
                      e.hasOwnProperty("otFetchResponse")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.OTFetchResponse.verify(
                          e.otFetchResponse
                        )))
                      )
                        return "otFetchResponse." + n;
                    }
                    if (null != e.flush && e.hasOwnProperty("flush")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Flush.verify(e.flush)))
                      )
                        return "flush." + n;
                    }
                    if (null != e.debug && e.hasOwnProperty("debug")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Debug.verify(e.debug)))
                      )
                        return "debug." + n;
                    }
                    if (
                      null != e.startVCR &&
                      e.hasOwnProperty("startVCR")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.StartVCR.verify(e.startVCR)))
                      )
                        return "startVCR." + n;
                    }
                    if (
                      null != e.readVCR &&
                      e.hasOwnProperty("readVCR")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ReadVCR.verify(e.readVCR)))
                      )
                        return "readVCR." + n;
                    }
                    if (null != e.VCRLog && e.hasOwnProperty("VCRLog")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.VCRLog.verify(e.VCRLog)))
                      )
                        return "VCRLog." + n;
                    }
                    if (null != e.auth && e.hasOwnProperty("auth")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Auth.verify(e.auth))))
                        return "auth." + n;
                    }
                    if (
                      null != e.execInfo &&
                      e.hasOwnProperty("execInfo")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ExecInfo.verify(e.execInfo)))
                      )
                        return "execInfo." + n;
                    }
                    if (
                      null != e.subscribeFile &&
                      e.hasOwnProperty("subscribeFile")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.SubscribeFile.verify(e.subscribeFile)))
                      )
                        return "subscribeFile." + n;
                    }
                    if (
                      null != e.fileEvent &&
                      e.hasOwnProperty("fileEvent")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FileEvent.verify(e.fileEvent)))
                      )
                        return "fileEvent." + n;
                    }
                    if (null != e.roster && e.hasOwnProperty("roster")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Roster.verify(e.roster)))
                      )
                        return "roster." + n;
                    }
                    if (null != e.join && e.hasOwnProperty("join")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.User.verify(e.join))))
                        return "join." + n;
                    }
                    if (null != e.part && e.hasOwnProperty("part")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.User.verify(e.part))))
                        return "part." + n;
                    }
                    if (null != e.exec && e.hasOwnProperty("exec")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), (n = o.api.Exec.verify(e.exec))))
                        return "exec." + n;
                    }
                    if (
                      null != e.packageSearch &&
                      e.hasOwnProperty("packageSearch")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageSearch.verify(e.packageSearch)))
                      )
                        return "packageSearch." + n;
                    }
                    if (
                      null != e.packageSearchResp &&
                      e.hasOwnProperty("packageSearchResp")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageSearchResp.verify(
                          e.packageSearchResp
                        )))
                      )
                        return "packageSearchResp." + n;
                    }
                    if (
                      null != e.packageInfo &&
                      e.hasOwnProperty("packageInfo")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageInfo.verify(e.packageInfo)))
                      )
                        return "packageInfo." + n;
                    }
                    if (
                      null != e.packageInfoResp &&
                      e.hasOwnProperty("packageInfoResp")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageInfoResp.verify(
                          e.packageInfoResp
                        )))
                      )
                        return "packageInfoResp." + n;
                    }
                    if (
                      null != e.packageAdd &&
                      e.hasOwnProperty("packageAdd")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageAdd.verify(e.packageAdd)))
                      )
                        return "packageAdd." + n;
                    }
                    if (
                      null != e.packageRemove &&
                      e.hasOwnProperty("packageRemove")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageRemove.verify(e.packageRemove)))
                      )
                        return "packageRemove." + n;
                    }
                    if (
                      null != e.packageInstall &&
                      e.hasOwnProperty("packageInstall")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageInstall.verify(
                          e.packageInstall
                        )))
                      )
                        return "packageInstall." + n;
                    }
                    if (
                      null != e.packageListSpecfile &&
                      e.hasOwnProperty("packageListSpecfile")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageListSpecfile.verify(
                          e.packageListSpecfile
                        )))
                      )
                        return "packageListSpecfile." + n;
                    }
                    if (
                      null != e.packageListSpecfileResp &&
                      e.hasOwnProperty("packageListSpecfileResp")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageListSpecfileResp.verify(
                          e.packageListSpecfileResp
                        )))
                      )
                        return "packageListSpecfileResp." + n;
                    }
                    if (
                      null != e.packageCacheSave &&
                      e.hasOwnProperty("packageCacheSave")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PackageCacheSave.verify(
                          e.packageCacheSave
                        )))
                      )
                        return "packageCacheSave." + n;
                    }
                    if (
                      null != e.chatMessage &&
                      e.hasOwnProperty("chatMessage")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ChatMessage.verify(e.chatMessage)))
                      )
                        return "chatMessage." + n;
                    }
                    if (
                      null != e.chatTyping &&
                      e.hasOwnProperty("chatTyping")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ChatTyping.verify(e.chatTyping)))
                      )
                        return "chatTyping." + n;
                    }
                    if (
                      null != e.chatScrollback &&
                      e.hasOwnProperty("chatScrollback")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ChatScrollback.verify(
                          e.chatScrollback
                        )))
                      )
                        return "chatScrollback." + n;
                    }
                    if (
                      null != e.fsSnapshot &&
                      e.hasOwnProperty("fsSnapshot")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FSSnapshot.verify(e.fsSnapshot)))
                      )
                        return "fsSnapshot." + n;
                    }
                    if (
                      null != e.fsTakeLock &&
                      e.hasOwnProperty("fsTakeLock")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FSLock.verify(e.fsTakeLock)))
                      )
                        return "fsTakeLock." + n;
                    }
                    if (
                      null != e.fsReleaseLock &&
                      e.hasOwnProperty("fsReleaseLock")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.FSLock.verify(e.fsReleaseLock)))
                      )
                        return "fsReleaseLock." + n;
                    }
                    if (null != e.hasCap && e.hasOwnProperty("hasCap")) {
                      if (1 === t.body) return "body: multiple values";
                      if (((t.body = 1), "boolean" !== typeof e.hasCap))
                        return "hasCap: boolean expected";
                    }
                    if (
                      null != e.pid1Config &&
                      e.hasOwnProperty("pid1Config")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Pid1Config.verify(e.pid1Config)))
                      )
                        return "pid1Config." + n;
                    }
                    if (
                      null != e.metrics &&
                      e.hasOwnProperty("metrics")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Metrics.verify(e.metrics)))
                      )
                        return "metrics." + n;
                    }
                    if (
                      null != e.bootStatus &&
                      e.hasOwnProperty("bootStatus")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.BootStatus.verify(e.bootStatus)))
                      )
                        return "bootStatus." + n;
                    }
                    if (
                      null != e.readMeta &&
                      e.hasOwnProperty("readMeta")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.ReadMeta.verify(e.readMeta)))
                      )
                        return "readMeta." + n;
                    }
                    if (
                      null != e.writeMeta &&
                      e.hasOwnProperty("writeMeta")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.WriteMeta.verify(e.writeMeta)))
                      )
                        return "writeMeta." + n;
                    }
                    if (
                      null != e.appendMeta &&
                      e.hasOwnProperty("appendMeta")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.AppendMeta.verify(e.appendMeta)))
                      )
                        return "appendMeta." + n;
                    }
                    if (null != e.audio && e.hasOwnProperty("audio")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1), (n = o.api.Audio.verify(e.audio)))
                      )
                        return "audio." + n;
                    }
                    if (
                      null != e.pprofRequest &&
                      e.hasOwnProperty("pprofRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofRequest.verify(e.pprofRequest)))
                      )
                        return "pprofRequest." + n;
                    }
                    if (
                      null != e.pprofResponse &&
                      e.hasOwnProperty("pprofResponse")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofResponse.verify(e.pprofResponse)))
                      )
                        return "pprofResponse." + n;
                    }
                    if (null != e.audio2 && e.hasOwnProperty("audio2")) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.Audio2.verify(e.audio2)))
                      )
                        return "audio2." + n;
                    }
                    if (
                      null != e.PTYConfig &&
                      e.hasOwnProperty("PTYConfig")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      var n;
                      if (
                        ((t.body = 1),
                        (n = o.api.PTYConfig.verify(e.PTYConfig)))
                      )
                        return "PTYConfig." + n;
                    }
                    return null != e.ref &&
                      e.hasOwnProperty("ref") &&
                      !r.isString(e.ref)
                      ? "ref: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Command) return e;
                    const t = new o.api.Command();
                    if (
                      (null != e.channel && (t.channel = 0 | e.channel),
                      null != e.session && (t.session = 0 | e.session),
                      null != e.openChan)
                    ) {
                      if ("object" !== typeof e.openChan)
                        throw TypeError(
                          ".api.Command.openChan: object expected"
                        );
                      t.openChan = o.api.OpenChannel.fromObject(
                        e.openChan
                      );
                    }
                    if (null != e.openChanRes) {
                      if ("object" !== typeof e.openChanRes)
                        throw TypeError(
                          ".api.Command.openChanRes: object expected"
                        );
                      t.openChanRes = o.api.OpenChannelRes.fromObject(
                        e.openChanRes
                      );
                    }
                    if (null != e.closeChan) {
                      if ("object" !== typeof e.closeChan)
                        throw TypeError(
                          ".api.Command.closeChan: object expected"
                        );
                      t.closeChan = o.api.CloseChannel.fromObject(
                        e.closeChan
                      );
                    }
                    if (null != e.closeChanRes) {
                      if ("object" !== typeof e.closeChanRes)
                        throw TypeError(
                          ".api.Command.closeChanRes: object expected"
                        );
                      t.closeChanRes = o.api.CloseChannelRes.fromObject(
                        e.closeChanRes
                      );
                    }
                    if (null != e.containerState) {
                      if ("object" !== typeof e.containerState)
                        throw TypeError(
                          ".api.Command.containerState: object expected"
                        );
                      t.containerState = o.api.ContainerState.fromObject(
                        e.containerState
                      );
                    }
                    if (null != e.portOpen) {
                      if ("object" !== typeof e.portOpen)
                        throw TypeError(
                          ".api.Command.portOpen: object expected"
                        );
                      t.portOpen = o.api.PortOpen.fromObject(e.portOpen);
                    }
                    if (null != e.toast) {
                      if ("object" !== typeof e.toast)
                        throw TypeError(
                          ".api.Command.toast: object expected"
                        );
                      t.toast = o.api.Toast.fromObject(e.toast);
                    }
                    if (null != e.redirect) {
                      if ("object" !== typeof e.redirect)
                        throw TypeError(
                          ".api.Command.redirect: object expected"
                        );
                      t.redirect = o.api.Redirect.fromObject(e.redirect);
                    }
                    if (null != e.alwaysOn) {
                      if ("object" !== typeof e.alwaysOn)
                        throw TypeError(
                          ".api.Command.alwaysOn: object expected"
                        );
                      t.alwaysOn = o.api.AlwaysOn.fromObject(e.alwaysOn);
                    }
                    if (null != e.runMain) {
                      if ("object" !== typeof e.runMain)
                        throw TypeError(
                          ".api.Command.runMain: object expected"
                        );
                      t.runMain = o.api.RunMain.fromObject(e.runMain);
                    }
                    if (null != e.clear) {
                      if ("object" !== typeof e.clear)
                        throw TypeError(
                          ".api.Command.clear: object expected"
                        );
                      t.clear = o.api.Clear.fromObject(e.clear);
                    }
                    if (
                      (null != e.eval && (t.eval = String(e.eval)),
                      null != e.result && (t.result = String(e.result)),
                      null != e.input && (t.input = String(e.input)),
                      null != e.output && (t.output = String(e.output)),
                      null != e.error && (t.error = String(e.error)),
                      null != e.saneTerm)
                    ) {
                      if ("object" !== typeof e.saneTerm)
                        throw TypeError(
                          ".api.Command.saneTerm: object expected"
                        );
                      t.saneTerm = o.api.SaneTerm.fromObject(e.saneTerm);
                    }
                    if (null != e.resizeTerm) {
                      if ("object" !== typeof e.resizeTerm)
                        throw TypeError(
                          ".api.Command.resizeTerm: object expected"
                        );
                      t.resizeTerm = o.api.ResizeTerm.fromObject(
                        e.resizeTerm
                      );
                    }
                    switch (e.state) {
                      case "Stopped":
                      case 0:
                        t.state = 0;
                        break;
                      case "Running":
                      case 1:
                        t.state = 1;
                    }
                    if (null != e.ok) {
                      if ("object" !== typeof e.ok)
                        throw TypeError(
                          ".api.Command.ok: object expected"
                        );
                      t.ok = o.api.OK.fromObject(e.ok);
                    }
                    if (null != e.persist) {
                      if ("object" !== typeof e.persist)
                        throw TypeError(
                          ".api.Command.persist: object expected"
                        );
                      t.persist = o.api.File.fromObject(e.persist);
                    }
                    if (null != e.persistMirror) {
                      if ("object" !== typeof e.persistMirror)
                        throw TypeError(
                          ".api.Command.persistMirror: object expected"
                        );
                      t.persistMirror = o.api.File.fromObject(
                        e.persistMirror
                      );
                    }
                    if (null != e.write) {
                      if ("object" !== typeof e.write)
                        throw TypeError(
                          ".api.Command.write: object expected"
                        );
                      t.write = o.api.File.fromObject(e.write);
                    }
                    if (null != e.remove) {
                      if ("object" !== typeof e.remove)
                        throw TypeError(
                          ".api.Command.remove: object expected"
                        );
                      t.remove = o.api.File.fromObject(e.remove);
                    }
                    if (null != e.move) {
                      if ("object" !== typeof e.move)
                        throw TypeError(
                          ".api.Command.move: object expected"
                        );
                      t.move = o.api.Move.fromObject(e.move);
                    }
                    if (null != e.tryRemove) {
                      if ("object" !== typeof e.tryRemove)
                        throw TypeError(
                          ".api.Command.tryRemove: object expected"
                        );
                      t.tryRemove = o.api.File.fromObject(e.tryRemove);
                    }
                    if (null != e.mkdir) {
                      if ("object" !== typeof e.mkdir)
                        throw TypeError(
                          ".api.Command.mkdir: object expected"
                        );
                      t.mkdir = o.api.File.fromObject(e.mkdir);
                    }
                    if (null != e.stat) {
                      if ("object" !== typeof e.stat)
                        throw TypeError(
                          ".api.Command.stat: object expected"
                        );
                      t.stat = o.api.File.fromObject(e.stat);
                    }
                    if (null != e.statRes) {
                      if ("object" !== typeof e.statRes)
                        throw TypeError(
                          ".api.Command.statRes: object expected"
                        );
                      t.statRes = o.api.StatResult.fromObject(e.statRes);
                    }
                    if (null != e.read) {
                      if ("object" !== typeof e.read)
                        throw TypeError(
                          ".api.Command.read: object expected"
                        );
                      t.read = o.api.File.fromObject(e.read);
                    }
                    if (null != e.readdir) {
                      if ("object" !== typeof e.readdir)
                        throw TypeError(
                          ".api.Command.readdir: object expected"
                        );
                      t.readdir = o.api.File.fromObject(e.readdir);
                    }
                    if (null != e.files) {
                      if ("object" !== typeof e.files)
                        throw TypeError(
                          ".api.Command.files: object expected"
                        );
                      t.files = o.api.Files.fromObject(e.files);
                    }
                    if (null != e.file) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.Command.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    if (null != e.checkChanges) {
                      if ("object" !== typeof e.checkChanges)
                        throw TypeError(
                          ".api.Command.checkChanges: object expected"
                        );
                      t.checkChanges = o.api.CheckChanges.fromObject(
                        e.checkChanges
                      );
                    }
                    if (null != e.changedFiles) {
                      if ("object" !== typeof e.changedFiles)
                        throw TypeError(
                          ".api.Command.changedFiles: object expected"
                        );
                      t.changedFiles = o.api.Files.fromObject(
                        e.changedFiles
                      );
                    }
                    if (null != e.lintResults) {
                      if ("object" !== typeof e.lintResults)
                        throw TypeError(
                          ".api.Command.lintResults: object expected"
                        );
                      t.lintResults = o.api.LintResults.fromObject(
                        e.lintResults
                      );
                    }
                    if (null != e.runContainedTest) {
                      if ("object" !== typeof e.runContainedTest)
                        throw TypeError(
                          ".api.Command.runContainedTest: object expected"
                        );
                      t.runContainedTest = o.api.ContainedTest.fromObject(
                        e.runContainedTest
                      );
                    }
                    if (null != e.testResult) {
                      if ("object" !== typeof e.testResult)
                        throw TypeError(
                          ".api.Command.testResult: object expected"
                        );
                      t.testResult = o.api.TestResult.fromObject(
                        e.testResult
                      );
                    }
                    if (
                      (null != e.debuggerStart &&
                        (t.debuggerStart = String(e.debuggerStart)),
                      null != e.debuggerStep)
                    ) {
                      if ("object" !== typeof e.debuggerStep)
                        throw TypeError(
                          ".api.Command.debuggerStep: object expected"
                        );
                      t.debuggerStep = o.api.RunMain.fromObject(
                        e.debuggerStep
                      );
                    }
                    if (null != e.debuggerStatus) {
                      if ("object" !== typeof e.debuggerStatus)
                        throw TypeError(
                          ".api.Command.debuggerStatus: object expected"
                        );
                      t.debuggerStatus = o.api.DebugStatus.fromObject(
                        e.debuggerStatus
                      );
                    }
                    if (null != e.ensurePackages) {
                      if ("object" !== typeof e.ensurePackages)
                        throw TypeError(
                          ".api.Command.ensurePackages: object expected"
                        );
                      t.ensurePackages = o.api.EnsurePackages.fromObject(
                        e.ensurePackages
                      );
                    }
                    if (null != e.ping) {
                      if ("object" !== typeof e.ping)
                        throw TypeError(
                          ".api.Command.ping: object expected"
                        );
                      t.ping = o.api.Ping.fromObject(e.ping);
                    }
                    if (null != e.pong) {
                      if ("object" !== typeof e.pong)
                        throw TypeError(
                          ".api.Command.pong: object expected"
                        );
                      t.pong = o.api.Pong.fromObject(e.pong);
                    }
                    if (null != e.hello) {
                      if ("object" !== typeof e.hello)
                        throw TypeError(
                          ".api.Command.hello: object expected"
                        );
                      t.hello = o.api.Hello.fromObject(e.hello);
                    }
                    if (null != e.goodbye) {
                      if ("object" !== typeof e.goodbye)
                        throw TypeError(
                          ".api.Command.goodbye: object expected"
                        );
                      t.goodbye = o.api.Goodbye.fromObject(e.goodbye);
                    }
                    if (null != e.hint) {
                      if ("object" !== typeof e.hint)
                        throw TypeError(
                          ".api.Command.hint: object expected"
                        );
                      t.hint = o.api.Hint.fromObject(e.hint);
                    }
                    if (null != e.connect) {
                      if ("object" !== typeof e.connect)
                        throw TypeError(
                          ".api.Command.connect: object expected"
                        );
                      t.connect = o.api.Connect.fromObject(e.connect);
                    }
                    if (null != e.send) {
                      if ("object" !== typeof e.send)
                        throw TypeError(
                          ".api.Command.send: object expected"
                        );
                      t.send = o.api.Send.fromObject(e.send);
                    }
                    if (null != e.recv) {
                      if ("object" !== typeof e.recv)
                        throw TypeError(
                          ".api.Command.recv: object expected"
                        );
                      t.recv = o.api.Recv.fromObject(e.recv);
                    }
                    if (null != e.disconnect) {
                      if ("object" !== typeof e.disconnect)
                        throw TypeError(
                          ".api.Command.disconnect: object expected"
                        );
                      t.disconnect = o.api.Disconnect.fromObject(
                        e.disconnect
                      );
                    }
                    if (null != e.fileAuthReq) {
                      if ("object" !== typeof e.fileAuthReq)
                        throw TypeError(
                          ".api.Command.fileAuthReq: object expected"
                        );
                      t.fileAuthReq = o.api.FileAuthReq.fromObject(
                        e.fileAuthReq
                      );
                    }
                    if (null != e.fileAuthRes) {
                      if ("object" !== typeof e.fileAuthRes)
                        throw TypeError(
                          ".api.Command.fileAuthRes: object expected"
                        );
                      t.fileAuthRes = o.api.FileAuthRes.fromObject(
                        e.fileAuthRes
                      );
                    }
                    if (null != e.mutliFileAuthRes) {
                      if ("object" !== typeof e.mutliFileAuthRes)
                        throw TypeError(
                          ".api.Command.mutliFileAuthRes: object expected"
                        );
                      t.mutliFileAuthRes = o.api.MultiFileAuthRes.fromObject(
                        e.mutliFileAuthRes
                      );
                    }
                    if (null != e.listObjects) {
                      if ("object" !== typeof e.listObjects)
                        throw TypeError(
                          ".api.Command.listObjects: object expected"
                        );
                      t.listObjects = o.api.ListObjects.fromObject(
                        e.listObjects
                      );
                    }
                    if (null != e.listObjectsResp) {
                      if ("object" !== typeof e.listObjectsResp)
                        throw TypeError(
                          ".api.Command.listObjectsResp: object expected"
                        );
                      t.listObjectsResp = o.api.ListObjectsResp.fromObject(
                        e.listObjectsResp
                      );
                    }
                    if (null != e.ot) {
                      if ("object" !== typeof e.ot)
                        throw TypeError(
                          ".api.Command.ot: object expected"
                        );
                      t.ot = o.api.OTPacket.fromObject(e.ot);
                    }
                    if (null != e.otstatus) {
                      if ("object" !== typeof e.otstatus)
                        throw TypeError(
                          ".api.Command.otstatus: object expected"
                        );
                      t.otstatus = o.api.OTStatus.fromObject(e.otstatus);
                    }
                    if (null != e.otLinkFile) {
                      if ("object" !== typeof e.otLinkFile)
                        throw TypeError(
                          ".api.Command.otLinkFile: object expected"
                        );
                      t.otLinkFile = o.api.OTLinkFile.fromObject(
                        e.otLinkFile
                      );
                    }
                    if (null != e.otNewCursor) {
                      if ("object" !== typeof e.otNewCursor)
                        throw TypeError(
                          ".api.Command.otNewCursor: object expected"
                        );
                      t.otNewCursor = o.api.OTCursor.fromObject(
                        e.otNewCursor
                      );
                    }
                    if (null != e.otDeleteCursor) {
                      if ("object" !== typeof e.otDeleteCursor)
                        throw TypeError(
                          ".api.Command.otDeleteCursor: object expected"
                        );
                      t.otDeleteCursor = o.api.OTCursor.fromObject(
                        e.otDeleteCursor
                      );
                    }
                    if (null != e.otFetchRequest) {
                      if ("object" !== typeof e.otFetchRequest)
                        throw TypeError(
                          ".api.Command.otFetchRequest: object expected"
                        );
                      t.otFetchRequest = o.api.OTFetchRequest.fromObject(
                        e.otFetchRequest
                      );
                    }
                    if (null != e.otFetchResponse) {
                      if ("object" !== typeof e.otFetchResponse)
                        throw TypeError(
                          ".api.Command.otFetchResponse: object expected"
                        );
                      t.otFetchResponse = o.api.OTFetchResponse.fromObject(
                        e.otFetchResponse
                      );
                    }
                    if (null != e.flush) {
                      if ("object" !== typeof e.flush)
                        throw TypeError(
                          ".api.Command.flush: object expected"
                        );
                      t.flush = o.api.Flush.fromObject(e.flush);
                    }
                    if (null != e.debug) {
                      if ("object" !== typeof e.debug)
                        throw TypeError(
                          ".api.Command.debug: object expected"
                        );
                      t.debug = o.api.Debug.fromObject(e.debug);
                    }
                    if (null != e.startVCR) {
                      if ("object" !== typeof e.startVCR)
                        throw TypeError(
                          ".api.Command.startVCR: object expected"
                        );
                      t.startVCR = o.api.StartVCR.fromObject(e.startVCR);
                    }
                    if (null != e.readVCR) {
                      if ("object" !== typeof e.readVCR)
                        throw TypeError(
                          ".api.Command.readVCR: object expected"
                        );
                      t.readVCR = o.api.ReadVCR.fromObject(e.readVCR);
                    }
                    if (null != e.VCRLog) {
                      if ("object" !== typeof e.VCRLog)
                        throw TypeError(
                          ".api.Command.VCRLog: object expected"
                        );
                      t.VCRLog = o.api.VCRLog.fromObject(e.VCRLog);
                    }
                    if (null != e.auth) {
                      if ("object" !== typeof e.auth)
                        throw TypeError(
                          ".api.Command.auth: object expected"
                        );
                      t.auth = o.api.Auth.fromObject(e.auth);
                    }
                    if (null != e.execInfo) {
                      if ("object" !== typeof e.execInfo)
                        throw TypeError(
                          ".api.Command.execInfo: object expected"
                        );
                      t.execInfo = o.api.ExecInfo.fromObject(e.execInfo);
                    }
                    if (null != e.subscribeFile) {
                      if ("object" !== typeof e.subscribeFile)
                        throw TypeError(
                          ".api.Command.subscribeFile: object expected"
                        );
                      t.subscribeFile = o.api.SubscribeFile.fromObject(
                        e.subscribeFile
                      );
                    }
                    if (null != e.fileEvent) {
                      if ("object" !== typeof e.fileEvent)
                        throw TypeError(
                          ".api.Command.fileEvent: object expected"
                        );
                      t.fileEvent = o.api.FileEvent.fromObject(
                        e.fileEvent
                      );
                    }
                    if (null != e.roster) {
                      if ("object" !== typeof e.roster)
                        throw TypeError(
                          ".api.Command.roster: object expected"
                        );
                      t.roster = o.api.Roster.fromObject(e.roster);
                    }
                    if (null != e.join) {
                      if ("object" !== typeof e.join)
                        throw TypeError(
                          ".api.Command.join: object expected"
                        );
                      t.join = o.api.User.fromObject(e.join);
                    }
                    if (null != e.part) {
                      if ("object" !== typeof e.part)
                        throw TypeError(
                          ".api.Command.part: object expected"
                        );
                      t.part = o.api.User.fromObject(e.part);
                    }
                    if (null != e.exec) {
                      if ("object" !== typeof e.exec)
                        throw TypeError(
                          ".api.Command.exec: object expected"
                        );
                      t.exec = o.api.Exec.fromObject(e.exec);
                    }
                    if (null != e.packageSearch) {
                      if ("object" !== typeof e.packageSearch)
                        throw TypeError(
                          ".api.Command.packageSearch: object expected"
                        );
                      t.packageSearch = o.api.PackageSearch.fromObject(
                        e.packageSearch
                      );
                    }
                    if (null != e.packageSearchResp) {
                      if ("object" !== typeof e.packageSearchResp)
                        throw TypeError(
                          ".api.Command.packageSearchResp: object expected"
                        );
                      t.packageSearchResp = o.api.PackageSearchResp.fromObject(
                        e.packageSearchResp
                      );
                    }
                    if (null != e.packageInfo) {
                      if ("object" !== typeof e.packageInfo)
                        throw TypeError(
                          ".api.Command.packageInfo: object expected"
                        );
                      t.packageInfo = o.api.PackageInfo.fromObject(
                        e.packageInfo
                      );
                    }
                    if (null != e.packageInfoResp) {
                      if ("object" !== typeof e.packageInfoResp)
                        throw TypeError(
                          ".api.Command.packageInfoResp: object expected"
                        );
                      t.packageInfoResp = o.api.PackageInfoResp.fromObject(
                        e.packageInfoResp
                      );
                    }
                    if (null != e.packageAdd) {
                      if ("object" !== typeof e.packageAdd)
                        throw TypeError(
                          ".api.Command.packageAdd: object expected"
                        );
                      t.packageAdd = o.api.PackageAdd.fromObject(
                        e.packageAdd
                      );
                    }
                    if (null != e.packageRemove) {
                      if ("object" !== typeof e.packageRemove)
                        throw TypeError(
                          ".api.Command.packageRemove: object expected"
                        );
                      t.packageRemove = o.api.PackageRemove.fromObject(
                        e.packageRemove
                      );
                    }
                    if (null != e.packageInstall) {
                      if ("object" !== typeof e.packageInstall)
                        throw TypeError(
                          ".api.Command.packageInstall: object expected"
                        );
                      t.packageInstall = o.api.PackageInstall.fromObject(
                        e.packageInstall
                      );
                    }
                    if (null != e.packageListSpecfile) {
                      if ("object" !== typeof e.packageListSpecfile)
                        throw TypeError(
                          ".api.Command.packageListSpecfile: object expected"
                        );
                      t.packageListSpecfile = o.api.PackageListSpecfile.fromObject(
                        e.packageListSpecfile
                      );
                    }
                    if (null != e.packageListSpecfileResp) {
                      if ("object" !== typeof e.packageListSpecfileResp)
                        throw TypeError(
                          ".api.Command.packageListSpecfileResp: object expected"
                        );
                      t.packageListSpecfileResp = o.api.PackageListSpecfileResp.fromObject(
                        e.packageListSpecfileResp
                      );
                    }
                    if (null != e.packageCacheSave) {
                      if ("object" !== typeof e.packageCacheSave)
                        throw TypeError(
                          ".api.Command.packageCacheSave: object expected"
                        );
                      t.packageCacheSave = o.api.PackageCacheSave.fromObject(
                        e.packageCacheSave
                      );
                    }
                    if (null != e.chatMessage) {
                      if ("object" !== typeof e.chatMessage)
                        throw TypeError(
                          ".api.Command.chatMessage: object expected"
                        );
                      t.chatMessage = o.api.ChatMessage.fromObject(
                        e.chatMessage
                      );
                    }
                    if (null != e.chatTyping) {
                      if ("object" !== typeof e.chatTyping)
                        throw TypeError(
                          ".api.Command.chatTyping: object expected"
                        );
                      t.chatTyping = o.api.ChatTyping.fromObject(
                        e.chatTyping
                      );
                    }
                    if (null != e.chatScrollback) {
                      if ("object" !== typeof e.chatScrollback)
                        throw TypeError(
                          ".api.Command.chatScrollback: object expected"
                        );
                      t.chatScrollback = o.api.ChatScrollback.fromObject(
                        e.chatScrollback
                      );
                    }
                    if (null != e.fsSnapshot) {
                      if ("object" !== typeof e.fsSnapshot)
                        throw TypeError(
                          ".api.Command.fsSnapshot: object expected"
                        );
                      t.fsSnapshot = o.api.FSSnapshot.fromObject(
                        e.fsSnapshot
                      );
                    }
                    if (null != e.fsTakeLock) {
                      if ("object" !== typeof e.fsTakeLock)
                        throw TypeError(
                          ".api.Command.fsTakeLock: object expected"
                        );
                      t.fsTakeLock = o.api.FSLock.fromObject(
                        e.fsTakeLock
                      );
                    }
                    if (null != e.fsReleaseLock) {
                      if ("object" !== typeof e.fsReleaseLock)
                        throw TypeError(
                          ".api.Command.fsReleaseLock: object expected"
                        );
                      t.fsReleaseLock = o.api.FSLock.fromObject(
                        e.fsReleaseLock
                      );
                    }
                    if (
                      (null != e.hasCap && (t.hasCap = Boolean(e.hasCap)),
                      null != e.pid1Config)
                    ) {
                      if ("object" !== typeof e.pid1Config)
                        throw TypeError(
                          ".api.Command.pid1Config: object expected"
                        );
                      t.pid1Config = o.api.Pid1Config.fromObject(
                        e.pid1Config
                      );
                    }
                    if (null != e.metrics) {
                      if ("object" !== typeof e.metrics)
                        throw TypeError(
                          ".api.Command.metrics: object expected"
                        );
                      t.metrics = o.api.Metrics.fromObject(e.metrics);
                    }
                    if (null != e.bootStatus) {
                      if ("object" !== typeof e.bootStatus)
                        throw TypeError(
                          ".api.Command.bootStatus: object expected"
                        );
                      t.bootStatus = o.api.BootStatus.fromObject(
                        e.bootStatus
                      );
                    }
                    if (null != e.readMeta) {
                      if ("object" !== typeof e.readMeta)
                        throw TypeError(
                          ".api.Command.readMeta: object expected"
                        );
                      t.readMeta = o.api.ReadMeta.fromObject(e.readMeta);
                    }
                    if (null != e.writeMeta) {
                      if ("object" !== typeof e.writeMeta)
                        throw TypeError(
                          ".api.Command.writeMeta: object expected"
                        );
                      t.writeMeta = o.api.WriteMeta.fromObject(
                        e.writeMeta
                      );
                    }
                    if (null != e.appendMeta) {
                      if ("object" !== typeof e.appendMeta)
                        throw TypeError(
                          ".api.Command.appendMeta: object expected"
                        );
                      t.appendMeta = o.api.AppendMeta.fromObject(
                        e.appendMeta
                      );
                    }
                    if (null != e.audio) {
                      if ("object" !== typeof e.audio)
                        throw TypeError(
                          ".api.Command.audio: object expected"
                        );
                      t.audio = o.api.Audio.fromObject(e.audio);
                    }
                    if (null != e.pprofRequest) {
                      if ("object" !== typeof e.pprofRequest)
                        throw TypeError(
                          ".api.Command.pprofRequest: object expected"
                        );
                      t.pprofRequest = o.api.PprofRequest.fromObject(
                        e.pprofRequest
                      );
                    }
                    if (null != e.pprofResponse) {
                      if ("object" !== typeof e.pprofResponse)
                        throw TypeError(
                          ".api.Command.pprofResponse: object expected"
                        );
                      t.pprofResponse = o.api.PprofResponse.fromObject(
                        e.pprofResponse
                      );
                    }
                    if (null != e.audio2) {
                      if ("object" !== typeof e.audio2)
                        throw TypeError(
                          ".api.Command.audio2: object expected"
                        );
                      t.audio2 = o.api.Audio2.fromObject(e.audio2);
                    }
                    if (null != e.PTYConfig) {
                      if ("object" !== typeof e.PTYConfig)
                        throw TypeError(
                          ".api.Command.PTYConfig: object expected"
                        );
                      t.PTYConfig = o.api.PTYConfig.fromObject(
                        e.PTYConfig
                      );
                    }
                    return null != e.ref && (t.ref = String(e.ref)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.channel = 0), (n.session = 0), (n.ref = "")),
                      null != e.channel &&
                        e.hasOwnProperty("channel") &&
                        (n.channel = e.channel),
                      null != e.session &&
                        e.hasOwnProperty("session") &&
                        (n.session = e.session),
                      null != e.openChan &&
                        e.hasOwnProperty("openChan") &&
                        ((n.openChan = o.api.OpenChannel.toObject(
                          e.openChan,
                          t
                        )),
                        t.oneofs && (n.body = "openChan")),
                      null != e.openChanRes &&
                        e.hasOwnProperty("openChanRes") &&
                        ((n.openChanRes = o.api.OpenChannelRes.toObject(
                          e.openChanRes,
                          t
                        )),
                        t.oneofs && (n.body = "openChanRes")),
                      null != e.closeChan &&
                        e.hasOwnProperty("closeChan") &&
                        ((n.closeChan = o.api.CloseChannel.toObject(
                          e.closeChan,
                          t
                        )),
                        t.oneofs && (n.body = "closeChan")),
                      null != e.closeChanRes &&
                        e.hasOwnProperty("closeChanRes") &&
                        ((n.closeChanRes = o.api.CloseChannelRes.toObject(
                          e.closeChanRes,
                          t
                        )),
                        t.oneofs && (n.body = "closeChanRes")),
                      null != e.containerState &&
                        e.hasOwnProperty("containerState") &&
                        ((n.containerState = o.api.ContainerState.toObject(
                          e.containerState,
                          t
                        )),
                        t.oneofs && (n.body = "containerState")),
                      null != e.portOpen &&
                        e.hasOwnProperty("portOpen") &&
                        ((n.portOpen = o.api.PortOpen.toObject(
                          e.portOpen,
                          t
                        )),
                        t.oneofs && (n.body = "portOpen")),
                      null != e.toast &&
                        e.hasOwnProperty("toast") &&
                        ((n.toast = o.api.Toast.toObject(e.toast, t)),
                        t.oneofs && (n.body = "toast")),
                      null != e.redirect &&
                        e.hasOwnProperty("redirect") &&
                        ((n.redirect = o.api.Redirect.toObject(
                          e.redirect,
                          t
                        )),
                        t.oneofs && (n.body = "redirect")),
                      null != e.alwaysOn &&
                        e.hasOwnProperty("alwaysOn") &&
                        ((n.alwaysOn = o.api.AlwaysOn.toObject(
                          e.alwaysOn,
                          t
                        )),
                        t.oneofs && (n.body = "alwaysOn")),
                      null != e.runMain &&
                        e.hasOwnProperty("runMain") &&
                        ((n.runMain = o.api.RunMain.toObject(
                          e.runMain,
                          t
                        )),
                        t.oneofs && (n.body = "runMain")),
                      null != e.clear &&
                        e.hasOwnProperty("clear") &&
                        ((n.clear = o.api.Clear.toObject(e.clear, t)),
                        t.oneofs && (n.body = "clear")),
                      null != e.eval &&
                        e.hasOwnProperty("eval") &&
                        ((n.eval = e.eval),
                        t.oneofs && (n.body = "eval")),
                      null != e.result &&
                        e.hasOwnProperty("result") &&
                        ((n.result = e.result),
                        t.oneofs && (n.body = "result")),
                      null != e.input &&
                        e.hasOwnProperty("input") &&
                        ((n.input = e.input),
                        t.oneofs && (n.body = "input")),
                      null != e.output &&
                        e.hasOwnProperty("output") &&
                        ((n.output = e.output),
                        t.oneofs && (n.body = "output")),
                      null != e.error &&
                        e.hasOwnProperty("error") &&
                        ((n.error = e.error),
                        t.oneofs && (n.body = "error")),
                      null != e.saneTerm &&
                        e.hasOwnProperty("saneTerm") &&
                        ((n.saneTerm = o.api.SaneTerm.toObject(
                          e.saneTerm,
                          t
                        )),
                        t.oneofs && (n.body = "saneTerm")),
                      null != e.resizeTerm &&
                        e.hasOwnProperty("resizeTerm") &&
                        ((n.resizeTerm = o.api.ResizeTerm.toObject(
                          e.resizeTerm,
                          t
                        )),
                        t.oneofs && (n.body = "resizeTerm")),
                      null != e.state &&
                        e.hasOwnProperty("state") &&
                        ((n.state =
                          t.enums === String
                            ? o.api.State[e.state]
                            : e.state),
                        t.oneofs && (n.body = "state")),
                      null != e.ok &&
                        e.hasOwnProperty("ok") &&
                        ((n.ok = o.api.OK.toObject(e.ok, t)),
                        t.oneofs && (n.body = "ok")),
                      null != e.persist &&
                        e.hasOwnProperty("persist") &&
                        ((n.persist = o.api.File.toObject(e.persist, t)),
                        t.oneofs && (n.body = "persist")),
                      null != e.write &&
                        e.hasOwnProperty("write") &&
                        ((n.write = o.api.File.toObject(e.write, t)),
                        t.oneofs && (n.body = "write")),
                      null != e.remove &&
                        e.hasOwnProperty("remove") &&
                        ((n.remove = o.api.File.toObject(e.remove, t)),
                        t.oneofs && (n.body = "remove")),
                      null != e.move &&
                        e.hasOwnProperty("move") &&
                        ((n.move = o.api.Move.toObject(e.move, t)),
                        t.oneofs && (n.body = "move")),
                      null != e.read &&
                        e.hasOwnProperty("read") &&
                        ((n.read = o.api.File.toObject(e.read, t)),
                        t.oneofs && (n.body = "read")),
                      null != e.tryRemove &&
                        e.hasOwnProperty("tryRemove") &&
                        ((n.tryRemove = o.api.File.toObject(
                          e.tryRemove,
                          t
                        )),
                        t.oneofs && (n.body = "tryRemove")),
                      null != e.readdir &&
                        e.hasOwnProperty("readdir") &&
                        ((n.readdir = o.api.File.toObject(e.readdir, t)),
                        t.oneofs && (n.body = "readdir")),
                      null != e.files &&
                        e.hasOwnProperty("files") &&
                        ((n.files = o.api.Files.toObject(e.files, t)),
                        t.oneofs && (n.body = "files")),
                      null != e.mkdir &&
                        e.hasOwnProperty("mkdir") &&
                        ((n.mkdir = o.api.File.toObject(e.mkdir, t)),
                        t.oneofs && (n.body = "mkdir")),
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        ((n.file = o.api.File.toObject(e.file, t)),
                        t.oneofs && (n.body = "file")),
                      null != e.persistMirror &&
                        e.hasOwnProperty("persistMirror") &&
                        ((n.persistMirror = o.api.File.toObject(
                          e.persistMirror,
                          t
                        )),
                        t.oneofs && (n.body = "persistMirror")),
                      null != e.checkChanges &&
                        e.hasOwnProperty("checkChanges") &&
                        ((n.checkChanges = o.api.CheckChanges.toObject(
                          e.checkChanges,
                          t
                        )),
                        t.oneofs && (n.body = "checkChanges")),
                      null != e.changedFiles &&
                        e.hasOwnProperty("changedFiles") &&
                        ((n.changedFiles = o.api.Files.toObject(
                          e.changedFiles,
                          t
                        )),
                        t.oneofs && (n.body = "changedFiles")),
                      null != e.lintResults &&
                        e.hasOwnProperty("lintResults") &&
                        ((n.lintResults = o.api.LintResults.toObject(
                          e.lintResults,
                          t
                        )),
                        t.oneofs && (n.body = "lintResults")),
                      null != e.runContainedTest &&
                        e.hasOwnProperty("runContainedTest") &&
                        ((n.runContainedTest = o.api.ContainedTest.toObject(
                          e.runContainedTest,
                          t
                        )),
                        t.oneofs && (n.body = "runContainedTest")),
                      null != e.testResult &&
                        e.hasOwnProperty("testResult") &&
                        ((n.testResult = o.api.TestResult.toObject(
                          e.testResult,
                          t
                        )),
                        t.oneofs && (n.body = "testResult")),
                      null != e.debuggerStart &&
                        e.hasOwnProperty("debuggerStart") &&
                        ((n.debuggerStart = e.debuggerStart),
                        t.oneofs && (n.body = "debuggerStart")),
                      null != e.debuggerStep &&
                        e.hasOwnProperty("debuggerStep") &&
                        ((n.debuggerStep = o.api.RunMain.toObject(
                          e.debuggerStep,
                          t
                        )),
                        t.oneofs && (n.body = "debuggerStep")),
                      null != e.debuggerStatus &&
                        e.hasOwnProperty("debuggerStatus") &&
                        ((n.debuggerStatus = o.api.DebugStatus.toObject(
                          e.debuggerStatus,
                          t
                        )),
                        t.oneofs && (n.body = "debuggerStatus")),
                      null != e.ensurePackages &&
                        e.hasOwnProperty("ensurePackages") &&
                        ((n.ensurePackages = o.api.EnsurePackages.toObject(
                          e.ensurePackages,
                          t
                        )),
                        t.oneofs && (n.body = "ensurePackages")),
                      null != e.ping &&
                        e.hasOwnProperty("ping") &&
                        ((n.ping = o.api.Ping.toObject(e.ping, t)),
                        t.oneofs && (n.body = "ping")),
                      null != e.pong &&
                        e.hasOwnProperty("pong") &&
                        ((n.pong = o.api.Pong.toObject(e.pong, t)),
                        t.oneofs && (n.body = "pong")),
                      null != e.hello &&
                        e.hasOwnProperty("hello") &&
                        ((n.hello = o.api.Hello.toObject(e.hello, t)),
                        t.oneofs && (n.body = "hello")),
                      null != e.goodbye &&
                        e.hasOwnProperty("goodbye") &&
                        ((n.goodbye = o.api.Goodbye.toObject(
                          e.goodbye,
                          t
                        )),
                        t.oneofs && (n.body = "goodbye")),
                      null != e.hint &&
                        e.hasOwnProperty("hint") &&
                        ((n.hint = o.api.Hint.toObject(e.hint, t)),
                        t.oneofs && (n.body = "hint")),
                      null != e.connect &&
                        e.hasOwnProperty("connect") &&
                        ((n.connect = o.api.Connect.toObject(
                          e.connect,
                          t
                        )),
                        t.oneofs && (n.body = "connect")),
                      null != e.send &&
                        e.hasOwnProperty("send") &&
                        ((n.send = o.api.Send.toObject(e.send, t)),
                        t.oneofs && (n.body = "send")),
                      null != e.recv &&
                        e.hasOwnProperty("recv") &&
                        ((n.recv = o.api.Recv.toObject(e.recv, t)),
                        t.oneofs && (n.body = "recv")),
                      null != e.disconnect &&
                        e.hasOwnProperty("disconnect") &&
                        ((n.disconnect = o.api.Disconnect.toObject(
                          e.disconnect,
                          t
                        )),
                        t.oneofs && (n.body = "disconnect")),
                      null != e.fileAuthReq &&
                        e.hasOwnProperty("fileAuthReq") &&
                        ((n.fileAuthReq = o.api.FileAuthReq.toObject(
                          e.fileAuthReq,
                          t
                        )),
                        t.oneofs && (n.body = "fileAuthReq")),
                      null != e.fileAuthRes &&
                        e.hasOwnProperty("fileAuthRes") &&
                        ((n.fileAuthRes = o.api.FileAuthRes.toObject(
                          e.fileAuthRes,
                          t
                        )),
                        t.oneofs && (n.body = "fileAuthRes")),
                      null != e.mutliFileAuthRes &&
                        e.hasOwnProperty("mutliFileAuthRes") &&
                        ((n.mutliFileAuthRes = o.api.MultiFileAuthRes.toObject(
                          e.mutliFileAuthRes,
                          t
                        )),
                        t.oneofs && (n.body = "mutliFileAuthRes")),
                      null != e.listObjects &&
                        e.hasOwnProperty("listObjects") &&
                        ((n.listObjects = o.api.ListObjects.toObject(
                          e.listObjects,
                          t
                        )),
                        t.oneofs && (n.body = "listObjects")),
                      null != e.listObjectsResp &&
                        e.hasOwnProperty("listObjectsResp") &&
                        ((n.listObjectsResp = o.api.ListObjectsResp.toObject(
                          e.listObjectsResp,
                          t
                        )),
                        t.oneofs && (n.body = "listObjectsResp")),
                      null != e.ot &&
                        e.hasOwnProperty("ot") &&
                        ((n.ot = o.api.OTPacket.toObject(e.ot, t)),
                        t.oneofs && (n.body = "ot")),
                      null != e.otstatus &&
                        e.hasOwnProperty("otstatus") &&
                        ((n.otstatus = o.api.OTStatus.toObject(
                          e.otstatus,
                          t
                        )),
                        t.oneofs && (n.body = "otstatus")),
                      null != e.otLinkFile &&
                        e.hasOwnProperty("otLinkFile") &&
                        ((n.otLinkFile = o.api.OTLinkFile.toObject(
                          e.otLinkFile,
                          t
                        )),
                        t.oneofs && (n.body = "otLinkFile")),
                      null != e.otNewCursor &&
                        e.hasOwnProperty("otNewCursor") &&
                        ((n.otNewCursor = o.api.OTCursor.toObject(
                          e.otNewCursor,
                          t
                        )),
                        t.oneofs && (n.body = "otNewCursor")),
                      null != e.otDeleteCursor &&
                        e.hasOwnProperty("otDeleteCursor") &&
                        ((n.otDeleteCursor = o.api.OTCursor.toObject(
                          e.otDeleteCursor,
                          t
                        )),
                        t.oneofs && (n.body = "otDeleteCursor")),
                      null != e.otFetchRequest &&
                        e.hasOwnProperty("otFetchRequest") &&
                        ((n.otFetchRequest = o.api.OTFetchRequest.toObject(
                          e.otFetchRequest,
                          t
                        )),
                        t.oneofs && (n.body = "otFetchRequest")),
                      null != e.otFetchResponse &&
                        e.hasOwnProperty("otFetchResponse") &&
                        ((n.otFetchResponse = o.api.OTFetchResponse.toObject(
                          e.otFetchResponse,
                          t
                        )),
                        t.oneofs && (n.body = "otFetchResponse")),
                      null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        ((n.debug = o.api.Debug.toObject(e.debug, t)),
                        t.oneofs && (n.body = "debug")),
                      null != e.startVCR &&
                        e.hasOwnProperty("startVCR") &&
                        ((n.startVCR = o.api.StartVCR.toObject(
                          e.startVCR,
                          t
                        )),
                        t.oneofs && (n.body = "startVCR")),
                      null != e.readVCR &&
                        e.hasOwnProperty("readVCR") &&
                        ((n.readVCR = o.api.ReadVCR.toObject(
                          e.readVCR,
                          t
                        )),
                        t.oneofs && (n.body = "readVCR")),
                      null != e.VCRLog &&
                        e.hasOwnProperty("VCRLog") &&
                        ((n.VCRLog = o.api.VCRLog.toObject(e.VCRLog, t)),
                        t.oneofs && (n.body = "VCRLog")),
                      null != e.auth &&
                        e.hasOwnProperty("auth") &&
                        ((n.auth = o.api.Auth.toObject(e.auth, t)),
                        t.oneofs && (n.body = "auth")),
                      null != e.execInfo &&
                        e.hasOwnProperty("execInfo") &&
                        ((n.execInfo = o.api.ExecInfo.toObject(
                          e.execInfo,
                          t
                        )),
                        t.oneofs && (n.body = "execInfo")),
                      null != e.flush &&
                        e.hasOwnProperty("flush") &&
                        ((n.flush = o.api.Flush.toObject(e.flush, t)),
                        t.oneofs && (n.body = "flush")),
                      null != e.subscribeFile &&
                        e.hasOwnProperty("subscribeFile") &&
                        ((n.subscribeFile = o.api.SubscribeFile.toObject(
                          e.subscribeFile,
                          t
                        )),
                        t.oneofs && (n.body = "subscribeFile")),
                      null != e.fileEvent &&
                        e.hasOwnProperty("fileEvent") &&
                        ((n.fileEvent = o.api.FileEvent.toObject(
                          e.fileEvent,
                          t
                        )),
                        t.oneofs && (n.body = "fileEvent")),
                      null != e.roster &&
                        e.hasOwnProperty("roster") &&
                        ((n.roster = o.api.Roster.toObject(e.roster, t)),
                        t.oneofs && (n.body = "roster")),
                      null != e.join &&
                        e.hasOwnProperty("join") &&
                        ((n.join = o.api.User.toObject(e.join, t)),
                        t.oneofs && (n.body = "join")),
                      null != e.part &&
                        e.hasOwnProperty("part") &&
                        ((n.part = o.api.User.toObject(e.part, t)),
                        t.oneofs && (n.body = "part")),
                      null != e.exec &&
                        e.hasOwnProperty("exec") &&
                        ((n.exec = o.api.Exec.toObject(e.exec, t)),
                        t.oneofs && (n.body = "exec")),
                      null != e.packageSearch &&
                        e.hasOwnProperty("packageSearch") &&
                        ((n.packageSearch = o.api.PackageSearch.toObject(
                          e.packageSearch,
                          t
                        )),
                        t.oneofs && (n.body = "packageSearch")),
                      null != e.packageSearchResp &&
                        e.hasOwnProperty("packageSearchResp") &&
                        ((n.packageSearchResp = o.api.PackageSearchResp.toObject(
                          e.packageSearchResp,
                          t
                        )),
                        t.oneofs && (n.body = "packageSearchResp")),
                      null != e.packageInfo &&
                        e.hasOwnProperty("packageInfo") &&
                        ((n.packageInfo = o.api.PackageInfo.toObject(
                          e.packageInfo,
                          t
                        )),
                        t.oneofs && (n.body = "packageInfo")),
                      null != e.packageInfoResp &&
                        e.hasOwnProperty("packageInfoResp") &&
                        ((n.packageInfoResp = o.api.PackageInfoResp.toObject(
                          e.packageInfoResp,
                          t
                        )),
                        t.oneofs && (n.body = "packageInfoResp")),
                      null != e.packageAdd &&
                        e.hasOwnProperty("packageAdd") &&
                        ((n.packageAdd = o.api.PackageAdd.toObject(
                          e.packageAdd,
                          t
                        )),
                        t.oneofs && (n.body = "packageAdd")),
                      null != e.packageRemove &&
                        e.hasOwnProperty("packageRemove") &&
                        ((n.packageRemove = o.api.PackageRemove.toObject(
                          e.packageRemove,
                          t
                        )),
                        t.oneofs && (n.body = "packageRemove")),
                      null != e.packageInstall &&
                        e.hasOwnProperty("packageInstall") &&
                        ((n.packageInstall = o.api.PackageInstall.toObject(
                          e.packageInstall,
                          t
                        )),
                        t.oneofs && (n.body = "packageInstall")),
                      null != e.packageListSpecfile &&
                        e.hasOwnProperty("packageListSpecfile") &&
                        ((n.packageListSpecfile = o.api.PackageListSpecfile.toObject(
                          e.packageListSpecfile,
                          t
                        )),
                        t.oneofs && (n.body = "packageListSpecfile")),
                      null != e.packageListSpecfileResp &&
                        e.hasOwnProperty("packageListSpecfileResp") &&
                        ((n.packageListSpecfileResp = o.api.PackageListSpecfileResp.toObject(
                          e.packageListSpecfileResp,
                          t
                        )),
                        t.oneofs && (n.body = "packageListSpecfileResp")),
                      null != e.packageCacheSave &&
                        e.hasOwnProperty("packageCacheSave") &&
                        ((n.packageCacheSave = o.api.PackageCacheSave.toObject(
                          e.packageCacheSave,
                          t
                        )),
                        t.oneofs && (n.body = "packageCacheSave")),
                      null != e.chatMessage &&
                        e.hasOwnProperty("chatMessage") &&
                        ((n.chatMessage = o.api.ChatMessage.toObject(
                          e.chatMessage,
                          t
                        )),
                        t.oneofs && (n.body = "chatMessage")),
                      null != e.chatTyping &&
                        e.hasOwnProperty("chatTyping") &&
                        ((n.chatTyping = o.api.ChatTyping.toObject(
                          e.chatTyping,
                          t
                        )),
                        t.oneofs && (n.body = "chatTyping")),
                      null != e.chatScrollback &&
                        e.hasOwnProperty("chatScrollback") &&
                        ((n.chatScrollback = o.api.ChatScrollback.toObject(
                          e.chatScrollback,
                          t
                        )),
                        t.oneofs && (n.body = "chatScrollback")),
                      null != e.fsSnapshot &&
                        e.hasOwnProperty("fsSnapshot") &&
                        ((n.fsSnapshot = o.api.FSSnapshot.toObject(
                          e.fsSnapshot,
                          t
                        )),
                        t.oneofs && (n.body = "fsSnapshot")),
                      null != e.fsTakeLock &&
                        e.hasOwnProperty("fsTakeLock") &&
                        ((n.fsTakeLock = o.api.FSLock.toObject(
                          e.fsTakeLock,
                          t
                        )),
                        t.oneofs && (n.body = "fsTakeLock")),
                      null != e.fsReleaseLock &&
                        e.hasOwnProperty("fsReleaseLock") &&
                        ((n.fsReleaseLock = o.api.FSLock.toObject(
                          e.fsReleaseLock,
                          t
                        )),
                        t.oneofs && (n.body = "fsReleaseLock")),
                      null != e.hasCap &&
                        e.hasOwnProperty("hasCap") &&
                        ((n.hasCap = e.hasCap),
                        t.oneofs && (n.body = "hasCap")),
                      null != e.pid1Config &&
                        e.hasOwnProperty("pid1Config") &&
                        ((n.pid1Config = o.api.Pid1Config.toObject(
                          e.pid1Config,
                          t
                        )),
                        t.oneofs && (n.body = "pid1Config")),
                      null != e.metrics &&
                        e.hasOwnProperty("metrics") &&
                        ((n.metrics = o.api.Metrics.toObject(
                          e.metrics,
                          t
                        )),
                        t.oneofs && (n.body = "metrics")),
                      null != e.bootStatus &&
                        e.hasOwnProperty("bootStatus") &&
                        ((n.bootStatus = o.api.BootStatus.toObject(
                          e.bootStatus,
                          t
                        )),
                        t.oneofs && (n.body = "bootStatus")),
                      null != e.readMeta &&
                        e.hasOwnProperty("readMeta") &&
                        ((n.readMeta = o.api.ReadMeta.toObject(
                          e.readMeta,
                          t
                        )),
                        t.oneofs && (n.body = "readMeta")),
                      null != e.writeMeta &&
                        e.hasOwnProperty("writeMeta") &&
                        ((n.writeMeta = o.api.WriteMeta.toObject(
                          e.writeMeta,
                          t
                        )),
                        t.oneofs && (n.body = "writeMeta")),
                      null != e.appendMeta &&
                        e.hasOwnProperty("appendMeta") &&
                        ((n.appendMeta = o.api.AppendMeta.toObject(
                          e.appendMeta,
                          t
                        )),
                        t.oneofs && (n.body = "appendMeta")),
                      null != e.audio &&
                        e.hasOwnProperty("audio") &&
                        ((n.audio = o.api.Audio.toObject(e.audio, t)),
                        t.oneofs && (n.body = "audio")),
                      null != e.pprofRequest &&
                        e.hasOwnProperty("pprofRequest") &&
                        ((n.pprofRequest = o.api.PprofRequest.toObject(
                          e.pprofRequest,
                          t
                        )),
                        t.oneofs && (n.body = "pprofRequest")),
                      null != e.pprofResponse &&
                        e.hasOwnProperty("pprofResponse") &&
                        ((n.pprofResponse = o.api.PprofResponse.toObject(
                          e.pprofResponse,
                          t
                        )),
                        t.oneofs && (n.body = "pprofResponse")),
                      null != e.audio2 &&
                        e.hasOwnProperty("audio2") &&
                        ((n.audio2 = o.api.Audio2.toObject(e.audio2, t)),
                        t.oneofs && (n.body = "audio2")),
                      null != e.PTYConfig &&
                        e.hasOwnProperty("PTYConfig") &&
                        ((n.PTYConfig = o.api.PTYConfig.toObject(
                          e.PTYConfig,
                          t
                        )),
                        t.oneofs && (n.body = "PTYConfig")),
                      null != e.stat &&
                        e.hasOwnProperty("stat") &&
                        ((n.stat = o.api.File.toObject(e.stat, t)),
                        t.oneofs && (n.body = "stat")),
                      null != e.statRes &&
                        e.hasOwnProperty("statRes") &&
                        ((n.statRes = o.api.StatResult.toObject(
                          e.statRes,
                          t
                        )),
                        t.oneofs && (n.body = "statRes")),
                      null != e.ref &&
                        e.hasOwnProperty("ref") &&
                        (n.ref = e.ref),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Audio = (() => {
                  function i(e) {
                    if (((this.data = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.data = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.data && e.data.length)
                    ) {
                      t.uint32(10).fork();
                      for (let r = 0; r < e.data.length; ++r)
                        t.int32(e.data[r]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Audio();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          if (
                            ((i.data && i.data.length) || (i.data = []),
                            2 === (7 & a))
                          )
                            for (const s = e.uint32() + e.pos; e.pos < s; )
                              i.data.push(e.int32());
                          else i.data.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.data && e.hasOwnProperty("data")) {
                      if (!Array.isArray(e.data))
                        return "data: array expected";
                      for (let t = 0; t < e.data.length; ++t)
                        if (!r.isInteger(e.data[t]))
                          return "data: integer[] expected";
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Audio) return e;
                    const t = new o.api.Audio();
                    if (e.data) {
                      if (!Array.isArray(e.data))
                        throw TypeError(
                          ".api.Audio.data: array expected"
                        );
                      t.data = [];
                      for (let n = 0; n < e.data.length; ++n)
                        t.data[n] = 0 | e.data[n];
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.data = []),
                      e.data && e.data.length)
                    ) {
                      n.data = [];
                      for (let r = 0; r < e.data.length; ++r)
                        n.data[r] = e.data[r];
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Audio2 = (() => {
                  function i(e) {
                    if (((this.data = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.data = r.emptyArray),
                  (i.prototype.samples = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.data && e.data.length)
                    ) {
                      t.uint32(10).fork();
                      for (let r = 0; r < e.data.length; ++r)
                        t.sint32(e.data[r]);
                      t.ldelim();
                    }
                    return (
                      null != e.samples &&
                        Object.hasOwnProperty.call(e, "samples") &&
                        t.uint32(16).int64(e.samples),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Audio2();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          if (
                            ((i.data && i.data.length) || (i.data = []),
                            2 === (7 & a))
                          )
                            for (const s = e.uint32() + e.pos; e.pos < s; )
                              i.data.push(e.sint32());
                          else i.data.push(e.sint32());
                          break;
                        case 2:
                          i.samples = e.int64();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.data && e.hasOwnProperty("data")) {
                      if (!Array.isArray(e.data))
                        return "data: array expected";
                      for (let t = 0; t < e.data.length; ++t)
                        if (!r.isInteger(e.data[t]))
                          return "data: integer[] expected";
                    }
                    return null == e.samples ||
                      !e.hasOwnProperty("samples") ||
                      r.isInteger(e.samples) ||
                      (e.samples &&
                        r.isInteger(e.samples.low) &&
                        r.isInteger(e.samples.high))
                      ? null
                      : "samples: integer|Long expected";
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Audio2) return e;
                    const t = new o.api.Audio2();
                    if (e.data) {
                      if (!Array.isArray(e.data))
                        throw TypeError(
                          ".api.Audio2.data: array expected"
                        );
                      t.data = [];
                      for (let n = 0; n < e.data.length; ++n)
                        t.data[n] = 0 | e.data[n];
                    }
                    return (
                      null != e.samples &&
                        (r.Long
                          ? ((t.samples = r.Long.fromValue(
                              e.samples
                            )).unsigned = !1)
                          : "string" === typeof e.samples
                          ? (t.samples = parseInt(e.samples, 10))
                          : "number" === typeof e.samples
                          ? (t.samples = e.samples)
                          : "object" === typeof e.samples &&
                            (t.samples = new r.LongBits(
                              e.samples.low >>> 0,
                              e.samples.high >>> 0
                            ).toNumber())),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.data = []),
                      t.defaults)
                    )
                      if (r.Long) {
                        const o = new r.Long(0, 0, !1);
                        n.samples =
                          t.longs === String
                            ? o.toString()
                            : t.longs === Number
                            ? o.toNumber()
                            : o;
                      } else n.samples = t.longs === String ? "0" : 0;
                    if (e.data && e.data.length) {
                      n.data = [];
                      for (let i = 0; i < e.data.length; ++i)
                        n.data[i] = e.data[i];
                    }
                    return (
                      null != e.samples &&
                        e.hasOwnProperty("samples") &&
                        ("number" === typeof e.samples
                          ? (n.samples =
                              t.longs === String
                                ? String(e.samples)
                                : e.samples)
                          : (n.samples =
                              t.longs === String
                                ? r.Long.prototype.toString.call(
                                    e.samples
                                  )
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.samples.low >>> 0,
                                    e.samples.high >>> 0
                                  ).toNumber()
                                : e.samples)),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ReadMeta = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.key = ""),
                  (i.prototype.exists = !1),
                  (i.prototype.data = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        t.uint32(10).string(e.key),
                      null != e.exists &&
                        Object.hasOwnProperty.call(e, "exists") &&
                        t.uint32(16).bool(e.exists),
                      null != e.data &&
                        Object.hasOwnProperty.call(e, "data") &&
                        t.uint32(26).bytes(e.data),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ReadMeta();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.key = e.string();
                          break;
                        case 2:
                          i.exists = e.bool();
                          break;
                        case 3:
                          i.data = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.key &&
                        e.hasOwnProperty("key") &&
                        !r.isString(e.key)
                      ? "key: string expected"
                      : null != e.exists &&
                        e.hasOwnProperty("exists") &&
                        "boolean" !== typeof e.exists
                      ? "exists: boolean expected"
                      : null != e.data &&
                        e.hasOwnProperty("data") &&
                        !(
                          (e.data && "number" === typeof e.data.length) ||
                          r.isString(e.data)
                        )
                      ? "data: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ReadMeta) return e;
                    const t = new o.api.ReadMeta();
                    return (
                      null != e.key && (t.key = String(e.key)),
                      null != e.exists && (t.exists = Boolean(e.exists)),
                      null != e.data &&
                        ("string" === typeof e.data
                          ? r.base64.decode(
                              e.data,
                              (t.data = r.newBuffer(
                                r.base64.length(e.data)
                              )),
                              0
                            )
                          : e.data.length && (t.data = e.data)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.key = ""),
                        (n.exists = !1),
                        t.bytes === String
                          ? (n.data = "")
                          : ((n.data = []),
                            t.bytes !== Array &&
                              (n.data = r.newBuffer(n.data)))),
                      null != e.key &&
                        e.hasOwnProperty("key") &&
                        (n.key = e.key),
                      null != e.exists &&
                        e.hasOwnProperty("exists") &&
                        (n.exists = e.exists),
                      null != e.data &&
                        e.hasOwnProperty("data") &&
                        (n.data =
                          t.bytes === String
                            ? r.base64.encode(e.data, 0, e.data.length)
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.data)
                            : e.data),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.WriteMeta = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.key = ""),
                  (i.prototype.data = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        t.uint32(10).string(e.key),
                      null != e.data &&
                        Object.hasOwnProperty.call(e, "data") &&
                        t.uint32(18).bytes(e.data),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.WriteMeta();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.key = e.string();
                          break;
                        case 2:
                          i.data = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.key &&
                        e.hasOwnProperty("key") &&
                        !r.isString(e.key)
                      ? "key: string expected"
                      : null != e.data &&
                        e.hasOwnProperty("data") &&
                        !(
                          (e.data && "number" === typeof e.data.length) ||
                          r.isString(e.data)
                        )
                      ? "data: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.WriteMeta) return e;
                    const t = new o.api.WriteMeta();
                    return (
                      null != e.key && (t.key = String(e.key)),
                      null != e.data &&
                        ("string" === typeof e.data
                          ? r.base64.decode(
                              e.data,
                              (t.data = r.newBuffer(
                                r.base64.length(e.data)
                              )),
                              0
                            )
                          : e.data.length && (t.data = e.data)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.key = ""),
                        t.bytes === String
                          ? (n.data = "")
                          : ((n.data = []),
                            t.bytes !== Array &&
                              (n.data = r.newBuffer(n.data)))),
                      null != e.key &&
                        e.hasOwnProperty("key") &&
                        (n.key = e.key),
                      null != e.data &&
                        e.hasOwnProperty("data") &&
                        (n.data =
                          t.bytes === String
                            ? r.base64.encode(e.data, 0, e.data.length)
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.data)
                            : e.data),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.AppendMeta = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.key = ""),
                  (i.prototype.data = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.key &&
                        Object.hasOwnProperty.call(e, "key") &&
                        t.uint32(10).string(e.key),
                      null != e.data &&
                        Object.hasOwnProperty.call(e, "data") &&
                        t.uint32(18).bytes(e.data),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.AppendMeta();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.key = e.string();
                          break;
                        case 2:
                          i.data = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.key &&
                        e.hasOwnProperty("key") &&
                        !r.isString(e.key)
                      ? "key: string expected"
                      : null != e.data &&
                        e.hasOwnProperty("data") &&
                        !(
                          (e.data && "number" === typeof e.data.length) ||
                          r.isString(e.data)
                        )
                      ? "data: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.AppendMeta) return e;
                    const t = new o.api.AppendMeta();
                    return (
                      null != e.key && (t.key = String(e.key)),
                      null != e.data &&
                        ("string" === typeof e.data
                          ? r.base64.decode(
                              e.data,
                              (t.data = r.newBuffer(
                                r.base64.length(e.data)
                              )),
                              0
                            )
                          : e.data.length && (t.data = e.data)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.key = ""),
                        t.bytes === String
                          ? (n.data = "")
                          : ((n.data = []),
                            t.bytes !== Array &&
                              (n.data = r.newBuffer(n.data)))),
                      null != e.key &&
                        e.hasOwnProperty("key") &&
                        (n.key = e.key),
                      null != e.data &&
                        e.hasOwnProperty("data") &&
                        (n.data =
                          t.bytes === String
                            ? r.base64.encode(e.data, 0, e.data.length)
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.data)
                            : e.data),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.BootStatus = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.stage = 0),
                  (i.prototype.progress = 0),
                  (i.prototype.total = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.stage &&
                        Object.hasOwnProperty.call(e, "stage") &&
                        t.uint32(8).int32(e.stage),
                      null != e.progress &&
                        Object.hasOwnProperty.call(e, "progress") &&
                        t.uint32(16).uint32(e.progress),
                      null != e.total &&
                        Object.hasOwnProperty.call(e, "total") &&
                        t.uint32(24).uint32(e.total),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.BootStatus();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.stage = e.int32();
                          break;
                        case 2:
                          i.progress = e.uint32();
                          break;
                        case 3:
                          i.total = e.uint32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.stage && e.hasOwnProperty("stage"))
                      switch (e.stage) {
                        default:
                          return "stage: enum value expected";
                        case 0:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                      }
                    return null != e.progress &&
                      e.hasOwnProperty("progress") &&
                      !r.isInteger(e.progress)
                      ? "progress: integer expected"
                      : null != e.total &&
                        e.hasOwnProperty("total") &&
                        !r.isInteger(e.total)
                      ? "total: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.BootStatus) return e;
                    const t = new o.api.BootStatus();
                    switch (e.stage) {
                      case "HANDSHAKE":
                      case 0:
                        t.stage = 0;
                        break;
                      case "ACQUIRING":
                      case 3:
                        t.stage = 3;
                        break;
                      case "COMPLETE":
                      case 4:
                        t.stage = 4;
                        break;
                      case "PROXY":
                      case 5:
                        t.stage = 5;
                        break;
                      case "PULL_FILES":
                      case 6:
                        t.stage = 6;
                        break;
                      case "LOAD_BLOCK":
                      case 7:
                        t.stage = 7;
                        break;
                      case "RETRY":
                      case 8:
                        t.stage = 8;
                    }
                    return (
                      null != e.progress &&
                        (t.progress = e.progress >>> 0),
                      null != e.total && (t.total = e.total >>> 0),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.stage = t.enums === String ? "HANDSHAKE" : 0),
                        (n.progress = 0),
                        (n.total = 0)),
                      null != e.stage &&
                        e.hasOwnProperty("stage") &&
                        (n.stage =
                          t.enums === String
                            ? o.api.BootStatus.Stage[e.stage]
                            : e.stage),
                      null != e.progress &&
                        e.hasOwnProperty("progress") &&
                        (n.progress = e.progress),
                      null != e.total &&
                        e.hasOwnProperty("total") &&
                        (n.total = e.total),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Stage = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "HANDSHAKE")] = 0),
                      (t[(e[3] = "ACQUIRING")] = 3),
                      (t[(e[4] = "COMPLETE")] = 4),
                      (t[(e[5] = "PROXY")] = 5),
                      (t[(e[6] = "PULL_FILES")] = 6),
                      (t[(e[7] = "LOAD_BLOCK")] = 7),
                      (t[(e[8] = "RETRY")] = 8),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.Pid1Config = (() => {
                  function i(e) {
                    if (((this.env = {}), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.cwd = ""),
                  (i.prototype.language = ""),
                  (i.prototype.env = r.emptyObject),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.cwd &&
                        Object.hasOwnProperty.call(e, "cwd") &&
                        t.uint32(10).string(e.cwd),
                      null != e.language &&
                        Object.hasOwnProperty.call(e, "language") &&
                        t.uint32(18).string(e.language),
                      null != e.env &&
                        Object.hasOwnProperty.call(e, "env"))
                    )
                      for (
                        let r = Object.keys(e.env), o = 0;
                        o < r.length;
                        ++o
                      )
                        t.uint32(26)
                          .fork()
                          .uint32(10)
                          .string(r[o])
                          .uint32(18)
                          .string(e.env[r[o]])
                          .ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var i,
                        a,
                        s = void 0 === n ? e.len : e.pos + n,
                        l = new o.api.Pid1Config();
                      e.pos < s;

                    ) {
                      const c = e.uint32();
                      switch (c >>> 3) {
                        case 1:
                          l.cwd = e.string();
                          break;
                        case 2:
                          l.language = e.string();
                          break;
                        case 3:
                          l.env === r.emptyObject && (l.env = {});
                          const u = e.uint32() + e.pos;
                          for (i = "", a = ""; e.pos < u; ) {
                            const p = e.uint32();
                            switch (p >>> 3) {
                              case 1:
                                i = e.string();
                                break;
                              case 2:
                                a = e.string();
                                break;
                              default:
                                e.skipType(7 & p);
                            }
                          }
                          l.env[i] = a;
                          break;
                        default:
                          e.skipType(7 & c);
                      }
                    }
                    return l;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.cwd &&
                      e.hasOwnProperty("cwd") &&
                      !r.isString(e.cwd)
                    )
                      return "cwd: string expected";
                    if (
                      null != e.language &&
                      e.hasOwnProperty("language") &&
                      !r.isString(e.language)
                    )
                      return "language: string expected";
                    if (null != e.env && e.hasOwnProperty("env")) {
                      if (!r.isObject(e.env))
                        return "env: object expected";
                      for (
                        let t = Object.keys(e.env), n = 0;
                        n < t.length;
                        ++n
                      )
                        if (!r.isString(e.env[t[n]]))
                          return "env: string{k:string} expected";
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Pid1Config) return e;
                    const t = new o.api.Pid1Config();
                    if (
                      (null != e.cwd && (t.cwd = String(e.cwd)),
                      null != e.language &&
                        (t.language = String(e.language)),
                      e.env)
                    ) {
                      if ("object" !== typeof e.env)
                        throw TypeError(
                          ".api.Pid1Config.env: object expected"
                        );
                      t.env = {};
                      for (
                        let n = Object.keys(e.env), r = 0;
                        r < n.length;
                        ++r
                      )
                        t.env[n[r]] = String(e.env[n[r]]);
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    let n;
                    const r = {};
                    if (
                      ((t.objects || t.defaults) && (r.env = {}),
                      t.defaults && ((r.cwd = ""), (r.language = "")),
                      null != e.cwd &&
                        e.hasOwnProperty("cwd") &&
                        (r.cwd = e.cwd),
                      null != e.language &&
                        e.hasOwnProperty("language") &&
                        (r.language = e.language),
                      e.env && (n = Object.keys(e.env)).length)
                    ) {
                      r.env = {};
                      for (let o = 0; o < n.length; ++o)
                        r.env[n[o]] = e.env[n[o]];
                    }
                    return r;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.FSLock = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.name = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.FSLock();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.name = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.name &&
                        e.hasOwnProperty("name") &&
                        !r.isString(e.name)
                      ? "name: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.FSLock) return e;
                    const t = new o.api.FSLock();
                    return null != e.name && (t.name = String(e.name)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.name = ""),
                      null != e.name &&
                        e.hasOwnProperty("name") &&
                        (n.name = e.name),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.FSSnapshot = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.FSSnapshot();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.FSSnapshot
                      ? e
                      : new o.api.FSSnapshot();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.SubscribeFile = (() => {
                  function i(e) {
                    if (((this.files = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.files = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.files && e.files.length)
                    )
                      for (let r = 0; r < e.files.length; ++r)
                        o.api.File.encode(
                          e.files[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.SubscribeFile();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.files && i.files.length) || (i.files = []),
                            i.files.push(
                              o.api.File.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.files && e.hasOwnProperty("files")) {
                      if (!Array.isArray(e.files))
                        return "files: array expected";
                      for (let t = 0; t < e.files.length; ++t) {
                        const n = o.api.File.verify(e.files[t]);
                        if (n) return "files." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.SubscribeFile) return e;
                    const t = new o.api.SubscribeFile();
                    if (e.files) {
                      if (!Array.isArray(e.files))
                        throw TypeError(
                          ".api.SubscribeFile.files: array expected"
                        );
                      t.files = [];
                      for (let n = 0; n < e.files.length; ++n) {
                        if ("object" !== typeof e.files[n])
                          throw TypeError(
                            ".api.SubscribeFile.files: object expected"
                          );
                        t.files[n] = o.api.File.fromObject(e.files[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.files = []),
                      e.files && e.files.length)
                    ) {
                      n.files = [];
                      for (let r = 0; r < e.files.length; ++r)
                        n.files[r] = o.api.File.toObject(e.files[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.FileEvent = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.file = null),
                  (r.prototype.dest = null),
                  (r.prototype.op = 0),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.op &&
                        Object.hasOwnProperty.call(e, "op") &&
                        t.uint32(16).int32(e.op),
                      null != e.dest &&
                        Object.hasOwnProperty.call(e, "dest") &&
                        o.api.File.encode(
                          e.dest,
                          t.uint32(26).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.FileEvent();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        case 3:
                          i.dest = o.api.File.decode(e, e.uint32());
                          break;
                        case 2:
                          i.op = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    let t;
                    if (
                      null != e.file &&
                      e.hasOwnProperty("file") &&
                      (t = o.api.File.verify(e.file))
                    )
                      return "file." + t;
                    if (
                      null != e.dest &&
                      e.hasOwnProperty("dest") &&
                      (t = o.api.File.verify(e.dest))
                    )
                      return "dest." + t;
                    if (null != e.op && e.hasOwnProperty("op"))
                      switch (e.op) {
                        default:
                          return "op: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                      }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.FileEvent) return e;
                    const t = new o.api.FileEvent();
                    if (null != e.file) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.FileEvent.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    if (null != e.dest) {
                      if ("object" !== typeof e.dest)
                        throw TypeError(
                          ".api.FileEvent.dest: object expected"
                        );
                      t.dest = o.api.File.fromObject(e.dest);
                    }
                    switch (e.op) {
                      case "Create":
                      case 0:
                        t.op = 0;
                        break;
                      case "Move":
                      case 1:
                        t.op = 1;
                        break;
                      case "Remove":
                      case 2:
                        t.op = 2;
                        break;
                      case "Modify":
                      case 3:
                        t.op = 3;
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.file = null),
                        (n.op = t.enums === String ? "Create" : 0),
                        (n.dest = null)),
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        (n.file = o.api.File.toObject(e.file, t)),
                      null != e.op &&
                        e.hasOwnProperty("op") &&
                        (n.op =
                          t.enums === String
                            ? o.api.FileEvent.Op[e.op]
                            : e.op),
                      null != e.dest &&
                        e.hasOwnProperty("dest") &&
                        (n.dest = o.api.File.toObject(e.dest, t)),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (r.Op = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "Create")] = 0),
                      (t[(e[1] = "Move")] = 1),
                      (t[(e[2] = "Remove")] = 2),
                      (t[(e[3] = "Modify")] = 3),
                      t
                    );
                  })()),
                  r;
                })()),
                (i.Flush = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Flush();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Flush
                      ? e
                      : new o.api.Flush();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.OTLinkFile = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.file = null),
                  (r.prototype.highConsistency = !1),
                  (r.prototype.OBSOLETEUseModTime = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.highConsistency &&
                        Object.hasOwnProperty.call(
                          e,
                          "highConsistency"
                        ) &&
                        t.uint32(16).bool(e.highConsistency),
                      null != e.OBSOLETEUseModTime &&
                        Object.hasOwnProperty.call(
                          e,
                          "OBSOLETEUseModTime"
                        ) &&
                        t.uint32(24).bool(e.OBSOLETEUseModTime),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTLinkFile();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        case 2:
                          i.highConsistency = e.bool();
                          break;
                        case 3:
                          i.OBSOLETEUseModTime = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.file && e.hasOwnProperty("file")) {
                      const t = o.api.File.verify(e.file);
                      if (t) return "file." + t;
                    }
                    return null != e.highConsistency &&
                      e.hasOwnProperty("highConsistency") &&
                      "boolean" !== typeof e.highConsistency
                      ? "highConsistency: boolean expected"
                      : null != e.OBSOLETEUseModTime &&
                        e.hasOwnProperty("OBSOLETEUseModTime") &&
                        "boolean" !== typeof e.OBSOLETEUseModTime
                      ? "OBSOLETEUseModTime: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.OTLinkFile) return e;
                    const t = new o.api.OTLinkFile();
                    if (null != e.file) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.OTLinkFile.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    return (
                      null != e.highConsistency &&
                        (t.highConsistency = Boolean(e.highConsistency)),
                      null != e.OBSOLETEUseModTime &&
                        (t.OBSOLETEUseModTime = Boolean(
                          e.OBSOLETEUseModTime
                        )),
                      t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.file = null),
                        (n.highConsistency = !1),
                        (n.OBSOLETEUseModTime = !1)),
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        (n.file = o.api.File.toObject(e.file, t)),
                      null != e.highConsistency &&
                        e.hasOwnProperty("highConsistency") &&
                        (n.highConsistency = e.highConsistency),
                      null != e.OBSOLETEUseModTime &&
                        e.hasOwnProperty("OBSOLETEUseModTime") &&
                        (n.OBSOLETEUseModTime = e.OBSOLETEUseModTime),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Auth = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.token = ""),
                  (i.prototype.containerID = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        t.uint32(10).string(e.token),
                      null != e.containerID &&
                        Object.hasOwnProperty.call(e, "containerID") &&
                        t.uint32(18).string(e.containerID),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Auth();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.token = e.string();
                          break;
                        case 2:
                          i.containerID = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.token &&
                        e.hasOwnProperty("token") &&
                        !r.isString(e.token)
                      ? "token: string expected"
                      : null != e.containerID &&
                        e.hasOwnProperty("containerID") &&
                        !r.isString(e.containerID)
                      ? "containerID: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Auth) return e;
                    const t = new o.api.Auth();
                    return (
                      null != e.token && (t.token = String(e.token)),
                      null != e.containerID &&
                        (t.containerID = String(e.containerID)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.token = ""), (n.containerID = "")),
                      null != e.token &&
                        e.hasOwnProperty("token") &&
                        (n.token = e.token),
                      null != e.containerID &&
                        e.hasOwnProperty("containerID") &&
                        (n.containerID = e.containerID),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.VCREntry = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.timestamp = r.Long
                    ? r.Long.fromBits(0, 0, !0)
                    : 0),
                  (i.prototype.direction = 0),
                  (i.prototype.command = null),
                  (i.prototype.uid = ""),
                  (i.prototype.replid = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.timestamp &&
                        Object.hasOwnProperty.call(e, "timestamp") &&
                        t.uint32(8).uint64(e.timestamp),
                      null != e.direction &&
                        Object.hasOwnProperty.call(e, "direction") &&
                        t.uint32(16).int32(e.direction),
                      null != e.command &&
                        Object.hasOwnProperty.call(e, "command") &&
                        o.api.Command.encode(
                          e.command,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.uid &&
                        Object.hasOwnProperty.call(e, "uid") &&
                        t.uint32(34).string(e.uid),
                      null != e.replid &&
                        Object.hasOwnProperty.call(e, "replid") &&
                        t.uint32(42).string(e.replid),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.VCREntry();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.timestamp = e.uint64();
                          break;
                        case 2:
                          i.direction = e.int32();
                          break;
                        case 3:
                          i.command = o.api.Command.decode(e, e.uint32());
                          break;
                        case 4:
                          i.uid = e.string();
                          break;
                        case 5:
                          i.replid = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.timestamp &&
                      e.hasOwnProperty("timestamp") &&
                      !r.isInteger(e.timestamp) &&
                      !(
                        e.timestamp &&
                        r.isInteger(e.timestamp.low) &&
                        r.isInteger(e.timestamp.high)
                      )
                    )
                      return "timestamp: integer|Long expected";
                    if (
                      null != e.direction &&
                      e.hasOwnProperty("direction")
                    )
                      switch (e.direction) {
                        default:
                          return "direction: enum value expected";
                        case 0:
                        case 1:
                      }
                    if (
                      null != e.command &&
                      e.hasOwnProperty("command")
                    ) {
                      const t = o.api.Command.verify(e.command);
                      if (t) return "command." + t;
                    }
                    return null != e.uid &&
                      e.hasOwnProperty("uid") &&
                      !r.isString(e.uid)
                      ? "uid: string expected"
                      : null != e.replid &&
                        e.hasOwnProperty("replid") &&
                        !r.isString(e.replid)
                      ? "replid: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.VCREntry) return e;
                    const t = new o.api.VCREntry();
                    switch (
                      (null != e.timestamp &&
                        (r.Long
                          ? ((t.timestamp = r.Long.fromValue(
                              e.timestamp
                            )).unsigned = !0)
                          : "string" === typeof e.timestamp
                          ? (t.timestamp = parseInt(e.timestamp, 10))
                          : "number" === typeof e.timestamp
                          ? (t.timestamp = e.timestamp)
                          : "object" === typeof e.timestamp &&
                            (t.timestamp = new r.LongBits(
                              e.timestamp.low >>> 0,
                              e.timestamp.high >>> 0
                            ).toNumber(!0))),
                      e.direction)
                    ) {
                      case "IN":
                      case 0:
                        t.direction = 0;
                        break;
                      case "OUT":
                      case 1:
                        t.direction = 1;
                    }
                    if (null != e.command) {
                      if ("object" !== typeof e.command)
                        throw TypeError(
                          ".api.VCREntry.command: object expected"
                        );
                      t.command = o.api.Command.fromObject(e.command);
                    }
                    return (
                      null != e.uid && (t.uid = String(e.uid)),
                      null != e.replid && (t.replid = String(e.replid)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (t.defaults) {
                      if (r.Long) {
                        const i = new r.Long(0, 0, !0);
                        n.timestamp =
                          t.longs === String
                            ? i.toString()
                            : t.longs === Number
                            ? i.toNumber()
                            : i;
                      } else n.timestamp = t.longs === String ? "0" : 0;
                      (n.direction = t.enums === String ? "IN" : 0),
                        (n.command = null),
                        (n.uid = ""),
                        (n.replid = "");
                    }
                    return (
                      null != e.timestamp &&
                        e.hasOwnProperty("timestamp") &&
                        ("number" === typeof e.timestamp
                          ? (n.timestamp =
                              t.longs === String
                                ? String(e.timestamp)
                                : e.timestamp)
                          : (n.timestamp =
                              t.longs === String
                                ? r.Long.prototype.toString.call(
                                    e.timestamp
                                  )
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.timestamp.low >>> 0,
                                    e.timestamp.high >>> 0
                                  ).toNumber(!0)
                                : e.timestamp)),
                      null != e.direction &&
                        e.hasOwnProperty("direction") &&
                        (n.direction =
                          t.enums === String
                            ? o.api.VCREntry.Direction[e.direction]
                            : e.direction),
                      null != e.command &&
                        e.hasOwnProperty("command") &&
                        (n.command = o.api.Command.toObject(
                          e.command,
                          t
                        )),
                      null != e.uid &&
                        e.hasOwnProperty("uid") &&
                        (n.uid = e.uid),
                      null != e.replid &&
                        e.hasOwnProperty("replid") &&
                        (n.replid = e.replid),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Direction = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "IN")] = 0), (t[(e[1] = "OUT")] = 1), t
                    );
                  })()),
                  i;
                })()),
                (i.StartVCR = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.StartVCR();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.StartVCR
                      ? e
                      : new o.api.StartVCR();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.ReadVCR = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ReadVCR();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.ReadVCR
                      ? e
                      : new o.api.ReadVCR();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.VCRLog = (() => {
                  function i(e) {
                    if (((this.log = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.log = r.emptyArray),
                  (i.prototype.logfile = null),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.log && e.log.length)
                    )
                      for (let r = 0; r < e.log.length; ++r)
                        o.api.VCREntry.encode(
                          e.log[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.logfile &&
                        Object.hasOwnProperty.call(e, "logfile") &&
                        o.api.File.encode(
                          e.logfile,
                          t.uint32(18).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.VCRLog();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.log && i.log.length) || (i.log = []),
                            i.log.push(
                              o.api.VCREntry.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.logfile = o.api.File.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.log && e.hasOwnProperty("log")) {
                      if (!Array.isArray(e.log))
                        return "log: array expected";
                      for (let t = 0; t < e.log.length; ++t)
                        if ((n = o.api.VCREntry.verify(e.log[t])))
                          return "log." + n;
                    }
                    var n;
                    return null != e.logfile &&
                      e.hasOwnProperty("logfile") &&
                      (n = o.api.File.verify(e.logfile))
                      ? "logfile." + n
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.VCRLog) return e;
                    const t = new o.api.VCRLog();
                    if (e.log) {
                      if (!Array.isArray(e.log))
                        throw TypeError(
                          ".api.VCRLog.log: array expected"
                        );
                      t.log = [];
                      for (let n = 0; n < e.log.length; ++n) {
                        if ("object" !== typeof e.log[n])
                          throw TypeError(
                            ".api.VCRLog.log: object expected"
                          );
                        t.log[n] = o.api.VCREntry.fromObject(e.log[n]);
                      }
                    }
                    if (null != e.logfile) {
                      if ("object" !== typeof e.logfile)
                        throw TypeError(
                          ".api.VCRLog.logfile: object expected"
                        );
                      t.logfile = o.api.File.fromObject(e.logfile);
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.log = []),
                      t.defaults && (n.logfile = null),
                      e.log && e.log.length)
                    ) {
                      n.log = [];
                      for (let r = 0; r < e.log.length; ++r)
                        n.log[r] = o.api.VCREntry.toObject(e.log[r], t);
                    }
                    return (
                      null != e.logfile &&
                        e.hasOwnProperty("logfile") &&
                        (n.logfile = o.api.File.toObject(e.logfile, t)),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ExecInfo = (() => {
                  function i(e) {
                    if (((this.command = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.command = r.emptyArray),
                  (i.prototype.reason = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.command && e.command.length)
                    )
                      for (let r = 0; r < e.command.length; ++r)
                        t.uint32(10).string(e.command[r]);
                    return (
                      null != e.reason &&
                        Object.hasOwnProperty.call(e, "reason") &&
                        t.uint32(18).string(e.reason),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ExecInfo();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.command && i.command.length) ||
                            (i.command = []),
                            i.command.push(e.string());
                          break;
                        case 2:
                          i.reason = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.command &&
                      e.hasOwnProperty("command")
                    ) {
                      if (!Array.isArray(e.command))
                        return "command: array expected";
                      for (let t = 0; t < e.command.length; ++t)
                        if (!r.isString(e.command[t]))
                          return "command: string[] expected";
                    }
                    return null != e.reason &&
                      e.hasOwnProperty("reason") &&
                      !r.isString(e.reason)
                      ? "reason: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ExecInfo) return e;
                    const t = new o.api.ExecInfo();
                    if (e.command) {
                      if (!Array.isArray(e.command))
                        throw TypeError(
                          ".api.ExecInfo.command: array expected"
                        );
                      t.command = [];
                      for (let n = 0; n < e.command.length; ++n)
                        t.command[n] = String(e.command[n]);
                    }
                    return (
                      null != e.reason && (t.reason = String(e.reason)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.command = []),
                      t.defaults && (n.reason = ""),
                      e.command && e.command.length)
                    ) {
                      n.command = [];
                      for (let r = 0; r < e.command.length; ++r)
                        n.command[r] = e.command[r];
                    }
                    return (
                      null != e.reason &&
                        e.hasOwnProperty("reason") &&
                        (n.reason = e.reason),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Debug = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.text = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.text &&
                        Object.hasOwnProperty.call(e, "text") &&
                        t.uint32(10).string(e.text),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Debug();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.text = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.text &&
                        e.hasOwnProperty("text") &&
                        !r.isString(e.text)
                      ? "text: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Debug) return e;
                    const t = new o.api.Debug();
                    return null != e.text && (t.text = String(e.text)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.text = ""),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        (n.text = e.text),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.FileAuthMethod = (() => {
                  const e = {}, t = Object.create(e);
                  return (
                    (t[(e[0] = "GET")] = 0),
                    (t[(e[1] = "HEAD")] = 1),
                    (t[(e[2] = "PUT")] = 2),
                    (t[(e[3] = "DELETE")] = 3),
                    t
                  );
                })()),
                (i.FileAuthReq = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.file = null),
                  (r.prototype.method = 0),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.method &&
                        Object.hasOwnProperty.call(e, "method") &&
                        t.uint32(16).int32(e.method),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.FileAuthReq();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        case 2:
                          i.method = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.file && e.hasOwnProperty("file")) {
                      const t = o.api.File.verify(e.file);
                      if (t) return "file." + t;
                    }
                    if (null != e.method && e.hasOwnProperty("method"))
                      switch (e.method) {
                        default:
                          return "method: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                      }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.FileAuthReq) return e;
                    const t = new o.api.FileAuthReq();
                    if (null != e.file) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.FileAuthReq.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    switch (e.method) {
                      case "GET":
                      case 0:
                        t.method = 0;
                        break;
                      case "HEAD":
                      case 1:
                        t.method = 1;
                        break;
                      case "PUT":
                      case 2:
                        t.method = 2;
                        break;
                      case "DELETE":
                      case 3:
                        t.method = 3;
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.file = null),
                        (n.method = t.enums === String ? "GET" : 0)),
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        (n.file = o.api.File.toObject(e.file, t)),
                      null != e.method &&
                        e.hasOwnProperty("method") &&
                        (n.method =
                          t.enums === String
                            ? o.api.FileAuthMethod[e.method]
                            : e.method),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.MultiFileAuthRes = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.put = null),
                  (r.prototype.del = null),
                  (r.prototype.get = null),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.put &&
                        Object.hasOwnProperty.call(e, "put") &&
                        o.api.FileAuthRes.encode(
                          e.put,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.del &&
                        Object.hasOwnProperty.call(e, "del") &&
                        o.api.FileAuthRes.encode(
                          e.del,
                          t.uint32(18).fork()
                        ).ldelim(),
                      null != e.get &&
                        Object.hasOwnProperty.call(e, "get") &&
                        o.api.FileAuthRes.encode(
                          e.get,
                          t.uint32(26).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.MultiFileAuthRes();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.put = o.api.FileAuthRes.decode(e, e.uint32());
                          break;
                        case 2:
                          i.del = o.api.FileAuthRes.decode(e, e.uint32());
                          break;
                        case 3:
                          i.get = o.api.FileAuthRes.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.put &&
                        e.hasOwnProperty("put") &&
                        (t = o.api.FileAuthRes.verify(e.put))
                      ? "put." + t
                      : null != e.del &&
                        e.hasOwnProperty("del") &&
                        (t = o.api.FileAuthRes.verify(e.del))
                      ? "del." + t
                      : null != e.get &&
                        e.hasOwnProperty("get") &&
                        (t = o.api.FileAuthRes.verify(e.get))
                      ? "get." + t
                      : null;
                    var t;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.MultiFileAuthRes) return e;
                    const t = new o.api.MultiFileAuthRes();
                    if (null != e.put) {
                      if ("object" !== typeof e.put)
                        throw TypeError(
                          ".api.MultiFileAuthRes.put: object expected"
                        );
                      t.put = o.api.FileAuthRes.fromObject(e.put);
                    }
                    if (null != e.del) {
                      if ("object" !== typeof e.del)
                        throw TypeError(
                          ".api.MultiFileAuthRes.del: object expected"
                        );
                      t.del = o.api.FileAuthRes.fromObject(e.del);
                    }
                    if (null != e.get) {
                      if ("object" !== typeof e.get)
                        throw TypeError(
                          ".api.MultiFileAuthRes.get: object expected"
                        );
                      t.get = o.api.FileAuthRes.fromObject(e.get);
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.put = null), (n.del = null), (n.get = null)),
                      null != e.put &&
                        e.hasOwnProperty("put") &&
                        (n.put = o.api.FileAuthRes.toObject(e.put, t)),
                      null != e.del &&
                        e.hasOwnProperty("del") &&
                        (n.del = o.api.FileAuthRes.toObject(e.del, t)),
                      null != e.get &&
                        e.hasOwnProperty("get") &&
                        (n.get = o.api.FileAuthRes.toObject(e.get, t)),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.FileAuthRes = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.file = null),
                  (i.prototype.url = ""),
                  (i.prototype.method = 0),
                  (i.prototype.expire = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.prototype.error = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.url &&
                        Object.hasOwnProperty.call(e, "url") &&
                        t.uint32(18).string(e.url),
                      null != e.method &&
                        Object.hasOwnProperty.call(e, "method") &&
                        t.uint32(24).int32(e.method),
                      null != e.expire &&
                        Object.hasOwnProperty.call(e, "expire") &&
                        t.uint32(32).int64(e.expire),
                      null != e.error &&
                        Object.hasOwnProperty.call(e, "error") &&
                        t.uint32(42).string(e.error),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.FileAuthRes();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        case 2:
                          i.url = e.string();
                          break;
                        case 3:
                          i.method = e.int32();
                          break;
                        case 4:
                          i.expire = e.int64();
                          break;
                        case 5:
                          i.error = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.file && e.hasOwnProperty("file")) {
                      const t = o.api.File.verify(e.file);
                      if (t) return "file." + t;
                    }
                    if (
                      null != e.url &&
                      e.hasOwnProperty("url") &&
                      !r.isString(e.url)
                    )
                      return "url: string expected";
                    if (null != e.method && e.hasOwnProperty("method"))
                      switch (e.method) {
                        default:
                          return "method: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                      }
                    return null == e.expire ||
                      !e.hasOwnProperty("expire") ||
                      r.isInteger(e.expire) ||
                      (e.expire &&
                        r.isInteger(e.expire.low) &&
                        r.isInteger(e.expire.high))
                      ? null != e.error &&
                        e.hasOwnProperty("error") &&
                        !r.isString(e.error)
                        ? "error: string expected"
                        : null
                      : "expire: integer|Long expected";
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.FileAuthRes) return e;
                    const t = new o.api.FileAuthRes();
                    if (null != e.file) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.FileAuthRes.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    switch (
                      (null != e.url && (t.url = String(e.url)), e.method)
                    ) {
                      case "GET":
                      case 0:
                        t.method = 0;
                        break;
                      case "HEAD":
                      case 1:
                        t.method = 1;
                        break;
                      case "PUT":
                      case 2:
                        t.method = 2;
                        break;
                      case "DELETE":
                      case 3:
                        t.method = 3;
                    }
                    return (
                      null != e.expire &&
                        (r.Long
                          ? ((t.expire = r.Long.fromValue(
                              e.expire
                            )).unsigned = !1)
                          : "string" === typeof e.expire
                          ? (t.expire = parseInt(e.expire, 10))
                          : "number" === typeof e.expire
                          ? (t.expire = e.expire)
                          : "object" === typeof e.expire &&
                            (t.expire = new r.LongBits(
                              e.expire.low >>> 0,
                              e.expire.high >>> 0
                            ).toNumber())),
                      null != e.error && (t.error = String(e.error)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (t.defaults) {
                      if (
                        ((n.file = null),
                        (n.url = ""),
                        (n.method = t.enums === String ? "GET" : 0),
                        r.Long)
                      ) {
                        const i = new r.Long(0, 0, !1);
                        n.expire =
                          t.longs === String
                            ? i.toString()
                            : t.longs === Number
                            ? i.toNumber()
                            : i;
                      } else n.expire = t.longs === String ? "0" : 0;
                      n.error = "";
                    }
                    return (
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        (n.file = o.api.File.toObject(e.file, t)),
                      null != e.url &&
                        e.hasOwnProperty("url") &&
                        (n.url = e.url),
                      null != e.method &&
                        e.hasOwnProperty("method") &&
                        (n.method =
                          t.enums === String
                            ? o.api.FileAuthMethod[e.method]
                            : e.method),
                      null != e.expire &&
                        e.hasOwnProperty("expire") &&
                        ("number" === typeof e.expire
                          ? (n.expire =
                              t.longs === String
                                ? String(e.expire)
                                : e.expire)
                          : (n.expire =
                              t.longs === String
                                ? r.Long.prototype.toString.call(e.expire)
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.expire.low >>> 0,
                                    e.expire.high >>> 0
                                  ).toNumber()
                                : e.expire)),
                      null != e.error &&
                        e.hasOwnProperty("error") &&
                        (n.error = e.error),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ListObjects = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.prefix = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.prefix &&
                        Object.hasOwnProperty.call(e, "prefix") &&
                        t.uint32(10).string(e.prefix),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ListObjects();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.prefix = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.prefix &&
                        e.hasOwnProperty("prefix") &&
                        !r.isString(e.prefix)
                      ? "prefix: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ListObjects) return e;
                    const t = new o.api.ListObjects();
                    return (
                      null != e.prefix && (t.prefix = String(e.prefix)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.prefix = ""),
                      null != e.prefix &&
                        e.hasOwnProperty("prefix") &&
                        (n.prefix = e.prefix),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ListObjectsResp = (() => {
                  function i(e) {
                    if (((this.objects = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.objects = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.objects && e.objects.length)
                    )
                      for (let r = 0; r < e.objects.length; ++r)
                        t.uint32(10).string(e.objects[r]);
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ListObjectsResp();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.objects && i.objects.length) ||
                            (i.objects = []),
                            i.objects.push(e.string());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.objects &&
                      e.hasOwnProperty("objects")
                    ) {
                      if (!Array.isArray(e.objects))
                        return "objects: array expected";
                      for (let t = 0; t < e.objects.length; ++t)
                        if (!r.isString(e.objects[t]))
                          return "objects: string[] expected";
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ListObjectsResp) return e;
                    const t = new o.api.ListObjectsResp();
                    if (e.objects) {
                      if (!Array.isArray(e.objects))
                        throw TypeError(
                          ".api.ListObjectsResp.objects: array expected"
                        );
                      t.objects = [];
                      for (let n = 0; n < e.objects.length; ++n)
                        t.objects[n] = String(e.objects[n]);
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.objects = []),
                      e.objects && e.objects.length)
                    ) {
                      n.objects = [];
                      for (let r = 0; r < e.objects.length; ++r)
                        n.objects[r] = e.objects[r];
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Disconnect = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.error = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.error &&
                        Object.hasOwnProperty.call(e, "error") &&
                        t.uint32(10).string(e.error),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Disconnect();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.error = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.error &&
                        e.hasOwnProperty("error") &&
                        !r.isString(e.error)
                      ? "error: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Disconnect) return e;
                    const t = new o.api.Disconnect();
                    return (
                      null != e.error && (t.error = String(e.error)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.error = ""),
                      null != e.error &&
                        e.hasOwnProperty("error") &&
                        (n.error = e.error),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Send = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.buff = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.buff &&
                        Object.hasOwnProperty.call(e, "buff") &&
                        t.uint32(10).bytes(e.buff),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Send();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.buff = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.buff &&
                        e.hasOwnProperty("buff") &&
                        !(
                          (e.buff && "number" === typeof e.buff.length) ||
                          r.isString(e.buff)
                        )
                      ? "buff: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Send) return e;
                    const t = new o.api.Send();
                    return (
                      null != e.buff &&
                        ("string" === typeof e.buff
                          ? r.base64.decode(
                              e.buff,
                              (t.buff = r.newBuffer(
                                r.base64.length(e.buff)
                              )),
                              0
                            )
                          : e.buff.length && (t.buff = e.buff)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        (t.bytes === String
                          ? (n.buff = "")
                          : ((n.buff = []),
                            t.bytes !== Array &&
                              (n.buff = r.newBuffer(n.buff)))),
                      null != e.buff &&
                        e.hasOwnProperty("buff") &&
                        (n.buff =
                          t.bytes === String
                            ? r.base64.encode(e.buff, 0, e.buff.length)
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.buff)
                            : e.buff),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Recv = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.buff = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.buff &&
                        Object.hasOwnProperty.call(e, "buff") &&
                        t.uint32(10).bytes(e.buff),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Recv();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.buff = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.buff &&
                        e.hasOwnProperty("buff") &&
                        !(
                          (e.buff && "number" === typeof e.buff.length) ||
                          r.isString(e.buff)
                        )
                      ? "buff: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Recv) return e;
                    const t = new o.api.Recv();
                    return (
                      null != e.buff &&
                        ("string" === typeof e.buff
                          ? r.base64.decode(
                              e.buff,
                              (t.buff = r.newBuffer(
                                r.base64.length(e.buff)
                              )),
                              0
                            )
                          : e.buff.length && (t.buff = e.buff)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        (t.bytes === String
                          ? (n.buff = "")
                          : ((n.buff = []),
                            t.bytes !== Array &&
                              (n.buff = r.newBuffer(n.buff)))),
                      null != e.buff &&
                        e.hasOwnProperty("buff") &&
                        (n.buff =
                          t.bytes === String
                            ? r.base64.encode(e.buff, 0, e.buff.length)
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.buff)
                            : e.buff),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Connect = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.proto = ""),
                  (i.prototype.addr = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.proto &&
                        Object.hasOwnProperty.call(e, "proto") &&
                        t.uint32(10).string(e.proto),
                      null != e.addr &&
                        Object.hasOwnProperty.call(e, "addr") &&
                        t.uint32(18).string(e.addr),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Connect();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.proto = e.string();
                          break;
                        case 2:
                          i.addr = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.proto &&
                        e.hasOwnProperty("proto") &&
                        !r.isString(e.proto)
                      ? "proto: string expected"
                      : null != e.addr &&
                        e.hasOwnProperty("addr") &&
                        !r.isString(e.addr)
                      ? "addr: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Connect) return e;
                    const t = new o.api.Connect();
                    return (
                      null != e.proto && (t.proto = String(e.proto)),
                      null != e.addr && (t.addr = String(e.addr)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.proto = ""), (n.addr = "")),
                      null != e.proto &&
                        e.hasOwnProperty("proto") &&
                        (n.proto = e.proto),
                      null != e.addr &&
                        e.hasOwnProperty("addr") &&
                        (n.addr = e.addr),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Hint = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.text = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.text &&
                        Object.hasOwnProperty.call(e, "text") &&
                        t.uint32(10).string(e.text),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Hint();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.text = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.text &&
                        e.hasOwnProperty("text") &&
                        !r.isString(e.text)
                      ? "text: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Hint) return e;
                    const t = new o.api.Hint();
                    return null != e.text && (t.text = String(e.text)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.text = ""),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        (n.text = e.text),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Ping = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Ping();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Ping ? e : new o.api.Ping();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Pong = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Pong();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Pong ? e : new o.api.Pong();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Hello = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.userid = 0),
                  (i.prototype.username = ""),
                  (i.prototype.token = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.userid &&
                        Object.hasOwnProperty.call(e, "userid") &&
                        t.uint32(8).uint32(e.userid),
                      null != e.username &&
                        Object.hasOwnProperty.call(e, "username") &&
                        t.uint32(18).string(e.username),
                      null != e.token &&
                        Object.hasOwnProperty.call(e, "token") &&
                        t.uint32(26).string(e.token),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Hello();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.userid = e.uint32();
                          break;
                        case 2:
                          i.username = e.string();
                          break;
                        case 3:
                          i.token = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.userid &&
                        e.hasOwnProperty("userid") &&
                        !r.isInteger(e.userid)
                      ? "userid: integer expected"
                      : null != e.username &&
                        e.hasOwnProperty("username") &&
                        !r.isString(e.username)
                      ? "username: string expected"
                      : null != e.token &&
                        e.hasOwnProperty("token") &&
                        !r.isString(e.token)
                      ? "token: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Hello) return e;
                    const t = new o.api.Hello();
                    return (
                      null != e.userid && (t.userid = e.userid >>> 0),
                      null != e.username &&
                        (t.username = String(e.username)),
                      null != e.token && (t.token = String(e.token)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.userid = 0),
                        (n.username = ""),
                        (n.token = "")),
                      null != e.userid &&
                        e.hasOwnProperty("userid") &&
                        (n.userid = e.userid),
                      null != e.username &&
                        e.hasOwnProperty("username") &&
                        (n.username = e.username),
                      null != e.token &&
                        e.hasOwnProperty("token") &&
                        (n.token = e.token),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Goodbye = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Goodbye();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Goodbye
                      ? e
                      : new o.api.Goodbye();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.State = (() => {
                  const e = {}, t = Object.create(e);
                  return (
                    (t[(e[0] = "Stopped")] = 0),
                    (t[(e[1] = "Running")] = 1),
                    t
                  );
                })()),
                (i.CheckChanges = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.CheckChanges();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.CheckChanges
                      ? e
                      : new o.api.CheckChanges();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.EnsurePackages = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.install = !1),
                  (r.prototype.file = null),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.install &&
                        Object.hasOwnProperty.call(e, "install") &&
                        t.uint32(8).bool(e.install),
                      null != e.file &&
                        Object.hasOwnProperty.call(e, "file") &&
                        o.api.File.encode(
                          e.file,
                          t.uint32(18).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.EnsurePackages();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.install = e.bool();
                          break;
                        case 2:
                          i.file = o.api.File.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.install &&
                      e.hasOwnProperty("install") &&
                      "boolean" !== typeof e.install
                    )
                      return "install: boolean expected";
                    if (null != e.file && e.hasOwnProperty("file")) {
                      const t = o.api.File.verify(e.file);
                      if (t) return "file." + t;
                    }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.EnsurePackages) return e;
                    const t = new o.api.EnsurePackages();
                    if (
                      (null != e.install &&
                        (t.install = Boolean(e.install)),
                      null != e.file)
                    ) {
                      if ("object" !== typeof e.file)
                        throw TypeError(
                          ".api.EnsurePackages.file: object expected"
                        );
                      t.file = o.api.File.fromObject(e.file);
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.install = !1), (n.file = null)),
                      null != e.install &&
                        e.hasOwnProperty("install") &&
                        (n.install = e.install),
                      null != e.file &&
                        e.hasOwnProperty("file") &&
                        (n.file = o.api.File.toObject(e.file, t)),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Start = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Start();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Start
                      ? e
                      : new o.api.Start();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.DebugStatus = (() => {
                  function i(e) {
                    if (((this.stack = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.done = !1),
                  (i.prototype.stack = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.done &&
                        Object.hasOwnProperty.call(e, "done") &&
                        t.uint32(8).bool(e.done),
                      null != e.stack && e.stack.length)
                    )
                      for (let r = 0; r < e.stack.length; ++r)
                        o.api.StackFrame.encode(
                          e.stack[r],
                          t.uint32(18).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.DebugStatus();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.done = e.bool();
                          break;
                        case 2:
                          (i.stack && i.stack.length) || (i.stack = []),
                            i.stack.push(
                              o.api.StackFrame.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.done &&
                      e.hasOwnProperty("done") &&
                      "boolean" !== typeof e.done
                    )
                      return "done: boolean expected";
                    if (null != e.stack && e.hasOwnProperty("stack")) {
                      if (!Array.isArray(e.stack))
                        return "stack: array expected";
                      for (let t = 0; t < e.stack.length; ++t) {
                        const n = o.api.StackFrame.verify(e.stack[t]);
                        if (n) return "stack." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.DebugStatus) return e;
                    const t = new o.api.DebugStatus();
                    if (
                      (null != e.done && (t.done = Boolean(e.done)),
                      e.stack)
                    ) {
                      if (!Array.isArray(e.stack))
                        throw TypeError(
                          ".api.DebugStatus.stack: array expected"
                        );
                      t.stack = [];
                      for (let n = 0; n < e.stack.length; ++n) {
                        if ("object" !== typeof e.stack[n])
                          throw TypeError(
                            ".api.DebugStatus.stack: object expected"
                          );
                        t.stack[n] = o.api.StackFrame.fromObject(
                          e.stack[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.stack = []),
                      t.defaults && (n.done = !1),
                      null != e.done &&
                        e.hasOwnProperty("done") &&
                        (n.done = e.done),
                      e.stack && e.stack.length)
                    ) {
                      n.stack = [];
                      for (let r = 0; r < e.stack.length; ++r)
                        n.stack[r] = o.api.StackFrame.toObject(
                          e.stack[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.StackFrame = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.function = ""),
                  (i.prototype.line = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.function &&
                        Object.hasOwnProperty.call(e, "function") &&
                        t.uint32(10).string(e.function),
                      null != e.line &&
                        Object.hasOwnProperty.call(e, "line") &&
                        t.uint32(16).uint32(e.line),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.StackFrame();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.function = e.string();
                          break;
                        case 2:
                          i.line = e.uint32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.function &&
                        e.hasOwnProperty("function") &&
                        !r.isString(e.function)
                      ? "function: string expected"
                      : null != e.line &&
                        e.hasOwnProperty("line") &&
                        !r.isInteger(e.line)
                      ? "line: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.StackFrame) return e;
                    const t = new o.api.StackFrame();
                    return (
                      null != e.function &&
                        (t.function = String(e.function)),
                      null != e.line && (t.line = e.line >>> 0),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.function = ""), (n.line = 0)),
                      null != e.function &&
                        e.hasOwnProperty("function") &&
                        (n.function = e.function),
                      null != e.line &&
                        e.hasOwnProperty("line") &&
                        (n.line = e.line),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ContainedTest = (() => {
                  function i(e) {
                    if (((this.project = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.suite = null),
                  (i.prototype.project = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.suite &&
                        Object.hasOwnProperty.call(e, "suite") &&
                        o.api.File.encode(
                          e.suite,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.project && e.project.length)
                    )
                      for (let r = 0; r < e.project.length; ++r)
                        o.api.File.encode(
                          e.project[r],
                          t.uint32(18).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ContainedTest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.suite = o.api.File.decode(e, e.uint32());
                          break;
                        case 2:
                          (i.project && i.project.length) ||
                            (i.project = []),
                            i.project.push(
                              o.api.File.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.suite &&
                      e.hasOwnProperty("suite") &&
                      (n = o.api.File.verify(e.suite))
                    )
                      return "suite." + n;
                    if (
                      null != e.project &&
                      e.hasOwnProperty("project")
                    ) {
                      if (!Array.isArray(e.project))
                        return "project: array expected";
                      for (let t = 0; t < e.project.length; ++t) {
                        var n;
                        if ((n = o.api.File.verify(e.project[t])))
                          return "project." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ContainedTest) return e;
                    const t = new o.api.ContainedTest();
                    if (null != e.suite) {
                      if ("object" !== typeof e.suite)
                        throw TypeError(
                          ".api.ContainedTest.suite: object expected"
                        );
                      t.suite = o.api.File.fromObject(e.suite);
                    }
                    if (e.project) {
                      if (!Array.isArray(e.project))
                        throw TypeError(
                          ".api.ContainedTest.project: array expected"
                        );
                      t.project = [];
                      for (let n = 0; n < e.project.length; ++n) {
                        if ("object" !== typeof e.project[n])
                          throw TypeError(
                            ".api.ContainedTest.project: object expected"
                          );
                        t.project[n] = o.api.File.fromObject(
                          e.project[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.project = []),
                      t.defaults && (n.suite = null),
                      null != e.suite &&
                        e.hasOwnProperty("suite") &&
                        (n.suite = o.api.File.toObject(e.suite, t)),
                      e.project && e.project.length)
                    ) {
                      n.project = [];
                      for (let r = 0; r < e.project.length; ++r)
                        n.project[r] = o.api.File.toObject(
                          e.project[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.TestResult = (() => {
                  function i(e) {
                    if (((this.fails = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.passed = !1),
                  (i.prototype.stderr = ""),
                  (i.prototype.fails = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.passed &&
                        Object.hasOwnProperty.call(e, "passed") &&
                        t.uint32(8).bool(e.passed),
                      null != e.stderr &&
                        Object.hasOwnProperty.call(e, "stderr") &&
                        t.uint32(18).string(e.stderr),
                      null != e.fails && e.fails.length)
                    )
                      for (let r = 0; r < e.fails.length; ++r)
                        o.api.TestFailure.encode(
                          e.fails[r],
                          t.uint32(26).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.TestResult();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.passed = e.bool();
                          break;
                        case 2:
                          i.stderr = e.string();
                          break;
                        case 3:
                          (i.fails && i.fails.length) || (i.fails = []),
                            i.fails.push(
                              o.api.TestFailure.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.passed &&
                      e.hasOwnProperty("passed") &&
                      "boolean" !== typeof e.passed
                    )
                      return "passed: boolean expected";
                    if (
                      null != e.stderr &&
                      e.hasOwnProperty("stderr") &&
                      !r.isString(e.stderr)
                    )
                      return "stderr: string expected";
                    if (null != e.fails && e.hasOwnProperty("fails")) {
                      if (!Array.isArray(e.fails))
                        return "fails: array expected";
                      for (let t = 0; t < e.fails.length; ++t) {
                        const n = o.api.TestFailure.verify(e.fails[t]);
                        if (n) return "fails." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.TestResult) return e;
                    const t = new o.api.TestResult();
                    if (
                      (null != e.passed && (t.passed = Boolean(e.passed)),
                      null != e.stderr && (t.stderr = String(e.stderr)),
                      e.fails)
                    ) {
                      if (!Array.isArray(e.fails))
                        throw TypeError(
                          ".api.TestResult.fails: array expected"
                        );
                      t.fails = [];
                      for (let n = 0; n < e.fails.length; ++n) {
                        if ("object" !== typeof e.fails[n])
                          throw TypeError(
                            ".api.TestResult.fails: object expected"
                          );
                        t.fails[n] = o.api.TestFailure.fromObject(
                          e.fails[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.fails = []),
                      t.defaults && ((n.passed = !1), (n.stderr = "")),
                      null != e.passed &&
                        e.hasOwnProperty("passed") &&
                        (n.passed = e.passed),
                      null != e.stderr &&
                        e.hasOwnProperty("stderr") &&
                        (n.stderr = e.stderr),
                      e.fails && e.fails.length)
                    ) {
                      n.fails = [];
                      for (let r = 0; r < e.fails.length; ++r)
                        n.fails[r] = o.api.TestFailure.toObject(
                          e.fails[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.TestFailure = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.name = ""),
                  (i.prototype.trace = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      null != e.trace &&
                        Object.hasOwnProperty.call(e, "trace") &&
                        t.uint32(18).string(e.trace),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.TestFailure();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.name = e.string();
                          break;
                        case 2:
                          i.trace = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.name &&
                        e.hasOwnProperty("name") &&
                        !r.isString(e.name)
                      ? "name: string expected"
                      : null != e.trace &&
                        e.hasOwnProperty("trace") &&
                        !r.isString(e.trace)
                      ? "trace: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.TestFailure) return e;
                    const t = new o.api.TestFailure();
                    return (
                      null != e.name && (t.name = String(e.name)),
                      null != e.trace && (t.trace = String(e.trace)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.name = ""), (n.trace = "")),
                      null != e.name &&
                        e.hasOwnProperty("name") &&
                        (n.name = e.name),
                      null != e.trace &&
                        e.hasOwnProperty("trace") &&
                        (n.trace = e.trace),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ResizeTerm = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.rows = 0),
                  (i.prototype.cols = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.rows &&
                        Object.hasOwnProperty.call(e, "rows") &&
                        t.uint32(8).uint32(e.rows),
                      null != e.cols &&
                        Object.hasOwnProperty.call(e, "cols") &&
                        t.uint32(16).uint32(e.cols),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ResizeTerm();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.rows = e.uint32();
                          break;
                        case 2:
                          i.cols = e.uint32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.rows &&
                        e.hasOwnProperty("rows") &&
                        !r.isInteger(e.rows)
                      ? "rows: integer expected"
                      : null != e.cols &&
                        e.hasOwnProperty("cols") &&
                        !r.isInteger(e.cols)
                      ? "cols: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ResizeTerm) return e;
                    const t = new o.api.ResizeTerm();
                    return (
                      null != e.rows && (t.rows = e.rows >>> 0),
                      null != e.cols && (t.cols = e.cols >>> 0),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.rows = 0), (n.cols = 0)),
                      null != e.rows &&
                        e.hasOwnProperty("rows") &&
                        (n.rows = e.rows),
                      null != e.cols &&
                        e.hasOwnProperty("cols") &&
                        (n.cols = e.cols),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.SaneTerm = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.SaneTerm();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.SaneTerm
                      ? e
                      : new o.api.SaneTerm();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.LintResults = (() => {
                  function i(e) {
                    if (((this.results = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.results = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.results && e.results.length)
                    )
                      for (let r = 0; r < e.results.length; ++r)
                        o.api.LintResult.encode(
                          e.results[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.LintResults();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.results && i.results.length) ||
                            (i.results = []),
                            i.results.push(
                              o.api.LintResult.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.results &&
                      e.hasOwnProperty("results")
                    ) {
                      if (!Array.isArray(e.results))
                        return "results: array expected";
                      for (let t = 0; t < e.results.length; ++t) {
                        const n = o.api.LintResult.verify(e.results[t]);
                        if (n) return "results." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.LintResults) return e;
                    const t = new o.api.LintResults();
                    if (e.results) {
                      if (!Array.isArray(e.results))
                        throw TypeError(
                          ".api.LintResults.results: array expected"
                        );
                      t.results = [];
                      for (let n = 0; n < e.results.length; ++n) {
                        if ("object" !== typeof e.results[n])
                          throw TypeError(
                            ".api.LintResults.results: object expected"
                          );
                        t.results[n] = o.api.LintResult.fromObject(
                          e.results[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.results = []),
                      e.results && e.results.length)
                    ) {
                      n.results = [];
                      for (let r = 0; r < e.results.length; ++r)
                        n.results[r] = o.api.LintResult.toObject(
                          e.results[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.LintResult = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.text = ""),
                  (i.prototype.row = 0),
                  (i.prototype.column = 0),
                  (i.prototype.type = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.text &&
                        Object.hasOwnProperty.call(e, "text") &&
                        t.uint32(10).string(e.text),
                      null != e.row &&
                        Object.hasOwnProperty.call(e, "row") &&
                        t.uint32(16).int32(e.row),
                      null != e.column &&
                        Object.hasOwnProperty.call(e, "column") &&
                        t.uint32(24).int32(e.column),
                      null != e.type &&
                        Object.hasOwnProperty.call(e, "type") &&
                        t.uint32(34).string(e.type),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.LintResult();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.text = e.string();
                          break;
                        case 2:
                          i.row = e.int32();
                          break;
                        case 3:
                          i.column = e.int32();
                          break;
                        case 4:
                          i.type = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.text &&
                        e.hasOwnProperty("text") &&
                        !r.isString(e.text)
                      ? "text: string expected"
                      : null != e.row &&
                        e.hasOwnProperty("row") &&
                        !r.isInteger(e.row)
                      ? "row: integer expected"
                      : null != e.column &&
                        e.hasOwnProperty("column") &&
                        !r.isInteger(e.column)
                      ? "column: integer expected"
                      : null != e.type &&
                        e.hasOwnProperty("type") &&
                        !r.isString(e.type)
                      ? "type: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.LintResult) return e;
                    const t = new o.api.LintResult();
                    return (
                      null != e.text && (t.text = String(e.text)),
                      null != e.row && (t.row = 0 | e.row),
                      null != e.column && (t.column = 0 | e.column),
                      null != e.type && (t.type = String(e.type)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.text = ""),
                        (n.row = 0),
                        (n.column = 0),
                        (n.type = "")),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        (n.text = e.text),
                      null != e.row &&
                        e.hasOwnProperty("row") &&
                        (n.row = e.row),
                      null != e.column &&
                        e.hasOwnProperty("column") &&
                        (n.column = e.column),
                      null != e.type &&
                        e.hasOwnProperty("type") &&
                        (n.type = e.type),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OK = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OK();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.OK ? e : new o.api.OK();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Move = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.oldPath = ""),
                  (i.prototype.newPath = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.oldPath &&
                        Object.hasOwnProperty.call(e, "oldPath") &&
                        t.uint32(10).string(e.oldPath),
                      null != e.newPath &&
                        Object.hasOwnProperty.call(e, "newPath") &&
                        t.uint32(18).string(e.newPath),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Move();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.oldPath = e.string();
                          break;
                        case 2:
                          i.newPath = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.oldPath &&
                        e.hasOwnProperty("oldPath") &&
                        !r.isString(e.oldPath)
                      ? "oldPath: string expected"
                      : null != e.newPath &&
                        e.hasOwnProperty("newPath") &&
                        !r.isString(e.newPath)
                      ? "newPath: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Move) return e;
                    const t = new o.api.Move();
                    return (
                      null != e.oldPath &&
                        (t.oldPath = String(e.oldPath)),
                      null != e.newPath &&
                        (t.newPath = String(e.newPath)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.oldPath = ""), (n.newPath = "")),
                      null != e.oldPath &&
                        e.hasOwnProperty("oldPath") &&
                        (n.oldPath = e.oldPath),
                      null != e.newPath &&
                        e.hasOwnProperty("newPath") &&
                        (n.newPath = e.newPath),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Files = (() => {
                  function i(e) {
                    if (((this.files = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.files = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.files && e.files.length)
                    )
                      for (let r = 0; r < e.files.length; ++r)
                        o.api.File.encode(
                          e.files[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Files();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.files && i.files.length) || (i.files = []),
                            i.files.push(
                              o.api.File.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.files && e.hasOwnProperty("files")) {
                      if (!Array.isArray(e.files))
                        return "files: array expected";
                      for (let t = 0; t < e.files.length; ++t) {
                        const n = o.api.File.verify(e.files[t]);
                        if (n) return "files." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Files) return e;
                    const t = new o.api.Files();
                    if (e.files) {
                      if (!Array.isArray(e.files))
                        throw TypeError(
                          ".api.Files.files: array expected"
                        );
                      t.files = [];
                      for (let n = 0; n < e.files.length; ++n) {
                        if ("object" !== typeof e.files[n])
                          throw TypeError(
                            ".api.Files.files: object expected"
                          );
                        t.files[n] = o.api.File.fromObject(e.files[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.files = []),
                      e.files && e.files.length)
                    ) {
                      n.files = [];
                      for (let r = 0; r < e.files.length; ++r)
                        n.files[r] = o.api.File.toObject(e.files[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.StatResult = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.exists = !1),
                  (i.prototype.type = 0),
                  (i.prototype.size = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.prototype.fileMode = ""),
                  (i.prototype.modTime = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.exists &&
                        Object.hasOwnProperty.call(e, "exists") &&
                        t.uint32(8).bool(e.exists),
                      null != e.type &&
                        Object.hasOwnProperty.call(e, "type") &&
                        t.uint32(16).int32(e.type),
                      null != e.size &&
                        Object.hasOwnProperty.call(e, "size") &&
                        t.uint32(24).int64(e.size),
                      null != e.fileMode &&
                        Object.hasOwnProperty.call(e, "fileMode") &&
                        t.uint32(34).string(e.fileMode),
                      null != e.modTime &&
                        Object.hasOwnProperty.call(e, "modTime") &&
                        t.uint32(40).int64(e.modTime),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.StatResult();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.exists = e.bool();
                          break;
                        case 2:
                          i.type = e.int32();
                          break;
                        case 3:
                          i.size = e.int64();
                          break;
                        case 4:
                          i.fileMode = e.string();
                          break;
                        case 5:
                          i.modTime = e.int64();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.exists &&
                      e.hasOwnProperty("exists") &&
                      "boolean" !== typeof e.exists
                    )
                      return "exists: boolean expected";
                    if (null != e.type && e.hasOwnProperty("type"))
                      switch (e.type) {
                        default:
                          return "type: enum value expected";
                        case 0:
                        case 1:
                      }
                    return null == e.size ||
                      !e.hasOwnProperty("size") ||
                      r.isInteger(e.size) ||
                      (e.size &&
                        r.isInteger(e.size.low) &&
                        r.isInteger(e.size.high))
                      ? null != e.fileMode &&
                        e.hasOwnProperty("fileMode") &&
                        !r.isString(e.fileMode)
                        ? "fileMode: string expected"
                        : null == e.modTime ||
                          !e.hasOwnProperty("modTime") ||
                          r.isInteger(e.modTime) ||
                          (e.modTime &&
                            r.isInteger(e.modTime.low) &&
                            r.isInteger(e.modTime.high))
                        ? null
                        : "modTime: integer|Long expected"
                      : "size: integer|Long expected";
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.StatResult) return e;
                    const t = new o.api.StatResult();
                    switch (
                      (null != e.exists && (t.exists = Boolean(e.exists)),
                      e.type)
                    ) {
                      case "REGULAR":
                      case 0:
                        t.type = 0;
                        break;
                      case "DIRECTORY":
                      case 1:
                        t.type = 1;
                    }
                    return (
                      null != e.size &&
                        (r.Long
                          ? ((t.size = r.Long.fromValue(
                              e.size
                            )).unsigned = !1)
                          : "string" === typeof e.size
                          ? (t.size = parseInt(e.size, 10))
                          : "number" === typeof e.size
                          ? (t.size = e.size)
                          : "object" === typeof e.size &&
                            (t.size = new r.LongBits(
                              e.size.low >>> 0,
                              e.size.high >>> 0
                            ).toNumber())),
                      null != e.fileMode &&
                        (t.fileMode = String(e.fileMode)),
                      null != e.modTime &&
                        (r.Long
                          ? ((t.modTime = r.Long.fromValue(
                              e.modTime
                            )).unsigned = !1)
                          : "string" === typeof e.modTime
                          ? (t.modTime = parseInt(e.modTime, 10))
                          : "number" === typeof e.modTime
                          ? (t.modTime = e.modTime)
                          : "object" === typeof e.modTime &&
                            (t.modTime = new r.LongBits(
                              e.modTime.low >>> 0,
                              e.modTime.high >>> 0
                            ).toNumber())),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (t.defaults) {
                      if (
                        ((n.exists = !1),
                        (n.type = t.enums === String ? "REGULAR" : 0),
                        r.Long)
                      ) {
                        var i = new r.Long(0, 0, !1);
                        n.size =
                          t.longs === String
                            ? i.toString()
                            : t.longs === Number
                            ? i.toNumber()
                            : i;
                      } else n.size = t.longs === String ? "0" : 0;
                      (n.fileMode = ""),
                        r.Long
                          ? ((i = new r.Long(0, 0, !1)),
                            (n.modTime =
                              t.longs === String
                                ? i.toString()
                                : t.longs === Number
                                ? i.toNumber()
                                : i))
                          : (n.modTime = t.longs === String ? "0" : 0);
                    }
                    return (
                      null != e.exists &&
                        e.hasOwnProperty("exists") &&
                        (n.exists = e.exists),
                      null != e.type &&
                        e.hasOwnProperty("type") &&
                        (n.type =
                          t.enums === String
                            ? o.api.File.Type[e.type]
                            : e.type),
                      null != e.size &&
                        e.hasOwnProperty("size") &&
                        ("number" === typeof e.size
                          ? (n.size =
                              t.longs === String
                                ? String(e.size)
                                : e.size)
                          : (n.size =
                              t.longs === String
                                ? r.Long.prototype.toString.call(e.size)
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.size.low >>> 0,
                                    e.size.high >>> 0
                                  ).toNumber()
                                : e.size)),
                      null != e.fileMode &&
                        e.hasOwnProperty("fileMode") &&
                        (n.fileMode = e.fileMode),
                      null != e.modTime &&
                        e.hasOwnProperty("modTime") &&
                        ("number" === typeof e.modTime
                          ? (n.modTime =
                              t.longs === String
                                ? String(e.modTime)
                                : e.modTime)
                          : (n.modTime =
                              t.longs === String
                                ? r.Long.prototype.toString.call(
                                    e.modTime
                                  )
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.modTime.low >>> 0,
                                    e.modTime.high >>> 0
                                  ).toNumber()
                                : e.modTime)),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.File = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.path = ""),
                  (i.prototype.type = 0),
                  (i.prototype.content = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.path &&
                        Object.hasOwnProperty.call(e, "path") &&
                        t.uint32(10).string(e.path),
                      null != e.type &&
                        Object.hasOwnProperty.call(e, "type") &&
                        t.uint32(16).int32(e.type),
                      null != e.content &&
                        Object.hasOwnProperty.call(e, "content") &&
                        t.uint32(26).bytes(e.content),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.File();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.path = e.string();
                          break;
                        case 2:
                          i.type = e.int32();
                          break;
                        case 3:
                          i.content = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.path &&
                      e.hasOwnProperty("path") &&
                      !r.isString(e.path)
                    )
                      return "path: string expected";
                    if (null != e.type && e.hasOwnProperty("type"))
                      switch (e.type) {
                        default:
                          return "type: enum value expected";
                        case 0:
                        case 1:
                      }
                    return null != e.content &&
                      e.hasOwnProperty("content") &&
                      !(
                        (e.content &&
                          "number" === typeof e.content.length) ||
                        r.isString(e.content)
                      )
                      ? "content: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.File) return e;
                    const t = new o.api.File();
                    switch (
                      (null != e.path && (t.path = String(e.path)),
                      e.type)
                    ) {
                      case "REGULAR":
                      case 0:
                        t.type = 0;
                        break;
                      case "DIRECTORY":
                      case 1:
                        t.type = 1;
                    }
                    return (
                      null != e.content &&
                        ("string" === typeof e.content
                          ? r.base64.decode(
                              e.content,
                              (t.content = r.newBuffer(
                                r.base64.length(e.content)
                              )),
                              0
                            )
                          : e.content.length && (t.content = e.content)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.path = ""),
                        (n.type = t.enums === String ? "REGULAR" : 0),
                        t.bytes === String
                          ? (n.content = "")
                          : ((n.content = []),
                            t.bytes !== Array &&
                              (n.content = r.newBuffer(n.content)))),
                      null != e.path &&
                        e.hasOwnProperty("path") &&
                        (n.path = e.path),
                      null != e.type &&
                        e.hasOwnProperty("type") &&
                        (n.type =
                          t.enums === String
                            ? o.api.File.Type[e.type]
                            : e.type),
                      null != e.content &&
                        e.hasOwnProperty("content") &&
                        (n.content =
                          t.bytes === String
                            ? r.base64.encode(
                                e.content,
                                0,
                                e.content.length
                              )
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.content)
                            : e.content),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Type = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "REGULAR")] = 0),
                      (t[(e[1] = "DIRECTORY")] = 1),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.Clear = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Clear();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.Clear
                      ? e
                      : new o.api.Clear();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Toast = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.text = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.text &&
                        Object.hasOwnProperty.call(e, "text") &&
                        t.uint32(10).string(e.text),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Toast();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.text = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.text &&
                        e.hasOwnProperty("text") &&
                        !r.isString(e.text)
                      ? "text: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Toast) return e;
                    const t = new o.api.Toast();
                    return null != e.text && (t.text = String(e.text)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.text = ""),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        (n.text = e.text),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Redirect = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.url = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.url &&
                        Object.hasOwnProperty.call(e, "url") &&
                        t.uint32(10).string(e.url),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Redirect();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.url = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.url &&
                        e.hasOwnProperty("url") &&
                        !r.isString(e.url)
                      ? "url: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Redirect) return e;
                    const t = new o.api.Redirect();
                    return null != e.url && (t.url = String(e.url)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.url = ""),
                      null != e.url &&
                        e.hasOwnProperty("url") &&
                        (n.url = e.url),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.AlwaysOn = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.enable = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.enable &&
                        Object.hasOwnProperty.call(e, "enable") &&
                        t.uint32(8).bool(e.enable),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.AlwaysOn();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.enable = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.enable &&
                        e.hasOwnProperty("enable") &&
                        "boolean" !== typeof e.enable
                      ? "enable: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.AlwaysOn) return e;
                    const t = new o.api.AlwaysOn();
                    return (
                      null != e.enable && (t.enable = Boolean(e.enable)),
                      t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.enable = !1),
                      null != e.enable &&
                        e.hasOwnProperty("enable") &&
                        (n.enable = e.enable),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.RunMain = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.RunMain();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.RunMain
                      ? e
                      : new o.api.RunMain();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.OpenChannel = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.service = ""),
                  (i.prototype.name = ""),
                  (i.prototype.action = 0),
                  (i.prototype.id = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.service &&
                        Object.hasOwnProperty.call(e, "service") &&
                        t.uint32(10).string(e.service),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(18).string(e.name),
                      null != e.action &&
                        Object.hasOwnProperty.call(e, "action") &&
                        t.uint32(24).int32(e.action),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(32).int32(e.id),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OpenChannel();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.service = e.string();
                          break;
                        case 2:
                          i.name = e.string();
                          break;
                        case 3:
                          i.action = e.int32();
                          break;
                        case 4:
                          i.id = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.service &&
                      e.hasOwnProperty("service") &&
                      !r.isString(e.service)
                    )
                      return "service: string expected";
                    if (
                      null != e.name &&
                      e.hasOwnProperty("name") &&
                      !r.isString(e.name)
                    )
                      return "name: string expected";
                    if (null != e.action && e.hasOwnProperty("action"))
                      switch (e.action) {
                        default:
                          return "action: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isInteger(e.id)
                      ? "id: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OpenChannel) return e;
                    const t = new o.api.OpenChannel();
                    switch (
                      (null != e.service &&
                        (t.service = String(e.service)),
                      null != e.name && (t.name = String(e.name)),
                      e.action)
                    ) {
                      case "CREATE":
                      case 0:
                        t.action = 0;
                        break;
                      case "ATTACH":
                      case 1:
                        t.action = 1;
                        break;
                      case "ATTACH_OR_CREATE":
                      case 2:
                        t.action = 2;
                    }
                    return null != e.id && (t.id = 0 | e.id), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.service = ""),
                        (n.name = ""),
                        (n.action = t.enums === String ? "CREATE" : 0),
                        (n.id = 0)),
                      null != e.service &&
                        e.hasOwnProperty("service") &&
                        (n.service = e.service),
                      null != e.name &&
                        e.hasOwnProperty("name") &&
                        (n.name = e.name),
                      null != e.action &&
                        e.hasOwnProperty("action") &&
                        (n.action =
                          t.enums === String
                            ? o.api.OpenChannel.Action[e.action]
                            : e.action),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Action = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "CREATE")] = 0),
                      (t[(e[1] = "ATTACH")] = 1),
                      (t[(e[2] = "ATTACH_OR_CREATE")] = 2),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.OpenChannelRes = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = 0),
                  (i.prototype.state = 0),
                  (i.prototype.error = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(8).int32(e.id),
                      null != e.state &&
                        Object.hasOwnProperty.call(e, "state") &&
                        t.uint32(16).int32(e.state),
                      null != e.error &&
                        Object.hasOwnProperty.call(e, "error") &&
                        t.uint32(26).string(e.error),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OpenChannelRes();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.int32();
                          break;
                        case 2:
                          i.state = e.int32();
                          break;
                        case 3:
                          i.error = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isInteger(e.id)
                    )
                      return "id: integer expected";
                    if (null != e.state && e.hasOwnProperty("state"))
                      switch (e.state) {
                        default:
                          return "state: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null != e.error &&
                      e.hasOwnProperty("error") &&
                      !r.isString(e.error)
                      ? "error: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OpenChannelRes) return e;
                    const t = new o.api.OpenChannelRes();
                    switch (
                      (null != e.id && (t.id = 0 | e.id), e.state)
                    ) {
                      case "CREATED":
                      case 0:
                        t.state = 0;
                        break;
                      case "ATTACHED":
                      case 1:
                        t.state = 1;
                        break;
                      case "ERROR":
                      case 2:
                        t.state = 2;
                    }
                    return (
                      null != e.error && (t.error = String(e.error)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.id = 0),
                        (n.state = t.enums === String ? "CREATED" : 0),
                        (n.error = "")),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.state &&
                        e.hasOwnProperty("state") &&
                        (n.state =
                          t.enums === String
                            ? o.api.OpenChannelRes.State[e.state]
                            : e.state),
                      null != e.error &&
                        e.hasOwnProperty("error") &&
                        (n.error = e.error),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.State = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "CREATED")] = 0),
                      (t[(e[1] = "ATTACHED")] = 1),
                      (t[(e[2] = "ERROR")] = 2),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.CloseChannel = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = 0),
                  (i.prototype.action = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(8).int32(e.id),
                      null != e.action &&
                        Object.hasOwnProperty.call(e, "action") &&
                        t.uint32(16).int32(e.action),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.CloseChannel();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.int32();
                          break;
                        case 2:
                          i.action = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isInteger(e.id)
                    )
                      return "id: integer expected";
                    if (null != e.action && e.hasOwnProperty("action"))
                      switch (e.action) {
                        default:
                          return "action: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.CloseChannel) return e;
                    const t = new o.api.CloseChannel();
                    switch (
                      (null != e.id && (t.id = 0 | e.id), e.action)
                    ) {
                      case "DISCONNECT":
                      case 0:
                        t.action = 0;
                        break;
                      case "TRY_CLOSE":
                      case 1:
                        t.action = 1;
                        break;
                      case "CLOSE":
                      case 2:
                        t.action = 2;
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.id = 0),
                        (n.action =
                          t.enums === String ? "DISCONNECT" : 0)),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.action &&
                        e.hasOwnProperty("action") &&
                        (n.action =
                          t.enums === String
                            ? o.api.CloseChannel.Action[e.action]
                            : e.action),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Action = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "DISCONNECT")] = 0),
                      (t[(e[1] = "TRY_CLOSE")] = 1),
                      (t[(e[2] = "CLOSE")] = 2),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.CloseChannelRes = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = 0),
                  (i.prototype.status = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(8).int32(e.id),
                      null != e.status &&
                        Object.hasOwnProperty.call(e, "status") &&
                        t.uint32(16).int32(e.status),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.CloseChannelRes();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.int32();
                          break;
                        case 2:
                          i.status = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isInteger(e.id)
                    )
                      return "id: integer expected";
                    if (null != e.status && e.hasOwnProperty("status"))
                      switch (e.status) {
                        default:
                          return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.CloseChannelRes) return e;
                    const t = new o.api.CloseChannelRes();
                    switch (
                      (null != e.id && (t.id = 0 | e.id), e.status)
                    ) {
                      case "DISCONNECT":
                      case 0:
                        t.status = 0;
                        break;
                      case "CLOSE":
                      case 1:
                        t.status = 1;
                        break;
                      case "NOTHING":
                      case 2:
                        t.status = 2;
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.id = 0),
                        (n.status =
                          t.enums === String ? "DISCONNECT" : 0)),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.status &&
                        e.hasOwnProperty("status") &&
                        (n.status =
                          t.enums === String
                            ? o.api.CloseChannelRes.Status[e.status]
                            : e.status),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Status = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "DISCONNECT")] = 0),
                      (t[(e[1] = "CLOSE")] = 1),
                      (t[(e[2] = "NOTHING")] = 2),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.ContainerState = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.state = 0),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.state &&
                        Object.hasOwnProperty.call(e, "state") &&
                        t.uint32(8).int32(e.state),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ContainerState();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.state = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.state && e.hasOwnProperty("state"))
                      switch (e.state) {
                        default:
                          return "state: enum value expected";
                        case 0:
                        case 1:
                      }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.ContainerState) return e;
                    const t = new o.api.ContainerState();
                    switch (e.state) {
                      case "SLEEP":
                      case 0:
                        t.state = 0;
                        break;
                      case "READY":
                      case 1:
                        t.state = 1;
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        (n.state = t.enums === String ? "SLEEP" : 0),
                      null != e.state &&
                        e.hasOwnProperty("state") &&
                        (n.state =
                          t.enums === String
                            ? o.api.ContainerState.State[e.state]
                            : e.state),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (r.State = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "SLEEP")] = 0),
                      (t[(e[1] = "READY")] = 1),
                      t
                    );
                  })()),
                  r;
                })()),
                (i.PortOpen = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.forwarded = !1),
                  (i.prototype.port = 0),
                  (i.prototype.address = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.forwarded &&
                        Object.hasOwnProperty.call(e, "forwarded") &&
                        t.uint32(8).bool(e.forwarded),
                      null != e.port &&
                        Object.hasOwnProperty.call(e, "port") &&
                        t.uint32(16).uint32(e.port),
                      null != e.address &&
                        Object.hasOwnProperty.call(e, "address") &&
                        t.uint32(26).string(e.address),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PortOpen();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.forwarded = e.bool();
                          break;
                        case 2:
                          i.port = e.uint32();
                          break;
                        case 3:
                          i.address = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.forwarded &&
                        e.hasOwnProperty("forwarded") &&
                        "boolean" !== typeof e.forwarded
                      ? "forwarded: boolean expected"
                      : null != e.port &&
                        e.hasOwnProperty("port") &&
                        !r.isInteger(e.port)
                      ? "port: integer expected"
                      : null != e.address &&
                        e.hasOwnProperty("address") &&
                        !r.isString(e.address)
                      ? "address: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PortOpen) return e;
                    const t = new o.api.PortOpen();
                    return (
                      null != e.forwarded &&
                        (t.forwarded = Boolean(e.forwarded)),
                      null != e.port && (t.port = e.port >>> 0),
                      null != e.address &&
                        (t.address = String(e.address)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.forwarded = !1),
                        (n.port = 0),
                        (n.address = "")),
                      null != e.forwarded &&
                        e.hasOwnProperty("forwarded") &&
                        (n.forwarded = e.forwarded),
                      null != e.port &&
                        e.hasOwnProperty("port") &&
                        (n.port = e.port),
                      null != e.address &&
                        e.hasOwnProperty("address") &&
                        (n.address = e.address),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTFetchRequest = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.versionFrom = 0),
                  (i.prototype.versionTo = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.versionFrom &&
                        Object.hasOwnProperty.call(e, "versionFrom") &&
                        t.uint32(8).uint32(e.versionFrom),
                      null != e.versionTo &&
                        Object.hasOwnProperty.call(e, "versionTo") &&
                        t.uint32(16).uint32(e.versionTo),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTFetchRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.versionFrom = e.uint32();
                          break;
                        case 2:
                          i.versionTo = e.uint32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.versionFrom &&
                        e.hasOwnProperty("versionFrom") &&
                        !r.isInteger(e.versionFrom)
                      ? "versionFrom: integer expected"
                      : null != e.versionTo &&
                        e.hasOwnProperty("versionTo") &&
                        !r.isInteger(e.versionTo)
                      ? "versionTo: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTFetchRequest) return e;
                    const t = new o.api.OTFetchRequest();
                    return (
                      null != e.versionFrom &&
                        (t.versionFrom = e.versionFrom >>> 0),
                      null != e.versionTo &&
                        (t.versionTo = e.versionTo >>> 0),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.versionFrom = 0), (n.versionTo = 0)),
                      null != e.versionFrom &&
                        e.hasOwnProperty("versionFrom") &&
                        (n.versionFrom = e.versionFrom),
                      null != e.versionTo &&
                        e.hasOwnProperty("versionTo") &&
                        (n.versionTo = e.versionTo),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTFetchResponse = (() => {
                  function i(e) {
                    if (((this.packets = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.packets = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.packets && e.packets.length)
                    )
                      for (let r = 0; r < e.packets.length; ++r)
                        o.api.OTPacket.encode(
                          e.packets[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTFetchResponse();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.packets && i.packets.length) ||
                            (i.packets = []),
                            i.packets.push(
                              o.api.OTPacket.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.packets &&
                      e.hasOwnProperty("packets")
                    ) {
                      if (!Array.isArray(e.packets))
                        return "packets: array expected";
                      for (let t = 0; t < e.packets.length; ++t) {
                        const n = o.api.OTPacket.verify(e.packets[t]);
                        if (n) return "packets." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTFetchResponse) return e;
                    const t = new o.api.OTFetchResponse();
                    if (e.packets) {
                      if (!Array.isArray(e.packets))
                        throw TypeError(
                          ".api.OTFetchResponse.packets: array expected"
                        );
                      t.packets = [];
                      for (let n = 0; n < e.packets.length; ++n) {
                        if ("object" !== typeof e.packets[n])
                          throw TypeError(
                            ".api.OTFetchResponse.packets: object expected"
                          );
                        t.packets[n] = o.api.OTPacket.fromObject(
                          e.packets[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.packets = []),
                      e.packets && e.packets.length)
                    ) {
                      n.packets = [];
                      for (let r = 0; r < e.packets.length; ++r)
                        n.packets[r] = o.api.OTPacket.toObject(
                          e.packets[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTPacket = (() => {
                  function i(e) {
                    if (((this.ops = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.spookyVersion = 0),
                  (i.prototype.version = 0),
                  (i.prototype.ops = r.emptyArray),
                  (i.prototype.crc32 = 0),
                  (i.prototype.committed = null),
                  (i.prototype.nonce = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.spookyVersion &&
                        Object.hasOwnProperty.call(e, "spookyVersion") &&
                        t.uint32(8).uint32(e.spookyVersion),
                      null != e.ops && e.ops.length)
                    )
                      for (let r = 0; r < e.ops.length; ++r)
                        o.api.OTRuneTransformOp.encode(
                          e.ops[r],
                          t.uint32(18).fork()
                        ).ldelim();
                    return (
                      null != e.crc32 &&
                        Object.hasOwnProperty.call(e, "crc32") &&
                        t.uint32(24).uint32(e.crc32),
                      null != e.committed &&
                        Object.hasOwnProperty.call(e, "committed") &&
                        o.google.protobuf.Timestamp.encode(
                          e.committed,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.version &&
                        Object.hasOwnProperty.call(e, "version") &&
                        t.uint32(40).uint32(e.version),
                      null != e.nonce &&
                        Object.hasOwnProperty.call(e, "nonce") &&
                        t.uint32(48).uint32(e.nonce),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTPacket();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.spookyVersion = e.uint32();
                          break;
                        case 5:
                          i.version = e.uint32();
                          break;
                        case 2:
                          (i.ops && i.ops.length) || (i.ops = []),
                            i.ops.push(
                              o.api.OTRuneTransformOp.decode(
                                e,
                                e.uint32()
                              )
                            );
                          break;
                        case 3:
                          i.crc32 = e.uint32();
                          break;
                        case 4:
                          i.committed = o.google.protobuf.Timestamp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 6:
                          i.nonce = e.uint32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.spookyVersion &&
                      e.hasOwnProperty("spookyVersion") &&
                      !r.isInteger(e.spookyVersion)
                    )
                      return "spookyVersion: integer expected";
                    if (
                      null != e.version &&
                      e.hasOwnProperty("version") &&
                      !r.isInteger(e.version)
                    )
                      return "version: integer expected";
                    if (null != e.ops && e.hasOwnProperty("ops")) {
                      if (!Array.isArray(e.ops))
                        return "ops: array expected";
                      for (let t = 0; t < e.ops.length; ++t)
                        if (
                          (n = o.api.OTRuneTransformOp.verify(e.ops[t]))
                        )
                          return "ops." + n;
                    }
                    return null != e.crc32 &&
                      e.hasOwnProperty("crc32") &&
                      !r.isInteger(e.crc32)
                      ? "crc32: integer expected"
                      : null != e.committed &&
                        e.hasOwnProperty("committed") &&
                        (n = o.google.protobuf.Timestamp.verify(
                          e.committed
                        ))
                      ? "committed." + n
                      : null != e.nonce &&
                        e.hasOwnProperty("nonce") &&
                        !r.isInteger(e.nonce)
                      ? "nonce: integer expected"
                      : null;
                    var n;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTPacket) return e;
                    const t = new o.api.OTPacket();
                    if (
                      (null != e.spookyVersion &&
                        (t.spookyVersion = e.spookyVersion >>> 0),
                      null != e.version && (t.version = e.version >>> 0),
                      e.ops)
                    ) {
                      if (!Array.isArray(e.ops))
                        throw TypeError(
                          ".api.OTPacket.ops: array expected"
                        );
                      t.ops = [];
                      for (let n = 0; n < e.ops.length; ++n) {
                        if ("object" !== typeof e.ops[n])
                          throw TypeError(
                            ".api.OTPacket.ops: object expected"
                          );
                        t.ops[n] = o.api.OTRuneTransformOp.fromObject(
                          e.ops[n]
                        );
                      }
                    }
                    if (
                      (null != e.crc32 && (t.crc32 = e.crc32 >>> 0),
                      null != e.committed)
                    ) {
                      if ("object" !== typeof e.committed)
                        throw TypeError(
                          ".api.OTPacket.committed: object expected"
                        );
                      t.committed = o.google.protobuf.Timestamp.fromObject(
                        e.committed
                      );
                    }
                    return (
                      null != e.nonce && (t.nonce = e.nonce >>> 0), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.ops = []),
                      t.defaults &&
                        ((n.spookyVersion = 0),
                        (n.crc32 = 0),
                        (n.committed = null),
                        (n.version = 0),
                        (n.nonce = 0)),
                      null != e.spookyVersion &&
                        e.hasOwnProperty("spookyVersion") &&
                        (n.spookyVersion = e.spookyVersion),
                      e.ops && e.ops.length)
                    ) {
                      n.ops = [];
                      for (let r = 0; r < e.ops.length; ++r)
                        n.ops[r] = o.api.OTRuneTransformOp.toObject(
                          e.ops[r],
                          t
                        );
                    }
                    return (
                      null != e.crc32 &&
                        e.hasOwnProperty("crc32") &&
                        (n.crc32 = e.crc32),
                      null != e.committed &&
                        e.hasOwnProperty("committed") &&
                        (n.committed = o.google.protobuf.Timestamp.toObject(
                          e.committed,
                          t
                        )),
                      null != e.version &&
                        e.hasOwnProperty("version") &&
                        (n.version = e.version),
                      null != e.nonce &&
                        e.hasOwnProperty("nonce") &&
                        (n.nonce = e.nonce),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTRuneTransformOp = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  let a;
                  return (i.prototype.skip = 0),
                  (i.prototype.delete = 0),
                  (i.prototype.insert = ""),
                  Object.defineProperty(i.prototype, "op", {
                    get: r.oneOfGetter(
                      (a = ["skip", "delete", "insert"])
                    ),
                    set: r.oneOfSetter(a),
                  }),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.skip &&
                        Object.hasOwnProperty.call(e, "skip") &&
                        t.uint32(8).uint32(e.skip),
                      null != e.delete &&
                        Object.hasOwnProperty.call(e, "delete") &&
                        t.uint32(16).uint32(e.delete),
                      null != e.insert &&
                        Object.hasOwnProperty.call(e, "insert") &&
                        t.uint32(26).string(e.insert),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTRuneTransformOp();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.skip = e.uint32();
                          break;
                        case 2:
                          i.delete = e.uint32();
                          break;
                        case 3:
                          i.insert = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    const t = {};
                    if (
                      null != e.skip &&
                      e.hasOwnProperty("skip") &&
                      ((t.op = 1), !r.isInteger(e.skip))
                    )
                      return "skip: integer expected";
                    if (null != e.delete && e.hasOwnProperty("delete")) {
                      if (1 === t.op) return "op: multiple values";
                      if (((t.op = 1), !r.isInteger(e.delete)))
                        return "delete: integer expected";
                    }
                    if (null != e.insert && e.hasOwnProperty("insert")) {
                      if (1 === t.op) return "op: multiple values";
                      if (((t.op = 1), !r.isString(e.insert)))
                        return "insert: string expected";
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTRuneTransformOp) return e;
                    const t = new o.api.OTRuneTransformOp();
                    return (
                      null != e.skip && (t.skip = e.skip >>> 0),
                      null != e.delete && (t.delete = e.delete >>> 0),
                      null != e.insert && (t.insert = String(e.insert)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      null != e.skip &&
                        e.hasOwnProperty("skip") &&
                        ((n.skip = e.skip), t.oneofs && (n.op = "skip")),
                      null != e.delete &&
                        e.hasOwnProperty("delete") &&
                        ((n.delete = e.delete),
                        t.oneofs && (n.op = "delete")),
                      null != e.insert &&
                        e.hasOwnProperty("insert") &&
                        ((n.insert = e.insert),
                        t.oneofs && (n.op = "insert")),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTStatus = (() => {
                  function i(e) {
                    if (((this.cursors = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.contents = ""),
                  (i.prototype.version = 0),
                  (i.prototype.linkedFile = null),
                  (i.prototype.cursors = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.contents &&
                        Object.hasOwnProperty.call(e, "contents") &&
                        t.uint32(10).string(e.contents),
                      null != e.version &&
                        Object.hasOwnProperty.call(e, "version") &&
                        t.uint32(16).uint32(e.version),
                      null != e.linkedFile &&
                        Object.hasOwnProperty.call(e, "linkedFile") &&
                        o.api.File.encode(
                          e.linkedFile,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.cursors && e.cursors.length)
                    )
                      for (let r = 0; r < e.cursors.length; ++r)
                        o.api.OTCursor.encode(
                          e.cursors[r],
                          t.uint32(34).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTStatus();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.contents = e.string();
                          break;
                        case 2:
                          i.version = e.uint32();
                          break;
                        case 3:
                          i.linkedFile = o.api.File.decode(e, e.uint32());
                          break;
                        case 4:
                          (i.cursors && i.cursors.length) ||
                            (i.cursors = []),
                            i.cursors.push(
                              o.api.OTCursor.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.contents &&
                      e.hasOwnProperty("contents") &&
                      !r.isString(e.contents)
                    )
                      return "contents: string expected";
                    if (
                      null != e.version &&
                      e.hasOwnProperty("version") &&
                      !r.isInteger(e.version)
                    )
                      return "version: integer expected";
                    if (
                      null != e.linkedFile &&
                      e.hasOwnProperty("linkedFile") &&
                      (n = o.api.File.verify(e.linkedFile))
                    )
                      return "linkedFile." + n;
                    if (
                      null != e.cursors &&
                      e.hasOwnProperty("cursors")
                    ) {
                      if (!Array.isArray(e.cursors))
                        return "cursors: array expected";
                      for (let t = 0; t < e.cursors.length; ++t) {
                        var n;
                        if ((n = o.api.OTCursor.verify(e.cursors[t])))
                          return "cursors." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTStatus) return e;
                    const t = new o.api.OTStatus();
                    if (
                      (null != e.contents &&
                        (t.contents = String(e.contents)),
                      null != e.version && (t.version = e.version >>> 0),
                      null != e.linkedFile)
                    ) {
                      if ("object" !== typeof e.linkedFile)
                        throw TypeError(
                          ".api.OTStatus.linkedFile: object expected"
                        );
                      t.linkedFile = o.api.File.fromObject(e.linkedFile);
                    }
                    if (e.cursors) {
                      if (!Array.isArray(e.cursors))
                        throw TypeError(
                          ".api.OTStatus.cursors: array expected"
                        );
                      t.cursors = [];
                      for (let n = 0; n < e.cursors.length; ++n) {
                        if ("object" !== typeof e.cursors[n])
                          throw TypeError(
                            ".api.OTStatus.cursors: object expected"
                          );
                        t.cursors[n] = o.api.OTCursor.fromObject(
                          e.cursors[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.cursors = []),
                      t.defaults &&
                        ((n.contents = ""),
                        (n.version = 0),
                        (n.linkedFile = null)),
                      null != e.contents &&
                        e.hasOwnProperty("contents") &&
                        (n.contents = e.contents),
                      null != e.version &&
                        e.hasOwnProperty("version") &&
                        (n.version = e.version),
                      null != e.linkedFile &&
                        e.hasOwnProperty("linkedFile") &&
                        (n.linkedFile = o.api.File.toObject(
                          e.linkedFile,
                          t
                        )),
                      e.cursors && e.cursors.length)
                    ) {
                      n.cursors = [];
                      for (let r = 0; r < e.cursors.length; ++r)
                        n.cursors[r] = o.api.OTCursor.toObject(
                          e.cursors[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.OTCursor = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.position = 0),
                  (i.prototype.selectionStart = 0),
                  (i.prototype.selectionEnd = 0),
                  (i.prototype.user = null),
                  (i.prototype.id = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.position &&
                        Object.hasOwnProperty.call(e, "position") &&
                        t.uint32(8).uint32(e.position),
                      null != e.selectionStart &&
                        Object.hasOwnProperty.call(e, "selectionStart") &&
                        t.uint32(16).uint32(e.selectionStart),
                      null != e.selectionEnd &&
                        Object.hasOwnProperty.call(e, "selectionEnd") &&
                        t.uint32(24).uint32(e.selectionEnd),
                      null != e.user &&
                        Object.hasOwnProperty.call(e, "user") &&
                        o.api.User.encode(
                          e.user,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(42).string(e.id),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.OTCursor();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.position = e.uint32();
                          break;
                        case 2:
                          i.selectionStart = e.uint32();
                          break;
                        case 3:
                          i.selectionEnd = e.uint32();
                          break;
                        case 4:
                          i.user = o.api.User.decode(e, e.uint32());
                          break;
                        case 5:
                          i.id = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.position &&
                      e.hasOwnProperty("position") &&
                      !r.isInteger(e.position)
                    )
                      return "position: integer expected";
                    if (
                      null != e.selectionStart &&
                      e.hasOwnProperty("selectionStart") &&
                      !r.isInteger(e.selectionStart)
                    )
                      return "selectionStart: integer expected";
                    if (
                      null != e.selectionEnd &&
                      e.hasOwnProperty("selectionEnd") &&
                      !r.isInteger(e.selectionEnd)
                    )
                      return "selectionEnd: integer expected";
                    if (null != e.user && e.hasOwnProperty("user")) {
                      const t = o.api.User.verify(e.user);
                      if (t) return "user." + t;
                    }
                    return null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isString(e.id)
                      ? "id: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.OTCursor) return e;
                    const t = new o.api.OTCursor();
                    if (
                      (null != e.position &&
                        (t.position = e.position >>> 0),
                      null != e.selectionStart &&
                        (t.selectionStart = e.selectionStart >>> 0),
                      null != e.selectionEnd &&
                        (t.selectionEnd = e.selectionEnd >>> 0),
                      null != e.user)
                    ) {
                      if ("object" !== typeof e.user)
                        throw TypeError(
                          ".api.OTCursor.user: object expected"
                        );
                      t.user = o.api.User.fromObject(e.user);
                    }
                    return null != e.id && (t.id = String(e.id)), t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.position = 0),
                        (n.selectionStart = 0),
                        (n.selectionEnd = 0),
                        (n.user = null),
                        (n.id = "")),
                      null != e.position &&
                        e.hasOwnProperty("position") &&
                        (n.position = e.position),
                      null != e.selectionStart &&
                        e.hasOwnProperty("selectionStart") &&
                        (n.selectionStart = e.selectionStart),
                      null != e.selectionEnd &&
                        e.hasOwnProperty("selectionEnd") &&
                        (n.selectionEnd = e.selectionEnd),
                      null != e.user &&
                        e.hasOwnProperty("user") &&
                        (n.user = o.api.User.toObject(e.user, t)),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ChatMessage = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.username = ""),
                  (i.prototype.text = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.username &&
                        Object.hasOwnProperty.call(e, "username") &&
                        t.uint32(10).string(e.username),
                      null != e.text &&
                        Object.hasOwnProperty.call(e, "text") &&
                        t.uint32(18).string(e.text),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ChatMessage();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.username = e.string();
                          break;
                        case 2:
                          i.text = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.username &&
                        e.hasOwnProperty("username") &&
                        !r.isString(e.username)
                      ? "username: string expected"
                      : null != e.text &&
                        e.hasOwnProperty("text") &&
                        !r.isString(e.text)
                      ? "text: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ChatMessage) return e;
                    const t = new o.api.ChatMessage();
                    return (
                      null != e.username &&
                        (t.username = String(e.username)),
                      null != e.text && (t.text = String(e.text)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.username = ""), (n.text = "")),
                      null != e.username &&
                        e.hasOwnProperty("username") &&
                        (n.username = e.username),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        (n.text = e.text),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ChatTyping = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.username = ""),
                  (i.prototype.typing = !1),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.username &&
                        Object.hasOwnProperty.call(e, "username") &&
                        t.uint32(10).string(e.username),
                      null != e.typing &&
                        Object.hasOwnProperty.call(e, "typing") &&
                        t.uint32(16).bool(e.typing),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ChatTyping();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.username = e.string();
                          break;
                        case 2:
                          i.typing = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.username &&
                        e.hasOwnProperty("username") &&
                        !r.isString(e.username)
                      ? "username: string expected"
                      : null != e.typing &&
                        e.hasOwnProperty("typing") &&
                        "boolean" !== typeof e.typing
                      ? "typing: boolean expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ChatTyping) return e;
                    const t = new o.api.ChatTyping();
                    return (
                      null != e.username &&
                        (t.username = String(e.username)),
                      null != e.typing && (t.typing = Boolean(e.typing)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.username = ""), (n.typing = !1)),
                      null != e.username &&
                        e.hasOwnProperty("username") &&
                        (n.username = e.username),
                      null != e.typing &&
                        e.hasOwnProperty("typing") &&
                        (n.typing = e.typing),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.User = (() => {
                  function i(e) {
                    if (((this.roles = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = 0),
                  (i.prototype.name = ""),
                  (i.prototype.roles = r.emptyArray),
                  (i.prototype.session = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(8).uint32(e.id),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(18).string(e.name),
                      null != e.roles && e.roles.length)
                    )
                      for (let r = 0; r < e.roles.length; ++r)
                        t.uint32(26).string(e.roles[r]);
                    return (
                      null != e.session &&
                        Object.hasOwnProperty.call(e, "session") &&
                        t.uint32(32).int32(e.session),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.User();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.uint32();
                          break;
                        case 2:
                          i.name = e.string();
                          break;
                        case 3:
                          (i.roles && i.roles.length) || (i.roles = []),
                            i.roles.push(e.string());
                          break;
                        case 4:
                          i.session = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isInteger(e.id)
                    )
                      return "id: integer expected";
                    if (
                      null != e.name &&
                      e.hasOwnProperty("name") &&
                      !r.isString(e.name)
                    )
                      return "name: string expected";
                    if (null != e.roles && e.hasOwnProperty("roles")) {
                      if (!Array.isArray(e.roles))
                        return "roles: array expected";
                      for (let t = 0; t < e.roles.length; ++t)
                        if (!r.isString(e.roles[t]))
                          return "roles: string[] expected";
                    }
                    return null != e.session &&
                      e.hasOwnProperty("session") &&
                      !r.isInteger(e.session)
                      ? "session: integer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.User) return e;
                    const t = new o.api.User();
                    if (
                      (null != e.id && (t.id = e.id >>> 0),
                      null != e.name && (t.name = String(e.name)),
                      e.roles)
                    ) {
                      if (!Array.isArray(e.roles))
                        throw TypeError(
                          ".api.User.roles: array expected"
                        );
                      t.roles = [];
                      for (let n = 0; n < e.roles.length; ++n)
                        t.roles[n] = String(e.roles[n]);
                    }
                    return (
                      null != e.session && (t.session = 0 | e.session), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.roles = []),
                      t.defaults &&
                        ((n.id = 0), (n.name = ""), (n.session = 0)),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.name &&
                        e.hasOwnProperty("name") &&
                        (n.name = e.name),
                      e.roles && e.roles.length)
                    ) {
                      n.roles = [];
                      for (let r = 0; r < e.roles.length; ++r)
                        n.roles[r] = e.roles[r];
                    }
                    return (
                      null != e.session &&
                        e.hasOwnProperty("session") &&
                        (n.session = e.session),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Roster = (() => {
                  function i(e) {
                    if (((this.user = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.user = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.user && e.user.length)
                    )
                      for (let r = 0; r < e.user.length; ++r)
                        o.api.User.encode(
                          e.user[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Roster();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.user && i.user.length) || (i.user = []),
                            i.user.push(o.api.User.decode(e, e.uint32()));
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.user && e.hasOwnProperty("user")) {
                      if (!Array.isArray(e.user))
                        return "user: array expected";
                      for (let t = 0; t < e.user.length; ++t) {
                        const n = o.api.User.verify(e.user[t]);
                        if (n) return "user." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Roster) return e;
                    const t = new o.api.Roster();
                    if (e.user) {
                      if (!Array.isArray(e.user))
                        throw TypeError(
                          ".api.Roster.user: array expected"
                        );
                      t.user = [];
                      for (let n = 0; n < e.user.length; ++n) {
                        if ("object" !== typeof e.user[n])
                          throw TypeError(
                            ".api.Roster.user: object expected"
                          );
                        t.user[n] = o.api.User.fromObject(e.user[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.user = []),
                      e.user && e.user.length)
                    ) {
                      n.user = [];
                      for (let r = 0; r < e.user.length; ++r)
                        n.user[r] = o.api.User.toObject(e.user[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Exec = (() => {
                  function i(e) {
                    if (((this.args = []), (this.env = {}), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.args = r.emptyArray),
                  (i.prototype.env = r.emptyObject),
                  (i.prototype.blocking = !1),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.args && e.args.length)
                    )
                      for (var r = 0; r < e.args.length; ++r)
                        t.uint32(10).string(e.args[r]);
                    if (
                      null != e.env &&
                      Object.hasOwnProperty.call(e, "env")
                    ) {
                      const o = Object.keys(e.env);
                      for (r = 0; r < o.length; ++r)
                        t.uint32(18)
                          .fork()
                          .uint32(10)
                          .string(o[r])
                          .uint32(18)
                          .string(e.env[o[r]])
                          .ldelim();
                    }
                    return (
                      null != e.blocking &&
                        Object.hasOwnProperty.call(e, "blocking") &&
                        t.uint32(24).bool(e.blocking),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var i,
                        a,
                        s = void 0 === n ? e.len : e.pos + n,
                        l = new o.api.Exec();
                      e.pos < s;

                    ) {
                      const c = e.uint32();
                      switch (c >>> 3) {
                        case 1:
                          (l.args && l.args.length) || (l.args = []),
                            l.args.push(e.string());
                          break;
                        case 2:
                          l.env === r.emptyObject && (l.env = {});
                          const u = e.uint32() + e.pos;
                          for (i = "", a = ""; e.pos < u; ) {
                            const p = e.uint32();
                            switch (p >>> 3) {
                              case 1:
                                i = e.string();
                                break;
                              case 2:
                                a = e.string();
                                break;
                              default:
                                e.skipType(7 & p);
                            }
                          }
                          l.env[i] = a;
                          break;
                        case 3:
                          l.blocking = e.bool();
                          break;
                        default:
                          e.skipType(7 & c);
                      }
                    }
                    return l;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.args && e.hasOwnProperty("args")) {
                      if (!Array.isArray(e.args))
                        return "args: array expected";
                      for (var t = 0; t < e.args.length; ++t)
                        if (!r.isString(e.args[t]))
                          return "args: string[] expected";
                    }
                    if (null != e.env && e.hasOwnProperty("env")) {
                      if (!r.isObject(e.env))
                        return "env: object expected";
                      const n = Object.keys(e.env);
                      for (t = 0; t < n.length; ++t)
                        if (!r.isString(e.env[n[t]]))
                          return "env: string{k:string} expected";
                    }
                    return null != e.blocking &&
                      e.hasOwnProperty("blocking") &&
                      "boolean" !== typeof e.blocking
                      ? "blocking: boolean expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Exec) return e;
                    const t = new o.api.Exec();
                    if (e.args) {
                      if (!Array.isArray(e.args))
                        throw TypeError(".api.Exec.args: array expected");
                      t.args = [];
                      for (var n = 0; n < e.args.length; ++n)
                        t.args[n] = String(e.args[n]);
                    }
                    if (e.env) {
                      if ("object" !== typeof e.env)
                        throw TypeError(".api.Exec.env: object expected");
                      t.env = {};
                      const r = Object.keys(e.env);
                      for (n = 0; n < r.length; ++n)
                        t.env[r[n]] = String(e.env[r[n]]);
                    }
                    return (
                      null != e.blocking &&
                        (t.blocking = Boolean(e.blocking)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    let n;
                    const r = {};
                    if (
                      ((t.arrays || t.defaults) && (r.args = []),
                      (t.objects || t.defaults) && (r.env = {}),
                      t.defaults && (r.blocking = !1),
                      e.args && e.args.length)
                    ) {
                      r.args = [];
                      for (var o = 0; o < e.args.length; ++o)
                        r.args[o] = e.args[o];
                    }
                    if (e.env && (n = Object.keys(e.env)).length)
                      for (r.env = {}, o = 0; o < n.length; ++o)
                        r.env[n[o]] = e.env[n[o]];
                    return (
                      null != e.blocking &&
                        e.hasOwnProperty("blocking") &&
                        (r.blocking = e.blocking),
                      r
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Package = (() => {
                  function i(e) {
                    if (((this.dependencies = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.name = ""),
                  (i.prototype.spec = ""),
                  (i.prototype.description = ""),
                  (i.prototype.version = ""),
                  (i.prototype.homepageURL = ""),
                  (i.prototype.documentationURL = ""),
                  (i.prototype.sourceCodeURL = ""),
                  (i.prototype.bugTrackerURL = ""),
                  (i.prototype.author = ""),
                  (i.prototype.license = ""),
                  (i.prototype.dependencies = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.name &&
                        Object.hasOwnProperty.call(e, "name") &&
                        t.uint32(10).string(e.name),
                      null != e.spec &&
                        Object.hasOwnProperty.call(e, "spec") &&
                        t.uint32(18).string(e.spec),
                      null != e.description &&
                        Object.hasOwnProperty.call(e, "description") &&
                        t.uint32(82).string(e.description),
                      null != e.version &&
                        Object.hasOwnProperty.call(e, "version") &&
                        t.uint32(90).string(e.version),
                      null != e.homepageURL &&
                        Object.hasOwnProperty.call(e, "homepageURL") &&
                        t.uint32(98).string(e.homepageURL),
                      null != e.documentationURL &&
                        Object.hasOwnProperty.call(
                          e,
                          "documentationURL"
                        ) &&
                        t.uint32(106).string(e.documentationURL),
                      null != e.sourceCodeURL &&
                        Object.hasOwnProperty.call(e, "sourceCodeURL") &&
                        t.uint32(114).string(e.sourceCodeURL),
                      null != e.bugTrackerURL &&
                        Object.hasOwnProperty.call(e, "bugTrackerURL") &&
                        t.uint32(122).string(e.bugTrackerURL),
                      null != e.author &&
                        Object.hasOwnProperty.call(e, "author") &&
                        t.uint32(130).string(e.author),
                      null != e.license &&
                        Object.hasOwnProperty.call(e, "license") &&
                        t.uint32(138).string(e.license),
                      null != e.dependencies && e.dependencies.length)
                    )
                      for (let r = 0; r < e.dependencies.length; ++r)
                        o.api.Package.encode(
                          e.dependencies[r],
                          t.uint32(146).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Package();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.name = e.string();
                          break;
                        case 2:
                          i.spec = e.string();
                          break;
                        case 10:
                          i.description = e.string();
                          break;
                        case 11:
                          i.version = e.string();
                          break;
                        case 12:
                          i.homepageURL = e.string();
                          break;
                        case 13:
                          i.documentationURL = e.string();
                          break;
                        case 14:
                          i.sourceCodeURL = e.string();
                          break;
                        case 15:
                          i.bugTrackerURL = e.string();
                          break;
                        case 16:
                          i.author = e.string();
                          break;
                        case 17:
                          i.license = e.string();
                          break;
                        case 18:
                          (i.dependencies && i.dependencies.length) ||
                            (i.dependencies = []),
                            i.dependencies.push(
                              o.api.Package.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.name &&
                      e.hasOwnProperty("name") &&
                      !r.isString(e.name)
                    )
                      return "name: string expected";
                    if (
                      null != e.spec &&
                      e.hasOwnProperty("spec") &&
                      !r.isString(e.spec)
                    )
                      return "spec: string expected";
                    if (
                      null != e.description &&
                      e.hasOwnProperty("description") &&
                      !r.isString(e.description)
                    )
                      return "description: string expected";
                    if (
                      null != e.version &&
                      e.hasOwnProperty("version") &&
                      !r.isString(e.version)
                    )
                      return "version: string expected";
                    if (
                      null != e.homepageURL &&
                      e.hasOwnProperty("homepageURL") &&
                      !r.isString(e.homepageURL)
                    )
                      return "homepageURL: string expected";
                    if (
                      null != e.documentationURL &&
                      e.hasOwnProperty("documentationURL") &&
                      !r.isString(e.documentationURL)
                    )
                      return "documentationURL: string expected";
                    if (
                      null != e.sourceCodeURL &&
                      e.hasOwnProperty("sourceCodeURL") &&
                      !r.isString(e.sourceCodeURL)
                    )
                      return "sourceCodeURL: string expected";
                    if (
                      null != e.bugTrackerURL &&
                      e.hasOwnProperty("bugTrackerURL") &&
                      !r.isString(e.bugTrackerURL)
                    )
                      return "bugTrackerURL: string expected";
                    if (
                      null != e.author &&
                      e.hasOwnProperty("author") &&
                      !r.isString(e.author)
                    )
                      return "author: string expected";
                    if (
                      null != e.license &&
                      e.hasOwnProperty("license") &&
                      !r.isString(e.license)
                    )
                      return "license: string expected";
                    if (
                      null != e.dependencies &&
                      e.hasOwnProperty("dependencies")
                    ) {
                      if (!Array.isArray(e.dependencies))
                        return "dependencies: array expected";
                      for (let t = 0; t < e.dependencies.length; ++t) {
                        const n = o.api.Package.verify(e.dependencies[t]);
                        if (n) return "dependencies." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Package) return e;
                    const t = new o.api.Package();
                    if (
                      (null != e.name && (t.name = String(e.name)),
                      null != e.spec && (t.spec = String(e.spec)),
                      null != e.description &&
                        (t.description = String(e.description)),
                      null != e.version &&
                        (t.version = String(e.version)),
                      null != e.homepageURL &&
                        (t.homepageURL = String(e.homepageURL)),
                      null != e.documentationURL &&
                        (t.documentationURL = String(e.documentationURL)),
                      null != e.sourceCodeURL &&
                        (t.sourceCodeURL = String(e.sourceCodeURL)),
                      null != e.bugTrackerURL &&
                        (t.bugTrackerURL = String(e.bugTrackerURL)),
                      null != e.author && (t.author = String(e.author)),
                      null != e.license &&
                        (t.license = String(e.license)),
                      e.dependencies)
                    ) {
                      if (!Array.isArray(e.dependencies))
                        throw TypeError(
                          ".api.Package.dependencies: array expected"
                        );
                      t.dependencies = [];
                      for (let n = 0; n < e.dependencies.length; ++n) {
                        if ("object" !== typeof e.dependencies[n])
                          throw TypeError(
                            ".api.Package.dependencies: object expected"
                          );
                        t.dependencies[n] = o.api.Package.fromObject(
                          e.dependencies[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.dependencies = []),
                      t.defaults &&
                        ((n.name = ""),
                        (n.spec = ""),
                        (n.description = ""),
                        (n.version = ""),
                        (n.homepageURL = ""),
                        (n.documentationURL = ""),
                        (n.sourceCodeURL = ""),
                        (n.bugTrackerURL = ""),
                        (n.author = ""),
                        (n.license = "")),
                      null != e.name &&
                        e.hasOwnProperty("name") &&
                        (n.name = e.name),
                      null != e.spec &&
                        e.hasOwnProperty("spec") &&
                        (n.spec = e.spec),
                      null != e.description &&
                        e.hasOwnProperty("description") &&
                        (n.description = e.description),
                      null != e.version &&
                        e.hasOwnProperty("version") &&
                        (n.version = e.version),
                      null != e.homepageURL &&
                        e.hasOwnProperty("homepageURL") &&
                        (n.homepageURL = e.homepageURL),
                      null != e.documentationURL &&
                        e.hasOwnProperty("documentationURL") &&
                        (n.documentationURL = e.documentationURL),
                      null != e.sourceCodeURL &&
                        e.hasOwnProperty("sourceCodeURL") &&
                        (n.sourceCodeURL = e.sourceCodeURL),
                      null != e.bugTrackerURL &&
                        e.hasOwnProperty("bugTrackerURL") &&
                        (n.bugTrackerURL = e.bugTrackerURL),
                      null != e.author &&
                        e.hasOwnProperty("author") &&
                        (n.author = e.author),
                      null != e.license &&
                        e.hasOwnProperty("license") &&
                        (n.license = e.license),
                      e.dependencies && e.dependencies.length)
                    ) {
                      n.dependencies = [];
                      for (let r = 0; r < e.dependencies.length; ++r)
                        n.dependencies[r] = o.api.Package.toObject(
                          e.dependencies[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageSearch = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.query = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.query &&
                        Object.hasOwnProperty.call(e, "query") &&
                        t.uint32(10).string(e.query),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageSearch();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.query = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.query &&
                        e.hasOwnProperty("query") &&
                        !r.isString(e.query)
                      ? "query: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PackageSearch) return e;
                    const t = new o.api.PackageSearch();
                    return (
                      null != e.query && (t.query = String(e.query)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.query = ""),
                      null != e.query &&
                        e.hasOwnProperty("query") &&
                        (n.query = e.query),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageSearchResp = (() => {
                  function i(e) {
                    if (((this.results = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.results = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.results && e.results.length)
                    )
                      for (let r = 0; r < e.results.length; ++r)
                        o.api.Package.encode(
                          e.results[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageSearchResp();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.results && i.results.length) ||
                            (i.results = []),
                            i.results.push(
                              o.api.Package.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.results &&
                      e.hasOwnProperty("results")
                    ) {
                      if (!Array.isArray(e.results))
                        return "results: array expected";
                      for (let t = 0; t < e.results.length; ++t) {
                        const n = o.api.Package.verify(e.results[t]);
                        if (n) return "results." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PackageSearchResp) return e;
                    const t = new o.api.PackageSearchResp();
                    if (e.results) {
                      if (!Array.isArray(e.results))
                        throw TypeError(
                          ".api.PackageSearchResp.results: array expected"
                        );
                      t.results = [];
                      for (let n = 0; n < e.results.length; ++n) {
                        if ("object" !== typeof e.results[n])
                          throw TypeError(
                            ".api.PackageSearchResp.results: object expected"
                          );
                        t.results[n] = o.api.Package.fromObject(
                          e.results[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.results = []),
                      e.results && e.results.length)
                    ) {
                      n.results = [];
                      for (let r = 0; r < e.results.length; ++r)
                        n.results[r] = o.api.Package.toObject(
                          e.results[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageInfo = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.pkg = null),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.pkg &&
                        Object.hasOwnProperty.call(e, "pkg") &&
                        o.api.Package.encode(
                          e.pkg,
                          t.uint32(10).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageInfo();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.pkg = o.api.Package.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.pkg && e.hasOwnProperty("pkg")) {
                      const t = o.api.Package.verify(e.pkg);
                      if (t) return "pkg." + t;
                    }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PackageInfo) return e;
                    const t = new o.api.PackageInfo();
                    if (null != e.pkg) {
                      if ("object" !== typeof e.pkg)
                        throw TypeError(
                          ".api.PackageInfo.pkg: object expected"
                        );
                      t.pkg = o.api.Package.fromObject(e.pkg);
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.pkg = null),
                      null != e.pkg &&
                        e.hasOwnProperty("pkg") &&
                        (n.pkg = o.api.Package.toObject(e.pkg, t)),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PackageInfoResp = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.pkg = null),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.pkg &&
                        Object.hasOwnProperty.call(e, "pkg") &&
                        o.api.Package.encode(
                          e.pkg,
                          t.uint32(10).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageInfoResp();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.pkg = o.api.Package.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.pkg && e.hasOwnProperty("pkg")) {
                      const t = o.api.Package.verify(e.pkg);
                      if (t) return "pkg." + t;
                    }
                    return null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PackageInfoResp) return e;
                    const t = new o.api.PackageInfoResp();
                    if (null != e.pkg) {
                      if ("object" !== typeof e.pkg)
                        throw TypeError(
                          ".api.PackageInfoResp.pkg: object expected"
                        );
                      t.pkg = o.api.Package.fromObject(e.pkg);
                    }
                    return t;
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.pkg = null),
                      null != e.pkg &&
                        e.hasOwnProperty("pkg") &&
                        (n.pkg = o.api.Package.toObject(e.pkg, t)),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PackageAdd = (() => {
                  function i(e) {
                    if (((this.pkgs = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.pkgs = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.pkgs && e.pkgs.length)
                    )
                      for (let r = 0; r < e.pkgs.length; ++r)
                        o.api.Package.encode(
                          e.pkgs[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageAdd();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.pkgs && i.pkgs.length) || (i.pkgs = []),
                            i.pkgs.push(
                              o.api.Package.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                      if (!Array.isArray(e.pkgs))
                        return "pkgs: array expected";
                      for (let t = 0; t < e.pkgs.length; ++t) {
                        const n = o.api.Package.verify(e.pkgs[t]);
                        if (n) return "pkgs." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PackageAdd) return e;
                    const t = new o.api.PackageAdd();
                    if (e.pkgs) {
                      if (!Array.isArray(e.pkgs))
                        throw TypeError(
                          ".api.PackageAdd.pkgs: array expected"
                        );
                      t.pkgs = [];
                      for (let n = 0; n < e.pkgs.length; ++n) {
                        if ("object" !== typeof e.pkgs[n])
                          throw TypeError(
                            ".api.PackageAdd.pkgs: object expected"
                          );
                        t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.pkgs = []),
                      e.pkgs && e.pkgs.length)
                    ) {
                      n.pkgs = [];
                      for (let r = 0; r < e.pkgs.length; ++r)
                        n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageRemove = (() => {
                  function i(e) {
                    if (((this.pkgs = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.pkgs = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.pkgs && e.pkgs.length)
                    )
                      for (let r = 0; r < e.pkgs.length; ++r)
                        o.api.Package.encode(
                          e.pkgs[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageRemove();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.pkgs && i.pkgs.length) || (i.pkgs = []),
                            i.pkgs.push(
                              o.api.Package.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                      if (!Array.isArray(e.pkgs))
                        return "pkgs: array expected";
                      for (let t = 0; t < e.pkgs.length; ++t) {
                        const n = o.api.Package.verify(e.pkgs[t]);
                        if (n) return "pkgs." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PackageRemove) return e;
                    const t = new o.api.PackageRemove();
                    if (e.pkgs) {
                      if (!Array.isArray(e.pkgs))
                        throw TypeError(
                          ".api.PackageRemove.pkgs: array expected"
                        );
                      t.pkgs = [];
                      for (let n = 0; n < e.pkgs.length; ++n) {
                        if ("object" !== typeof e.pkgs[n])
                          throw TypeError(
                            ".api.PackageRemove.pkgs: object expected"
                          );
                        t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.pkgs = []),
                      e.pkgs && e.pkgs.length)
                    ) {
                      n.pkgs = [];
                      for (let r = 0; r < e.pkgs.length; ++r)
                        n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageInstall = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageInstall();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.PackageInstall
                      ? e
                      : new o.api.PackageInstall();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PackageListSpecfile = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageListSpecfile();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.PackageListSpecfile
                      ? e
                      : new o.api.PackageListSpecfile();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PackageListSpecfileResp = (() => {
                  function i(e) {
                    if (((this.pkgs = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.pkgs = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.pkgs && e.pkgs.length)
                    )
                      for (let r = 0; r < e.pkgs.length; ++r)
                        o.api.Package.encode(
                          e.pkgs[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageListSpecfileResp();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.pkgs && i.pkgs.length) || (i.pkgs = []),
                            i.pkgs.push(
                              o.api.Package.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (null != e.pkgs && e.hasOwnProperty("pkgs")) {
                      if (!Array.isArray(e.pkgs))
                        return "pkgs: array expected";
                      for (let t = 0; t < e.pkgs.length; ++t) {
                        const n = o.api.Package.verify(e.pkgs[t]);
                        if (n) return "pkgs." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PackageListSpecfileResp)
                      return e;
                    const t = new o.api.PackageListSpecfileResp();
                    if (e.pkgs) {
                      if (!Array.isArray(e.pkgs))
                        throw TypeError(
                          ".api.PackageListSpecfileResp.pkgs: array expected"
                        );
                      t.pkgs = [];
                      for (let n = 0; n < e.pkgs.length; ++n) {
                        if ("object" !== typeof e.pkgs[n])
                          throw TypeError(
                            ".api.PackageListSpecfileResp.pkgs: object expected"
                          );
                        t.pkgs[n] = o.api.Package.fromObject(e.pkgs[n]);
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.pkgs = []),
                      e.pkgs && e.pkgs.length)
                    ) {
                      n.pkgs = [];
                      for (let r = 0; r < e.pkgs.length; ++r)
                        n.pkgs[r] = o.api.Package.toObject(e.pkgs[r], t);
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PackageCacheSave = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return t || (t = n.create()), t;
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PackageCacheSave();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      e.skipType(7 & a);
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    return e instanceof o.api.PackageCacheSave
                      ? e
                      : new o.api.PackageCacheSave();
                  }),
                  (r.toObject = () => {
                    return {};
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.ChatScrollback = (() => {
                  function i(e) {
                    if (((this.scrollback = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.scrollback = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.scrollback && e.scrollback.length)
                    )
                      for (let r = 0; r < e.scrollback.length; ++r)
                        o.api.ChatMessage.encode(
                          e.scrollback[r],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ChatScrollback();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.scrollback && i.scrollback.length) ||
                            (i.scrollback = []),
                            i.scrollback.push(
                              o.api.ChatMessage.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.scrollback &&
                      e.hasOwnProperty("scrollback")
                    ) {
                      if (!Array.isArray(e.scrollback))
                        return "scrollback: array expected";
                      for (let t = 0; t < e.scrollback.length; ++t) {
                        const n = o.api.ChatMessage.verify(e.scrollback[t]);
                        if (n) return "scrollback." + n;
                      }
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ChatScrollback) return e;
                    const t = new o.api.ChatScrollback();
                    if (e.scrollback) {
                      if (!Array.isArray(e.scrollback))
                        throw TypeError(
                          ".api.ChatScrollback.scrollback: array expected"
                        );
                      t.scrollback = [];
                      for (let n = 0; n < e.scrollback.length; ++n) {
                        if ("object" !== typeof e.scrollback[n])
                          throw TypeError(
                            ".api.ChatScrollback.scrollback: object expected"
                          );
                        t.scrollback[n] = o.api.ChatMessage.fromObject(
                          e.scrollback[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.scrollback = []),
                      e.scrollback && e.scrollback.length)
                    ) {
                      n.scrollback = [];
                      for (let r = 0; r < e.scrollback.length; ++r)
                        n.scrollback[r] = o.api.ChatMessage.toObject(
                          e.scrollback[r],
                          t
                        );
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.Metrics = (() => {
                  function i(e) {
                    if (((this.prometheusMetricFamilies = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.prometheusMetricFamilies = r.emptyArray),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.prometheusMetricFamilies &&
                        e.prometheusMetricFamilies.length)
                    )
                      for (
                        let r = 0;
                        r < e.prometheusMetricFamilies.length;
                        ++r
                      )
                        t.uint32(10).bytes(e.prometheusMetricFamilies[r]);
                    return t;
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Metrics();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          (i.prometheusMetricFamilies &&
                            i.prometheusMetricFamilies.length) ||
                            (i.prometheusMetricFamilies = []),
                            i.prometheusMetricFamilies.push(e.bytes());
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.prometheusMetricFamilies &&
                      e.hasOwnProperty("prometheusMetricFamilies")
                    ) {
                      if (!Array.isArray(e.prometheusMetricFamilies))
                        return "prometheusMetricFamilies: array expected";
                      for (
                        let t = 0;
                        t < e.prometheusMetricFamilies.length;
                        ++t
                      )
                        if (
                          !(
                            (e.prometheusMetricFamilies[t] &&
                              "number" ===
                                typeof e.prometheusMetricFamilies[t]
                                  .length) ||
                            r.isString(e.prometheusMetricFamilies[t])
                          )
                        )
                          return "prometheusMetricFamilies: buffer[] expected";
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Metrics) return e;
                    const t = new o.api.Metrics();
                    if (e.prometheusMetricFamilies) {
                      if (!Array.isArray(e.prometheusMetricFamilies))
                        throw TypeError(
                          ".api.Metrics.prometheusMetricFamilies: array expected"
                        );
                      t.prometheusMetricFamilies = [];
                      for (
                        let n = 0;
                        n < e.prometheusMetricFamilies.length;
                        ++n
                      )
                        "string" === typeof e.prometheusMetricFamilies[n]
                          ? r.base64.decode(
                              e.prometheusMetricFamilies[n],
                              (t.prometheusMetricFamilies[
                                n
                              ] = r.newBuffer(
                                r.base64.length(
                                  e.prometheusMetricFamilies[n]
                                )
                              )),
                              0
                            )
                          : e.prometheusMetricFamilies[n].length &&
                            (t.prometheusMetricFamilies[n] =
                              e.prometheusMetricFamilies[n]);
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) &&
                        (n.prometheusMetricFamilies = []),
                      e.prometheusMetricFamilies &&
                        e.prometheusMetricFamilies.length)
                    ) {
                      n.prometheusMetricFamilies = [];
                      for (
                        let o = 0;
                        o < e.prometheusMetricFamilies.length;
                        ++o
                      )
                        n.prometheusMetricFamilies[o] =
                          t.bytes === String
                            ? r.base64.encode(
                                e.prometheusMetricFamilies[o],
                                0,
                                e.prometheusMetricFamilies[o].length
                              )
                            : t.bytes === Array
                            ? Array.prototype.slice.call(
                                e.prometheusMetricFamilies[o]
                              )
                            : e.prometheusMetricFamilies[o];
                    }
                    return n;
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PprofRequest = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  let a;
                  return (i.prototype.id = ""),
                  (i.prototype.pprofCpuProfileRequest = null),
                  (i.prototype.pprofHeapProfileRequest = null),
                  (i.prototype.pprofAllocsProfileRequest = null),
                  (i.prototype.pprofBlockProfileRequest = null),
                  (i.prototype.pprofMutexProfileRequest = null),
                  Object.defineProperty(i.prototype, "body", {
                    get: r.oneOfGetter(
                      (a = [
                        "pprofCpuProfileRequest",
                        "pprofHeapProfileRequest",
                        "pprofAllocsProfileRequest",
                        "pprofBlockProfileRequest",
                        "pprofMutexProfileRequest",
                      ])
                    ),
                    set: r.oneOfSetter(a),
                  }),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(10).string(e.id),
                      null != e.pprofCpuProfileRequest &&
                        Object.hasOwnProperty.call(
                          e,
                          "pprofCpuProfileRequest"
                        ) &&
                        o.api.PprofCpuProfileRequest.encode(
                          e.pprofCpuProfileRequest,
                          t.uint32(18).fork()
                        ).ldelim(),
                      null != e.pprofHeapProfileRequest &&
                        Object.hasOwnProperty.call(
                          e,
                          "pprofHeapProfileRequest"
                        ) &&
                        o.api.PprofHeapProfileRequest.encode(
                          e.pprofHeapProfileRequest,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.pprofAllocsProfileRequest &&
                        Object.hasOwnProperty.call(
                          e,
                          "pprofAllocsProfileRequest"
                        ) &&
                        o.api.PprofAllocsProfileRequest.encode(
                          e.pprofAllocsProfileRequest,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.pprofBlockProfileRequest &&
                        Object.hasOwnProperty.call(
                          e,
                          "pprofBlockProfileRequest"
                        ) &&
                        o.api.PprofBlockProfileRequest.encode(
                          e.pprofBlockProfileRequest,
                          t.uint32(42).fork()
                        ).ldelim(),
                      null != e.pprofMutexProfileRequest &&
                        Object.hasOwnProperty.call(
                          e,
                          "pprofMutexProfileRequest"
                        ) &&
                        o.api.PprofMutexProfileRequest.encode(
                          e.pprofMutexProfileRequest,
                          t.uint32(50).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.string();
                          break;
                        case 2:
                          i.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 3:
                          i.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 4:
                          i.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 5:
                          i.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 6:
                          i.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    const t = {};
                    if (
                      null != e.id &&
                      e.hasOwnProperty("id") &&
                      !r.isString(e.id)
                    )
                      return "id: string expected";
                    if (
                      null != e.pprofCpuProfileRequest &&
                      e.hasOwnProperty("pprofCpuProfileRequest") &&
                      ((t.body = 1),
                      (n = o.api.PprofCpuProfileRequest.verify(
                        e.pprofCpuProfileRequest
                      )))
                    )
                      return "pprofCpuProfileRequest." + n;
                    if (
                      null != e.pprofHeapProfileRequest &&
                      e.hasOwnProperty("pprofHeapProfileRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofHeapProfileRequest.verify(
                          e.pprofHeapProfileRequest
                        )))
                      )
                        return "pprofHeapProfileRequest." + n;
                    }
                    if (
                      null != e.pprofAllocsProfileRequest &&
                      e.hasOwnProperty("pprofAllocsProfileRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofAllocsProfileRequest.verify(
                          e.pprofAllocsProfileRequest
                        )))
                      )
                        return "pprofAllocsProfileRequest." + n;
                    }
                    if (
                      null != e.pprofBlockProfileRequest &&
                      e.hasOwnProperty("pprofBlockProfileRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofBlockProfileRequest.verify(
                          e.pprofBlockProfileRequest
                        )))
                      )
                        return "pprofBlockProfileRequest." + n;
                    }
                    if (
                      null != e.pprofMutexProfileRequest &&
                      e.hasOwnProperty("pprofMutexProfileRequest")
                    ) {
                      if (1 === t.body) return "body: multiple values";
                      var n;
                      if (
                        ((t.body = 1),
                        (n = o.api.PprofMutexProfileRequest.verify(
                          e.pprofMutexProfileRequest
                        )))
                      )
                        return "pprofMutexProfileRequest." + n;
                    }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PprofRequest) return e;
                    const t = new o.api.PprofRequest();
                    if (
                      (null != e.id && (t.id = String(e.id)),
                      null != e.pprofCpuProfileRequest)
                    ) {
                      if ("object" !== typeof e.pprofCpuProfileRequest)
                        throw TypeError(
                          ".api.PprofRequest.pprofCpuProfileRequest: object expected"
                        );
                      t.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.fromObject(
                        e.pprofCpuProfileRequest
                      );
                    }
                    if (null != e.pprofHeapProfileRequest) {
                      if ("object" !== typeof e.pprofHeapProfileRequest)
                        throw TypeError(
                          ".api.PprofRequest.pprofHeapProfileRequest: object expected"
                        );
                      t.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.fromObject(
                        e.pprofHeapProfileRequest
                      );
                    }
                    if (null != e.pprofAllocsProfileRequest) {
                      if ("object" !== typeof e.pprofAllocsProfileRequest)
                        throw TypeError(
                          ".api.PprofRequest.pprofAllocsProfileRequest: object expected"
                        );
                      t.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.fromObject(
                        e.pprofAllocsProfileRequest
                      );
                    }
                    if (null != e.pprofBlockProfileRequest) {
                      if ("object" !== typeof e.pprofBlockProfileRequest)
                        throw TypeError(
                          ".api.PprofRequest.pprofBlockProfileRequest: object expected"
                        );
                      t.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.fromObject(
                        e.pprofBlockProfileRequest
                      );
                    }
                    if (null != e.pprofMutexProfileRequest) {
                      if ("object" !== typeof e.pprofMutexProfileRequest)
                        throw TypeError(
                          ".api.PprofRequest.pprofMutexProfileRequest: object expected"
                        );
                      t.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.fromObject(
                        e.pprofMutexProfileRequest
                      );
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.id = ""),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.pprofCpuProfileRequest &&
                        e.hasOwnProperty("pprofCpuProfileRequest") &&
                        ((n.pprofCpuProfileRequest = o.api.PprofCpuProfileRequest.toObject(
                          e.pprofCpuProfileRequest,
                          t
                        )),
                        t.oneofs && (n.body = "pprofCpuProfileRequest")),
                      null != e.pprofHeapProfileRequest &&
                        e.hasOwnProperty("pprofHeapProfileRequest") &&
                        ((n.pprofHeapProfileRequest = o.api.PprofHeapProfileRequest.toObject(
                          e.pprofHeapProfileRequest,
                          t
                        )),
                        t.oneofs && (n.body = "pprofHeapProfileRequest")),
                      null != e.pprofAllocsProfileRequest &&
                        e.hasOwnProperty("pprofAllocsProfileRequest") &&
                        ((n.pprofAllocsProfileRequest = o.api.PprofAllocsProfileRequest.toObject(
                          e.pprofAllocsProfileRequest,
                          t
                        )),
                        t.oneofs &&
                          (n.body = "pprofAllocsProfileRequest")),
                      null != e.pprofBlockProfileRequest &&
                        e.hasOwnProperty("pprofBlockProfileRequest") &&
                        ((n.pprofBlockProfileRequest = o.api.PprofBlockProfileRequest.toObject(
                          e.pprofBlockProfileRequest,
                          t
                        )),
                        t.oneofs &&
                          (n.body = "pprofBlockProfileRequest")),
                      null != e.pprofMutexProfileRequest &&
                        e.hasOwnProperty("pprofMutexProfileRequest") &&
                        ((n.pprofMutexProfileRequest = o.api.PprofMutexProfileRequest.toObject(
                          e.pprofMutexProfileRequest,
                          t
                        )),
                        t.oneofs &&
                          (n.body = "pprofMutexProfileRequest")),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PprofAllocsProfileRequest = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.debug = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.debug &&
                        Object.hasOwnProperty.call(e, "debug") &&
                        t.uint32(8).bool(e.debug),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofAllocsProfileRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.debug = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        "boolean" !== typeof e.debug
                      ? "debug: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PprofAllocsProfileRequest)
                      return e;
                    const t = new o.api.PprofAllocsProfileRequest();
                    return (
                      null != e.debug && (t.debug = Boolean(e.debug)), t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.debug = !1),
                      null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        (n.debug = e.debug),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PprofBlockProfileRequest = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.debug = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.debug &&
                        Object.hasOwnProperty.call(e, "debug") &&
                        t.uint32(8).bool(e.debug),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofBlockProfileRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.debug = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        "boolean" !== typeof e.debug
                      ? "debug: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PprofBlockProfileRequest)
                      return e;
                    const t = new o.api.PprofBlockProfileRequest();
                    return (
                      null != e.debug && (t.debug = Boolean(e.debug)), t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.debug = !1),
                      null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        (n.debug = e.debug),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PprofCpuProfileRequest = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.seconds = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.seconds &&
                        Object.hasOwnProperty.call(e, "seconds") &&
                        t.uint32(8).int64(e.seconds),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofCpuProfileRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.seconds = e.int64();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null == e.seconds ||
                        !e.hasOwnProperty("seconds") ||
                        r.isInteger(e.seconds) ||
                        (e.seconds &&
                          r.isInteger(e.seconds.low) &&
                          r.isInteger(e.seconds.high))
                      ? null
                      : "seconds: integer|Long expected";
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PprofCpuProfileRequest)
                      return e;
                    const t = new o.api.PprofCpuProfileRequest();
                    return (
                      null != e.seconds &&
                        (r.Long
                          ? ((t.seconds = r.Long.fromValue(
                              e.seconds
                            )).unsigned = !1)
                          : "string" === typeof e.seconds
                          ? (t.seconds = parseInt(e.seconds, 10))
                          : "number" === typeof e.seconds
                          ? (t.seconds = e.seconds)
                          : "object" === typeof e.seconds &&
                            (t.seconds = new r.LongBits(
                              e.seconds.low >>> 0,
                              e.seconds.high >>> 0
                            ).toNumber())),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (t.defaults)
                      if (r.Long) {
                        const o = new r.Long(0, 0, !1);
                        n.seconds =
                          t.longs === String
                            ? o.toString()
                            : t.longs === Number
                            ? o.toNumber()
                            : o;
                      } else n.seconds = t.longs === String ? "0" : 0;
                    return (
                      null != e.seconds &&
                        e.hasOwnProperty("seconds") &&
                        ("number" === typeof e.seconds
                          ? (n.seconds =
                              t.longs === String
                                ? String(e.seconds)
                                : e.seconds)
                          : (n.seconds =
                              t.longs === String
                                ? r.Long.prototype.toString.call(
                                    e.seconds
                                  )
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.seconds.low >>> 0,
                                    e.seconds.high >>> 0
                                  ).toNumber()
                                : e.seconds)),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PprofHeapProfileRequest = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.gc = !1),
                  (r.prototype.debug = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.gc &&
                        Object.hasOwnProperty.call(e, "gc") &&
                        t.uint32(8).bool(e.gc),
                      null != e.debug &&
                        Object.hasOwnProperty.call(e, "debug") &&
                        t.uint32(16).bool(e.debug),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofHeapProfileRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.gc = e.bool();
                          break;
                        case 2:
                          i.debug = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.gc &&
                        e.hasOwnProperty("gc") &&
                        "boolean" !== typeof e.gc
                      ? "gc: boolean expected"
                      : null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        "boolean" !== typeof e.debug
                      ? "debug: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PprofHeapProfileRequest)
                      return e;
                    const t = new o.api.PprofHeapProfileRequest();
                    return (
                      null != e.gc && (t.gc = Boolean(e.gc)),
                      null != e.debug && (t.debug = Boolean(e.debug)),
                      t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && ((n.gc = !1), (n.debug = !1)),
                      null != e.gc &&
                        e.hasOwnProperty("gc") &&
                        (n.gc = e.gc),
                      null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        (n.debug = e.debug),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PprofMutexProfileRequest = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.debug = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.debug &&
                        Object.hasOwnProperty.call(e, "debug") &&
                        t.uint32(8).bool(e.debug),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofMutexProfileRequest();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.debug = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        "boolean" !== typeof e.debug
                      ? "debug: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PprofMutexProfileRequest)
                      return e;
                    const t = new o.api.PprofMutexProfileRequest();
                    return (
                      null != e.debug && (t.debug = Boolean(e.debug)), t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.debug = !1),
                      null != e.debug &&
                        e.hasOwnProperty("debug") &&
                        (n.debug = e.debug),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.PprofResponse = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = ""),
                  (i.prototype.profile = r.newBuffer([])),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(10).string(e.id),
                      null != e.profile &&
                        Object.hasOwnProperty.call(e, "profile") &&
                        t.uint32(18).bytes(e.profile),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PprofResponse();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.string();
                          break;
                        case 2:
                          i.profile = e.bytes();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.id &&
                        e.hasOwnProperty("id") &&
                        !r.isString(e.id)
                      ? "id: string expected"
                      : null != e.profile &&
                        e.hasOwnProperty("profile") &&
                        !(
                          (e.profile &&
                            "number" === typeof e.profile.length) ||
                          r.isString(e.profile)
                        )
                      ? "profile: buffer expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.PprofResponse) return e;
                    const t = new o.api.PprofResponse();
                    return (
                      null != e.id && (t.id = String(e.id)),
                      null != e.profile &&
                        ("string" === typeof e.profile
                          ? r.base64.decode(
                              e.profile,
                              (t.profile = r.newBuffer(
                                r.base64.length(e.profile)
                              )),
                              0
                            )
                          : e.profile.length && (t.profile = e.profile)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.id = ""),
                        t.bytes === String
                          ? (n.profile = "")
                          : ((n.profile = []),
                            t.bytes !== Array &&
                              (n.profile = r.newBuffer(n.profile)))),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.profile &&
                        e.hasOwnProperty("profile") &&
                        (n.profile =
                          t.bytes === String
                            ? r.base64.encode(
                                e.profile,
                                0,
                                e.profile.length
                              )
                            : t.bytes === Array
                            ? Array.prototype.slice.call(e.profile)
                            : e.profile),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.PTYConfig = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.pipeMode = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.pipeMode &&
                        Object.hasOwnProperty.call(e, "pipeMode") &&
                        t.uint32(8).bool(e.pipeMode),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.PTYConfig();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.pipeMode = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.pipeMode &&
                        e.hasOwnProperty("pipeMode") &&
                        "boolean" !== typeof e.pipeMode
                      ? "pipeMode: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.PTYConfig) return e;
                    const t = new o.api.PTYConfig();
                    return (
                      null != e.pipeMode &&
                        (t.pipeMode = Boolean(e.pipeMode)),
                      t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.pipeMode = !1),
                      null != e.pipeMode &&
                        e.hasOwnProperty("pipeMode") &&
                        (n.pipeMode = e.pipeMode),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.Repl = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.id = ""),
                  (i.prototype.language = ""),
                  (i.prototype.bucket = ""),
                  (i.prototype.slug = ""),
                  (i.prototype.user = ""),
                  (i.prototype.sourceRepl = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        t.uint32(10).string(e.id),
                      null != e.language &&
                        Object.hasOwnProperty.call(e, "language") &&
                        t.uint32(18).string(e.language),
                      null != e.bucket &&
                        Object.hasOwnProperty.call(e, "bucket") &&
                        t.uint32(26).string(e.bucket),
                      null != e.slug &&
                        Object.hasOwnProperty.call(e, "slug") &&
                        t.uint32(34).string(e.slug),
                      null != e.user &&
                        Object.hasOwnProperty.call(e, "user") &&
                        t.uint32(42).string(e.user),
                      null != e.sourceRepl &&
                        Object.hasOwnProperty.call(e, "sourceRepl") &&
                        t.uint32(50).string(e.sourceRepl),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Repl();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.id = e.string();
                          break;
                        case 2:
                          i.language = e.string();
                          break;
                        case 3:
                          i.bucket = e.string();
                          break;
                        case 4:
                          i.slug = e.string();
                          break;
                        case 5:
                          i.user = e.string();
                          break;
                        case 6:
                          i.sourceRepl = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.id &&
                        e.hasOwnProperty("id") &&
                        !r.isString(e.id)
                      ? "id: string expected"
                      : null != e.language &&
                        e.hasOwnProperty("language") &&
                        !r.isString(e.language)
                      ? "language: string expected"
                      : null != e.bucket &&
                        e.hasOwnProperty("bucket") &&
                        !r.isString(e.bucket)
                      ? "bucket: string expected"
                      : null != e.slug &&
                        e.hasOwnProperty("slug") &&
                        !r.isString(e.slug)
                      ? "slug: string expected"
                      : null != e.user &&
                        e.hasOwnProperty("user") &&
                        !r.isString(e.user)
                      ? "user: string expected"
                      : null != e.sourceRepl &&
                        e.hasOwnProperty("sourceRepl") &&
                        !r.isString(e.sourceRepl)
                      ? "sourceRepl: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.Repl) return e;
                    const t = new o.api.Repl();
                    return (
                      null != e.id && (t.id = String(e.id)),
                      null != e.language &&
                        (t.language = String(e.language)),
                      null != e.bucket && (t.bucket = String(e.bucket)),
                      null != e.slug && (t.slug = String(e.slug)),
                      null != e.user && (t.user = String(e.user)),
                      null != e.sourceRepl &&
                        (t.sourceRepl = String(e.sourceRepl)),
                      t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults &&
                        ((n.id = ""),
                        (n.language = ""),
                        (n.bucket = ""),
                        (n.slug = ""),
                        (n.user = ""),
                        (n.sourceRepl = "")),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        (n.id = e.id),
                      null != e.language &&
                        e.hasOwnProperty("language") &&
                        (n.language = e.language),
                      null != e.bucket &&
                        e.hasOwnProperty("bucket") &&
                        (n.bucket = e.bucket),
                      null != e.slug &&
                        e.hasOwnProperty("slug") &&
                        (n.slug = e.slug),
                      null != e.user &&
                        e.hasOwnProperty("user") &&
                        (n.user = e.user),
                      null != e.sourceRepl &&
                        e.hasOwnProperty("sourceRepl") &&
                        (n.sourceRepl = e.sourceRepl),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                (i.ResourceLimits = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.net = !1),
                  (i.prototype.memory = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.prototype.threads = 0),
                  (i.prototype.shares = 0),
                  (i.prototype.disk = r.Long
                    ? r.Long.fromBits(0, 0, !1)
                    : 0),
                  (i.prototype.cache = 0),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.net &&
                        Object.hasOwnProperty.call(e, "net") &&
                        t.uint32(8).bool(e.net),
                      null != e.memory &&
                        Object.hasOwnProperty.call(e, "memory") &&
                        t.uint32(16).int64(e.memory),
                      null != e.threads &&
                        Object.hasOwnProperty.call(e, "threads") &&
                        t.uint32(25).double(e.threads),
                      null != e.shares &&
                        Object.hasOwnProperty.call(e, "shares") &&
                        t.uint32(33).double(e.shares),
                      null != e.disk &&
                        Object.hasOwnProperty.call(e, "disk") &&
                        t.uint32(40).int64(e.disk),
                      null != e.cache &&
                        Object.hasOwnProperty.call(e, "cache") &&
                        t.uint32(48).int32(e.cache),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ResourceLimits();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.net = e.bool();
                          break;
                        case 2:
                          i.memory = e.int64();
                          break;
                        case 3:
                          i.threads = e.double();
                          break;
                        case 4:
                          i.shares = e.double();
                          break;
                        case 5:
                          i.disk = e.int64();
                          break;
                        case 6:
                          i.cache = e.int32();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.net &&
                      e.hasOwnProperty("net") &&
                      "boolean" !== typeof e.net
                    )
                      return "net: boolean expected";
                    if (
                      null != e.memory &&
                      e.hasOwnProperty("memory") &&
                      !r.isInteger(e.memory) &&
                      !(
                        e.memory &&
                        r.isInteger(e.memory.low) &&
                        r.isInteger(e.memory.high)
                      )
                    )
                      return "memory: integer|Long expected";
                    if (
                      null != e.threads &&
                      e.hasOwnProperty("threads") &&
                      "number" !== typeof e.threads
                    )
                      return "threads: number expected";
                    if (
                      null != e.shares &&
                      e.hasOwnProperty("shares") &&
                      "number" !== typeof e.shares
                    )
                      return "shares: number expected";
                    if (
                      null != e.disk &&
                      e.hasOwnProperty("disk") &&
                      !r.isInteger(e.disk) &&
                      !(
                        e.disk &&
                        r.isInteger(e.disk.low) &&
                        r.isInteger(e.disk.high)
                      )
                    )
                      return "disk: integer|Long expected";
                    if (null != e.cache && e.hasOwnProperty("cache"))
                      switch (e.cache) {
                        default:
                          return "cache: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ResourceLimits) return e;
                    const t = new o.api.ResourceLimits();
                    switch (
                      (null != e.net && (t.net = Boolean(e.net)),
                      null != e.memory &&
                        (r.Long
                          ? ((t.memory = r.Long.fromValue(
                              e.memory
                            )).unsigned = !1)
                          : "string" === typeof e.memory
                          ? (t.memory = parseInt(e.memory, 10))
                          : "number" === typeof e.memory
                          ? (t.memory = e.memory)
                          : "object" === typeof e.memory &&
                            (t.memory = new r.LongBits(
                              e.memory.low >>> 0,
                              e.memory.high >>> 0
                            ).toNumber())),
                      null != e.threads &&
                        (t.threads = Number(e.threads)),
                      null != e.shares && (t.shares = Number(e.shares)),
                      null != e.disk &&
                        (r.Long
                          ? ((t.disk = r.Long.fromValue(
                              e.disk
                            )).unsigned = !1)
                          : "string" === typeof e.disk
                          ? (t.disk = parseInt(e.disk, 10))
                          : "number" === typeof e.disk
                          ? (t.disk = e.disk)
                          : "object" === typeof e.disk &&
                            (t.disk = new r.LongBits(
                              e.disk.low >>> 0,
                              e.disk.high >>> 0
                            ).toNumber())),
                      e.cache)
                    ) {
                      case "NONE":
                      case 0:
                        t.cache = 0;
                        break;
                      case "USER":
                      case 1:
                        t.cache = 1;
                        break;
                      case "REPL":
                      case 2:
                        t.cache = 2;
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (t.defaults) {
                      if (((n.net = !1), r.Long)) {
                        var i = new r.Long(0, 0, !1);
                        n.memory =
                          t.longs === String
                            ? i.toString()
                            : t.longs === Number
                            ? i.toNumber()
                            : i;
                      } else n.memory = t.longs === String ? "0" : 0;
                      (n.threads = 0),
                        (n.shares = 0),
                        r.Long
                          ? ((i = new r.Long(0, 0, !1)),
                            (n.disk =
                              t.longs === String
                                ? i.toString()
                                : t.longs === Number
                                ? i.toNumber()
                                : i))
                          : (n.disk = t.longs === String ? "0" : 0),
                        (n.cache = t.enums === String ? "NONE" : 0);
                    }
                    return (
                      null != e.net &&
                        e.hasOwnProperty("net") &&
                        (n.net = e.net),
                      null != e.memory &&
                        e.hasOwnProperty("memory") &&
                        ("number" === typeof e.memory
                          ? (n.memory =
                              t.longs === String
                                ? String(e.memory)
                                : e.memory)
                          : (n.memory =
                              t.longs === String
                                ? r.Long.prototype.toString.call(e.memory)
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.memory.low >>> 0,
                                    e.memory.high >>> 0
                                  ).toNumber()
                                : e.memory)),
                      null != e.threads &&
                        e.hasOwnProperty("threads") &&
                        (n.threads =
                          t.json && !isFinite(e.threads)
                            ? String(e.threads)
                            : e.threads),
                      null != e.shares &&
                        e.hasOwnProperty("shares") &&
                        (n.shares =
                          t.json && !isFinite(e.shares)
                            ? String(e.shares)
                            : e.shares),
                      null != e.disk &&
                        e.hasOwnProperty("disk") &&
                        ("number" === typeof e.disk
                          ? (n.disk =
                              t.longs === String
                                ? String(e.disk)
                                : e.disk)
                          : (n.disk =
                              t.longs === String
                                ? r.Long.prototype.toString.call(e.disk)
                                : t.longs === Number
                                ? new r.LongBits(
                                    e.disk.low >>> 0,
                                    e.disk.high >>> 0
                                  ).toNumber()
                                : e.disk)),
                      null != e.cache &&
                        e.hasOwnProperty("cache") &&
                        (n.cache =
                          t.enums === String
                            ? o.api.ResourceLimits.Cachability[e.cache]
                            : e.cache),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Cachability = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "NONE")] = 0),
                      (t[(e[1] = "USER")] = 1),
                      (t[(e[2] = "REPL")] = 2),
                      t
                    );
                  })()),
                  i;
                })()),
                (i.Permissions = (() => {
                  function r(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (r.prototype.toggleAlwaysOn = !1),
                  (r.create = e => {
                    return r.fromObject(e);
                  }),
                  (r.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.toggleAlwaysOn &&
                        Object.hasOwnProperty.call(e, "toggleAlwaysOn") &&
                        t.uint32(8).bool(e.toggleAlwaysOn),
                      t
                    );
                  }),
                  (r.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (r.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.Permissions();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.toggleAlwaysOn = e.bool();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (r.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (r.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.toggleAlwaysOn &&
                        e.hasOwnProperty("toggleAlwaysOn") &&
                        "boolean" !== typeof e.toggleAlwaysOn
                      ? "toggleAlwaysOn: boolean expected"
                      : null;
                  }),
                  (r.fromObject = e => {
                    if (e instanceof o.api.Permissions) return e;
                    const t = new o.api.Permissions();
                    return (
                      null != e.toggleAlwaysOn &&
                        (t.toggleAlwaysOn = Boolean(e.toggleAlwaysOn)),
                      t
                    );
                  }),
                  (r.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.toggleAlwaysOn = !1),
                      null != e.toggleAlwaysOn &&
                        e.hasOwnProperty("toggleAlwaysOn") &&
                        (n.toggleAlwaysOn = e.toggleAlwaysOn),
                      n
                    );
                  }),
                  (r.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  r;
                })()),
                (i.ReplToken = (() => {
                  function i(e) {
                    if (((this.flags = []), e))
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  let a;
                  return (i.prototype.iat = null),
                  (i.prototype.exp = null),
                  (i.prototype.salt = ""),
                  (i.prototype.cluster = ""),
                  (i.prototype.persistence = 0),
                  (i.prototype.repl = null),
                  (i.prototype.id = null),
                  (i.prototype.classroom = null),
                  (i.prototype.resourceLimits = null),
                  (i.prototype.format = 0),
                  (i.prototype.presenced = null),
                  (i.prototype.flags = r.emptyArray),
                  (i.prototype.permissions = null),
                  Object.defineProperty(i.prototype, "metadata", {
                    get: r.oneOfGetter((a = ["repl", "id", "classroom"])),
                    set: r.oneOfSetter(a),
                  }),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    if (
                      (t || (t = n.create()),
                      null != e.iat &&
                        Object.hasOwnProperty.call(e, "iat") &&
                        o.google.protobuf.Timestamp.encode(
                          e.iat,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.exp &&
                        Object.hasOwnProperty.call(e, "exp") &&
                        o.google.protobuf.Timestamp.encode(
                          e.exp,
                          t.uint32(18).fork()
                        ).ldelim(),
                      null != e.salt &&
                        Object.hasOwnProperty.call(e, "salt") &&
                        t.uint32(26).string(e.salt),
                      null != e.cluster &&
                        Object.hasOwnProperty.call(e, "cluster") &&
                        t.uint32(34).string(e.cluster),
                      null != e.persistence &&
                        Object.hasOwnProperty.call(e, "persistence") &&
                        t.uint32(48).int32(e.persistence),
                      null != e.repl &&
                        Object.hasOwnProperty.call(e, "repl") &&
                        o.api.Repl.encode(
                          e.repl,
                          t.uint32(58).fork()
                        ).ldelim(),
                      null != e.id &&
                        Object.hasOwnProperty.call(e, "id") &&
                        o.api.ReplToken.ReplID.encode(
                          e.id,
                          t.uint32(66).fork()
                        ).ldelim(),
                      null != e.classroom &&
                        Object.hasOwnProperty.call(e, "classroom") &&
                        o.api.ReplToken.ClassroomMetadata.encode(
                          e.classroom,
                          t.uint32(74).fork()
                        ).ldelim(),
                      null != e.resourceLimits &&
                        Object.hasOwnProperty.call(e, "resourceLimits") &&
                        o.api.ResourceLimits.encode(
                          e.resourceLimits,
                          t.uint32(82).fork()
                        ).ldelim(),
                      null != e.format &&
                        Object.hasOwnProperty.call(e, "format") &&
                        t.uint32(96).int32(e.format),
                      null != e.presenced &&
                        Object.hasOwnProperty.call(e, "presenced") &&
                        o.api.ReplToken.Presenced.encode(
                          e.presenced,
                          t.uint32(106).fork()
                        ).ldelim(),
                      null != e.flags && e.flags.length)
                    )
                      for (let r = 0; r < e.flags.length; ++r)
                        t.uint32(114).string(e.flags[r]);
                    return (
                      null != e.permissions &&
                        Object.hasOwnProperty.call(e, "permissions") &&
                        o.api.Permissions.encode(
                          e.permissions,
                          t.uint32(122).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.ReplToken();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.iat = o.google.protobuf.Timestamp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 2:
                          i.exp = o.google.protobuf.Timestamp.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 3:
                          i.salt = e.string();
                          break;
                        case 4:
                          i.cluster = e.string();
                          break;
                        case 6:
                          i.persistence = e.int32();
                          break;
                        case 7:
                          i.repl = o.api.Repl.decode(e, e.uint32());
                          break;
                        case 8:
                          i.id = o.api.ReplToken.ReplID.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 9:
                          i.classroom = o.api.ReplToken.ClassroomMetadata.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 10:
                          i.resourceLimits = o.api.ResourceLimits.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 12:
                          i.format = e.int32();
                          break;
                        case 13:
                          i.presenced = o.api.ReplToken.Presenced.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 14:
                          (i.flags && i.flags.length) || (i.flags = []),
                            i.flags.push(e.string());
                          break;
                        case 15:
                          i.permissions = o.api.Permissions.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    if ("object" !== typeof e || null === e)
                      return "object expected";
                    const t = {};
                    if (
                      null != e.iat &&
                      e.hasOwnProperty("iat") &&
                      (n = o.google.protobuf.Timestamp.verify(e.iat))
                    )
                      return "iat." + n;
                    if (
                      null != e.exp &&
                      e.hasOwnProperty("exp") &&
                      (n = o.google.protobuf.Timestamp.verify(e.exp))
                    )
                      return "exp." + n;
                    if (
                      null != e.salt &&
                      e.hasOwnProperty("salt") &&
                      !r.isString(e.salt)
                    )
                      return "salt: string expected";
                    if (
                      null != e.cluster &&
                      e.hasOwnProperty("cluster") &&
                      !r.isString(e.cluster)
                    )
                      return "cluster: string expected";
                    if (
                      null != e.persistence &&
                      e.hasOwnProperty("persistence")
                    )
                      switch (e.persistence) {
                        default:
                          return "persistence: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    if (
                      null != e.repl &&
                      e.hasOwnProperty("repl") &&
                      ((t.metadata = 1), (n = o.api.Repl.verify(e.repl)))
                    )
                      return "repl." + n;
                    if (null != e.id && e.hasOwnProperty("id")) {
                      if (1 === t.metadata)
                        return "metadata: multiple values";
                      if (
                        ((t.metadata = 1),
                        (n = o.api.ReplToken.ReplID.verify(e.id)))
                      )
                        return "id." + n;
                    }
                    if (
                      null != e.classroom &&
                      e.hasOwnProperty("classroom")
                    ) {
                      if (1 === t.metadata)
                        return "metadata: multiple values";
                      var n;
                      if (
                        ((t.metadata = 1),
                        (n = o.api.ReplToken.ClassroomMetadata.verify(
                          e.classroom
                        )))
                      )
                        return "classroom." + n;
                    }
                    if (
                      null != e.resourceLimits &&
                      e.hasOwnProperty("resourceLimits") &&
                      (n = o.api.ResourceLimits.verify(e.resourceLimits))
                    )
                      return "resourceLimits." + n;
                    if (null != e.format && e.hasOwnProperty("format"))
                      switch (e.format) {
                        default:
                          return "format: enum value expected";
                        case 0:
                        case 1:
                      }
                    if (
                      null != e.presenced &&
                      e.hasOwnProperty("presenced") &&
                      (n = o.api.ReplToken.Presenced.verify(e.presenced))
                    )
                      return "presenced." + n;
                    if (null != e.flags && e.hasOwnProperty("flags")) {
                      if (!Array.isArray(e.flags))
                        return "flags: array expected";
                      for (let i = 0; i < e.flags.length; ++i)
                        if (!r.isString(e.flags[i]))
                          return "flags: string[] expected";
                    }
                    return null != e.permissions &&
                      e.hasOwnProperty("permissions") &&
                      (n = o.api.Permissions.verify(e.permissions))
                      ? "permissions." + n
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.ReplToken) return e;
                    const t = new o.api.ReplToken();
                    if (null != e.iat) {
                      if ("object" !== typeof e.iat)
                        throw TypeError(
                          ".api.ReplToken.iat: object expected"
                        );
                      t.iat = o.google.protobuf.Timestamp.fromObject(
                        e.iat
                      );
                    }
                    if (null != e.exp) {
                      if ("object" !== typeof e.exp)
                        throw TypeError(
                          ".api.ReplToken.exp: object expected"
                        );
                      t.exp = o.google.protobuf.Timestamp.fromObject(
                        e.exp
                      );
                    }
                    switch (
                      (null != e.salt && (t.salt = String(e.salt)),
                      null != e.cluster &&
                        (t.cluster = String(e.cluster)),
                      e.persistence)
                    ) {
                      case "PERSISTENT":
                      case 0:
                        t.persistence = 0;
                        break;
                      case "EPHEMERAL":
                      case 1:
                        t.persistence = 1;
                        break;
                      case "NONE":
                      case 2:
                        t.persistence = 2;
                    }
                    if (null != e.repl) {
                      if ("object" !== typeof e.repl)
                        throw TypeError(
                          ".api.ReplToken.repl: object expected"
                        );
                      t.repl = o.api.Repl.fromObject(e.repl);
                    }
                    if (null != e.id) {
                      if ("object" !== typeof e.id)
                        throw TypeError(
                          ".api.ReplToken.id: object expected"
                        );
                      t.id = o.api.ReplToken.ReplID.fromObject(e.id);
                    }
                    if (null != e.classroom) {
                      if ("object" !== typeof e.classroom)
                        throw TypeError(
                          ".api.ReplToken.classroom: object expected"
                        );
                      t.classroom = o.api.ReplToken.ClassroomMetadata.fromObject(
                        e.classroom
                      );
                    }
                    if (null != e.resourceLimits) {
                      if ("object" !== typeof e.resourceLimits)
                        throw TypeError(
                          ".api.ReplToken.resourceLimits: object expected"
                        );
                      t.resourceLimits = o.api.ResourceLimits.fromObject(
                        e.resourceLimits
                      );
                    }
                    switch (e.format) {
                      case "PROTOBUF":
                      case 0:
                        t.format = 0;
                        break;
                      case "JSON":
                      case 1:
                        t.format = 1;
                    }
                    if (null != e.presenced) {
                      if ("object" !== typeof e.presenced)
                        throw TypeError(
                          ".api.ReplToken.presenced: object expected"
                        );
                      t.presenced = o.api.ReplToken.Presenced.fromObject(
                        e.presenced
                      );
                    }
                    if (e.flags) {
                      if (!Array.isArray(e.flags))
                        throw TypeError(
                          ".api.ReplToken.flags: array expected"
                        );
                      t.flags = [];
                      for (let n = 0; n < e.flags.length; ++n)
                        t.flags[n] = String(e.flags[n]);
                    }
                    if (null != e.permissions) {
                      if ("object" !== typeof e.permissions)
                        throw TypeError(
                          ".api.ReplToken.permissions: object expected"
                        );
                      t.permissions = o.api.Permissions.fromObject(
                        e.permissions
                      );
                    }
                    return t;
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.flags = []),
                      t.defaults &&
                        ((n.iat = null),
                        (n.exp = null),
                        (n.salt = ""),
                        (n.cluster = ""),
                        (n.persistence =
                          t.enums === String ? "PERSISTENT" : 0),
                        (n.resourceLimits = null),
                        (n.format = t.enums === String ? "PROTOBUF" : 0),
                        (n.presenced = null),
                        (n.permissions = null)),
                      null != e.iat &&
                        e.hasOwnProperty("iat") &&
                        (n.iat = o.google.protobuf.Timestamp.toObject(
                          e.iat,
                          t
                        )),
                      null != e.exp &&
                        e.hasOwnProperty("exp") &&
                        (n.exp = o.google.protobuf.Timestamp.toObject(
                          e.exp,
                          t
                        )),
                      null != e.salt &&
                        e.hasOwnProperty("salt") &&
                        (n.salt = e.salt),
                      null != e.cluster &&
                        e.hasOwnProperty("cluster") &&
                        (n.cluster = e.cluster),
                      null != e.persistence &&
                        e.hasOwnProperty("persistence") &&
                        (n.persistence =
                          t.enums === String
                            ? o.api.ReplToken.Persistence[e.persistence]
                            : e.persistence),
                      null != e.repl &&
                        e.hasOwnProperty("repl") &&
                        ((n.repl = o.api.Repl.toObject(e.repl, t)),
                        t.oneofs && (n.metadata = "repl")),
                      null != e.id &&
                        e.hasOwnProperty("id") &&
                        ((n.id = o.api.ReplToken.ReplID.toObject(
                          e.id,
                          t
                        )),
                        t.oneofs && (n.metadata = "id")),
                      null != e.classroom &&
                        e.hasOwnProperty("classroom") &&
                        ((n.classroom = o.api.ReplToken.ClassroomMetadata.toObject(
                          e.classroom,
                          t
                        )),
                        t.oneofs && (n.metadata = "classroom")),
                      null != e.resourceLimits &&
                        e.hasOwnProperty("resourceLimits") &&
                        (n.resourceLimits = o.api.ResourceLimits.toObject(
                          e.resourceLimits,
                          t
                        )),
                      null != e.format &&
                        e.hasOwnProperty("format") &&
                        (n.format =
                          t.enums === String
                            ? o.api.ReplToken.WireFormat[e.format]
                            : e.format),
                      null != e.presenced &&
                        e.hasOwnProperty("presenced") &&
                        (n.presenced = o.api.ReplToken.Presenced.toObject(
                          e.presenced,
                          t
                        )),
                      e.flags && e.flags.length)
                    ) {
                      n.flags = [];
                      for (let r = 0; r < e.flags.length; ++r)
                        n.flags[r] = e.flags[r];
                    }
                    return (
                      null != e.permissions &&
                        e.hasOwnProperty("permissions") &&
                        (n.permissions = o.api.Permissions.toObject(
                          e.permissions,
                          t
                        )),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  (i.Persistence = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "PERSISTENT")] = 0),
                      (t[(e[1] = "EPHEMERAL")] = 1),
                      (t[(e[2] = "NONE")] = 2),
                      t
                    );
                  })()),
                  (i.ClassroomMetadata = (() => {
                    function i(e) {
                      if (e)
                        for (
                          let t = Object.keys(e), n = 0;
                          n < t.length;
                          ++n
                        )
                          null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    return (i.prototype.id = ""),
                    (i.prototype.language = ""),
                    (i.create = e => {
                      return i.fromObject(e);
                    }),
                    (i.encode = (e, t) => {
                      return (
                        t || (t = n.create()),
                        null != e.id &&
                          Object.hasOwnProperty.call(e, "id") &&
                          t.uint32(10).string(e.id),
                        null != e.language &&
                          Object.hasOwnProperty.call(e, "language") &&
                          t.uint32(18).string(e.language),
                        t
                      );
                    }),
                    (i.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (i.decode = (e, n) => {
                      e instanceof t || (e = t.create(e));
                      for (
                        var r = void 0 === n ? e.len : e.pos + n,
                          i = new o.api.ReplToken.ClassroomMetadata();
                        e.pos < r;

                      ) {
                        const a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            i.id = e.string();
                            break;
                          case 2:
                            i.language = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return i;
                    }),
                    (i.decodeDelimited = function (e) {
                      return (
                        e instanceof t || (e = new t(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (i.verify = e => {
                      return "object" !== typeof e || null === e
                        ? "object expected"
                        : null != e.id &&
                          e.hasOwnProperty("id") &&
                          !r.isString(e.id)
                        ? "id: string expected"
                        : null != e.language &&
                          e.hasOwnProperty("language") &&
                          !r.isString(e.language)
                        ? "language: string expected"
                        : null;
                    }),
                    (i.fromObject = e => {
                      if (
                        e instanceof o.api.ReplToken.ClassroomMetadata
                      )
                        return e;
                      const t = new o.api.ReplToken.ClassroomMetadata();
                      return (
                        null != e.id && (t.id = String(e.id)),
                        null != e.language &&
                          (t.language = String(e.language)),
                        t
                      );
                    }),
                    (i.toObject = (e, t) => {
                      t || (t = {});
                      const n = {};
                      return (
                        t.defaults && ((n.id = ""), (n.language = "")),
                        null != e.id &&
                          e.hasOwnProperty("id") &&
                          (n.id = e.id),
                        null != e.language &&
                          e.hasOwnProperty("language") &&
                          (n.language = e.language),
                        n
                      );
                    }),
                    (i.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        e.util.toJSONOptions
                      );
                    }),
                    i;
                  })()),
                  (i.ReplID = (() => {
                    function i(e) {
                      if (e)
                        for (
                          let t = Object.keys(e), n = 0;
                          n < t.length;
                          ++n
                        )
                          null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    return (i.prototype.id = ""),
                    (i.prototype.sourceRepl = ""),
                    (i.create = e => {
                      return i.fromObject(e);
                    }),
                    (i.encode = (e, t) => {
                      return (
                        t || (t = n.create()),
                        null != e.id &&
                          Object.hasOwnProperty.call(e, "id") &&
                          t.uint32(10).string(e.id),
                        null != e.sourceRepl &&
                          Object.hasOwnProperty.call(e, "sourceRepl") &&
                          t.uint32(18).string(e.sourceRepl),
                        t
                      );
                    }),
                    (i.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (i.decode = (e, n) => {
                      e instanceof t || (e = t.create(e));
                      for (
                        var r = void 0 === n ? e.len : e.pos + n,
                          i = new o.api.ReplToken.ReplID();
                        e.pos < r;

                      ) {
                        const a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            i.id = e.string();
                            break;
                          case 2:
                            i.sourceRepl = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return i;
                    }),
                    (i.decodeDelimited = function (e) {
                      return (
                        e instanceof t || (e = new t(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (i.verify = e => {
                      return "object" !== typeof e || null === e
                        ? "object expected"
                        : null != e.id &&
                          e.hasOwnProperty("id") &&
                          !r.isString(e.id)
                        ? "id: string expected"
                        : null != e.sourceRepl &&
                          e.hasOwnProperty("sourceRepl") &&
                          !r.isString(e.sourceRepl)
                        ? "sourceRepl: string expected"
                        : null;
                    }),
                    (i.fromObject = e => {
                      if (e instanceof o.api.ReplToken.ReplID) return e;
                      const t = new o.api.ReplToken.ReplID();
                      return (
                        null != e.id && (t.id = String(e.id)),
                        null != e.sourceRepl &&
                          (t.sourceRepl = String(e.sourceRepl)),
                        t
                      );
                    }),
                    (i.toObject = (e, t) => {
                      t || (t = {});
                      const n = {};
                      return (
                        t.defaults &&
                          ((n.id = ""), (n.sourceRepl = "")),
                        null != e.id &&
                          e.hasOwnProperty("id") &&
                          (n.id = e.id),
                        null != e.sourceRepl &&
                          e.hasOwnProperty("sourceRepl") &&
                          (n.sourceRepl = e.sourceRepl),
                        n
                      );
                    }),
                    (i.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        e.util.toJSONOptions
                      );
                    }),
                    i;
                  })()),
                  (i.WireFormat = (() => {
                    const e = {}, t = Object.create(e);
                    return (
                      (t[(e[0] = "PROTOBUF")] = 0),
                      (t[(e[1] = "JSON")] = 1),
                      t
                    );
                  })()),
                  (i.Presenced = (() => {
                    function i(e) {
                      if (e)
                        for (
                          let t = Object.keys(e), n = 0;
                          n < t.length;
                          ++n
                        )
                          null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    return (i.prototype.bearerID = 0),
                    (i.prototype.bearerName = ""),
                    (i.create = e => {
                      return i.fromObject(e);
                    }),
                    (i.encode = (e, t) => {
                      return (
                        t || (t = n.create()),
                        null != e.bearerID &&
                          Object.hasOwnProperty.call(e, "bearerID") &&
                          t.uint32(8).uint32(e.bearerID),
                        null != e.bearerName &&
                          Object.hasOwnProperty.call(e, "bearerName") &&
                          t.uint32(18).string(e.bearerName),
                        t
                      );
                    }),
                    (i.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (i.decode = (e, n) => {
                      e instanceof t || (e = t.create(e));
                      for (
                        var r = void 0 === n ? e.len : e.pos + n,
                          i = new o.api.ReplToken.Presenced();
                        e.pos < r;

                      ) {
                        const a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            i.bearerID = e.uint32();
                            break;
                          case 2:
                            i.bearerName = e.string();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return i;
                    }),
                    (i.decodeDelimited = function (e) {
                      return (
                        e instanceof t || (e = new t(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (i.verify = e => {
                      return "object" !== typeof e || null === e
                        ? "object expected"
                        : null != e.bearerID &&
                          e.hasOwnProperty("bearerID") &&
                          !r.isInteger(e.bearerID)
                        ? "bearerID: integer expected"
                        : null != e.bearerName &&
                          e.hasOwnProperty("bearerName") &&
                          !r.isString(e.bearerName)
                        ? "bearerName: string expected"
                        : null;
                    }),
                    (i.fromObject = e => {
                      if (e instanceof o.api.ReplToken.Presenced)
                        return e;
                      const t = new o.api.ReplToken.Presenced();
                      return (
                        null != e.bearerID &&
                          (t.bearerID = e.bearerID >>> 0),
                        null != e.bearerName &&
                          (t.bearerName = String(e.bearerName)),
                        t
                      );
                    }),
                    (i.toObject = (e, t) => {
                      t || (t = {});
                      const n = {};
                      return (
                        t.defaults &&
                          ((n.bearerID = 0), (n.bearerName = "")),
                        null != e.bearerID &&
                          e.hasOwnProperty("bearerID") &&
                          (n.bearerID = e.bearerID),
                        null != e.bearerName &&
                          e.hasOwnProperty("bearerName") &&
                          (n.bearerName = e.bearerName),
                        n
                      );
                    }),
                    (i.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        e.util.toJSONOptions
                      );
                    }),
                    i;
                  })()),
                  i;
                })()),
                (i.GovalTokenMetadata = (() => {
                  function i(e) {
                    if (e)
                      for (let t = Object.keys(e), n = 0; n < t.length; ++n)
                        null != e[t[n]] && (this[t[n]] = e[t[n]]);
                  }
                  return (i.prototype.keyId = ""),
                  (i.create = e => {
                    return i.fromObject(e);
                  }),
                  (i.encode = (e, t) => {
                    return (
                      t || (t = n.create()),
                      null != e.keyId &&
                        Object.hasOwnProperty.call(e, "keyId") &&
                        t.uint32(10).string(e.keyId),
                      t
                    );
                  }),
                  (i.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (i.decode = (e, n) => {
                    e instanceof t || (e = t.create(e));
                    for (
                      var r = void 0 === n ? e.len : e.pos + n,
                        i = new o.api.GovalTokenMetadata();
                      e.pos < r;

                    ) {
                      const a = e.uint32();
                      switch (a >>> 3) {
                        case 1:
                          i.keyId = e.string();
                          break;
                        default:
                          e.skipType(7 & a);
                      }
                    }
                    return i;
                  }),
                  (i.decodeDelimited = function (e) {
                    return (
                      e instanceof t || (e = new t(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (i.verify = e => {
                    return "object" !== typeof e || null === e
                      ? "object expected"
                      : null != e.keyId &&
                        e.hasOwnProperty("keyId") &&
                        !r.isString(e.keyId)
                      ? "keyId: string expected"
                      : null;
                  }),
                  (i.fromObject = e => {
                    if (e instanceof o.api.GovalTokenMetadata) return e;
                    const t = new o.api.GovalTokenMetadata();
                    return (
                      null != e.keyId && (t.keyId = String(e.keyId)), t
                    );
                  }),
                  (i.toObject = (e, t) => {
                    t || (t = {});
                    const n = {};
                    return (
                      t.defaults && (n.keyId = ""),
                      null != e.keyId &&
                        e.hasOwnProperty("keyId") &&
                        (n.keyId = e.keyId),
                      n
                    );
                  }),
                  (i.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      e.util.toJSONOptions
                    );
                  }),
                  i;
                })()),
                i;
              })()),
              (o.google = (() => {
                const i = {};
                return (i.protobuf = (() => {
                  const i = {};
                  return (i.Timestamp = (() => {
                    function i(e) {
                      if (e)
                        for (
                          let t = Object.keys(e), n = 0;
                          n < t.length;
                          ++n
                        )
                          null != e[t[n]] && (this[t[n]] = e[t[n]]);
                    }
                    return (i.prototype.seconds = r.Long
                      ? r.Long.fromBits(0, 0, !1)
                      : 0),
                    (i.prototype.nanos = 0),
                    (i.create = e => {
                      return i.fromObject(e);
                    }),
                    (i.encode = (e, t) => {
                      return (
                        t || (t = n.create()),
                        null != e.seconds &&
                          Object.hasOwnProperty.call(e, "seconds") &&
                          t.uint32(8).int64(e.seconds),
                        null != e.nanos &&
                          Object.hasOwnProperty.call(e, "nanos") &&
                          t.uint32(16).int32(e.nanos),
                        t
                      );
                    }),
                    (i.encodeDelimited = function (e, t) {
                      return this.encode(e, t).ldelim();
                    }),
                    (i.decode = (e, n) => {
                      e instanceof t || (e = t.create(e));
                      for (
                        var r = void 0 === n ? e.len : e.pos + n,
                          i = new o.google.protobuf.Timestamp();
                        e.pos < r;

                      ) {
                        const a = e.uint32();
                        switch (a >>> 3) {
                          case 1:
                            i.seconds = e.int64();
                            break;
                          case 2:
                            i.nanos = e.int32();
                            break;
                          default:
                            e.skipType(7 & a);
                        }
                      }
                      return i;
                    }),
                    (i.decodeDelimited = function (e) {
                      return (
                        e instanceof t || (e = new t(e)),
                        this.decode(e, e.uint32())
                      );
                    }),
                    (i.verify = e => {
                      return "object" !== typeof e || null === e
                        ? "object expected"
                        : null == e.seconds ||
                          !e.hasOwnProperty("seconds") ||
                          r.isInteger(e.seconds) ||
                          (e.seconds &&
                            r.isInteger(e.seconds.low) &&
                            r.isInteger(e.seconds.high))
                        ? null != e.nanos &&
                          e.hasOwnProperty("nanos") &&
                          !r.isInteger(e.nanos)
                          ? "nanos: integer expected"
                          : null
                        : "seconds: integer|Long expected";
                    }),
                    (i.fromObject = e => {
                      if (e instanceof o.google.protobuf.Timestamp)
                        return e;
                      const t = new o.google.protobuf.Timestamp();
                      return (
                        null != e.seconds &&
                          (r.Long
                            ? ((t.seconds = r.Long.fromValue(
                                e.seconds
                              )).unsigned = !1)
                            : "string" === typeof e.seconds
                            ? (t.seconds = parseInt(e.seconds, 10))
                            : "number" === typeof e.seconds
                            ? (t.seconds = e.seconds)
                            : "object" === typeof e.seconds &&
                              (t.seconds = new r.LongBits(
                                e.seconds.low >>> 0,
                                e.seconds.high >>> 0
                              ).toNumber())),
                        null != e.nanos && (t.nanos = 0 | e.nanos),
                        t
                      );
                    }),
                    (i.toObject = (e, t) => {
                      t || (t = {});
                      const n = {};
                      if (t.defaults) {
                        if (r.Long) {
                          const o = new r.Long(0, 0, !1);
                          n.seconds =
                            t.longs === String
                              ? o.toString()
                              : t.longs === Number
                              ? o.toNumber()
                              : o;
                        } else n.seconds = t.longs === String ? "0" : 0;
                        n.nanos = 0;
                      }
                      return (
                        null != e.seconds &&
                          e.hasOwnProperty("seconds") &&
                          ("number" === typeof e.seconds
                            ? (n.seconds =
                                t.longs === String
                                  ? String(e.seconds)
                                  : e.seconds)
                            : (n.seconds =
                                t.longs === String
                                  ? r.Long.prototype.toString.call(
                                      e.seconds
                                    )
                                  : t.longs === Number
                                  ? new r.LongBits(
                                      e.seconds.low >>> 0,
                                      e.seconds.high >>> 0
                                    ).toNumber()
                                  : e.seconds)),
                        null != e.nanos &&
                          e.hasOwnProperty("nanos") &&
                          (n.nanos = e.nanos),
                        n
                      );
                    }),
                    (i.prototype.toJSON = function () {
                      return this.constructor.toObject(
                        this,
                        e.util.toJSONOptions
                      );
                    }),
                    i;
                  })()),
                  i;
                })()),
                i;
              })()),
              o;
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
  },
]);
//# sourceMappingURL=3cad5a7b.98bd7b3c6693f1abdd2b.js.map
