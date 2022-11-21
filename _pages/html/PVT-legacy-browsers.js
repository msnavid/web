/************ 
 * Pvt Test *
 ************/


// store info about the experiment session:
let expName = 'PVT';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const PVT_TrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PVT_TrialsLoopBegin(PVT_TrialsLoopScheduler));
flowScheduler.add(PVT_TrialsLoopScheduler);
flowScheduler.add(PVT_TrialsLoopEnd);
flowScheduler.add(The_endRoutineBegin());
flowScheduler.add(The_endRoutineEachFrame());
flowScheduler.add(The_endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.0';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}/${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var InstructionsText;
var InstrucKey;
var ISIClock;
var minISI;
var maxISI;
var length_of_task;
var feed;
var timing;
var ISI_text;
var dontrespond;
var TargetClock;
var Targetstim;
var Response;
var FeedbackClock;
var Feedback_text;
var End_taskClock;
var The_endClock;
var Goodbye;
var GoodbyeEnd;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  InstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionsText',
    text: 'Welcome!\n\n\nIn this task, you are required to press the SPACEBAR as quick as possible after each red counter that appears on the screen.\n\n\nStart the task by pressing the SPACEBAR.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  InstrucKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  // Run 'Begin Experiment' code from ISIcode
  minISI = 1;
  maxISI = 10;
  length_of_task = 180;
  feed = 0.5;
  timing = new util.Clock();
  // warning_beep = new sound.Sound("beep.wav");
  // warning_beep = new sound.Sound( {"win": psychoJS.window, "value": "html/resources/beep.wav", "volume": 1.0} ); 
  
  ISI_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  dontrespond = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Target"
  TargetClock = new util.Clock();
  Targetstim = new visual.TextStim({
    win: psychoJS.window,
    name: 'Targetstim',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  Response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  Feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "End_task"
  End_taskClock = new util.Clock();
  // Initialize components for Routine "The_end"
  The_endClock = new util.Clock();
  Goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'Goodbye',
    text: 'Thanks you for your participation\n\nPress the SPACEBAR to end the task',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  GoodbyeEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _InstrucKey_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    InstrucKey.keys = undefined;
    InstrucKey.rt = undefined;
    _InstrucKey_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(InstructionsText);
    InstructionsComponents.push(InstrucKey);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionsText* updates
    if (t >= 0.0 && InstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsText.tStart = t;  // (not accounting for frame time here)
      InstructionsText.frameNStart = frameN;  // exact frame index
      
      InstructionsText.setAutoDraw(true);
    }

    
    // *InstrucKey* updates
    if (t >= 0.0 && InstrucKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrucKey.tStart = t;  // (not accounting for frame time here)
      InstrucKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrucKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrucKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrucKey.clearEvents(); });
    }

    if (InstrucKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrucKey.getKeys({keyList: ['space'], waitRelease: false});
      _InstrucKey_allKeys = _InstrucKey_allKeys.concat(theseKeys);
      if (_InstrucKey_allKeys.length > 0) {
        InstrucKey.keys = _InstrucKey_allKeys[_InstrucKey_allKeys.length - 1].name;  // just the last key pressed
        InstrucKey.rt = _InstrucKey_allKeys[_InstrucKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(InstrucKey.corr, level);
    }
    psychoJS.experiment.addData('InstrucKey.keys', InstrucKey.keys);
    if (typeof InstrucKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('InstrucKey.rt', InstrucKey.rt);
        routineTimer.reset();
        }
    
    InstrucKey.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PVT_Trials;
function PVT_TrialsLoopBegin(PVT_TrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    PVT_Trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'PVT_Trials'
    });
    psychoJS.experiment.addLoop(PVT_Trials); // add the loop to the experiment
    currentLoop = PVT_Trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    PVT_Trials.forEach(function() {
      snapshot = PVT_Trials.getSnapshot();
    
      PVT_TrialsLoopScheduler.add(importConditions(snapshot));
      PVT_TrialsLoopScheduler.add(ISIRoutineBegin(snapshot));
      PVT_TrialsLoopScheduler.add(ISIRoutineEachFrame());
      PVT_TrialsLoopScheduler.add(ISIRoutineEnd(snapshot));
      PVT_TrialsLoopScheduler.add(TargetRoutineBegin(snapshot));
      PVT_TrialsLoopScheduler.add(TargetRoutineEachFrame());
      PVT_TrialsLoopScheduler.add(TargetRoutineEnd(snapshot));
      PVT_TrialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      PVT_TrialsLoopScheduler.add(FeedbackRoutineEachFrame());
      PVT_TrialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      PVT_TrialsLoopScheduler.add(End_taskRoutineBegin(snapshot));
      PVT_TrialsLoopScheduler.add(End_taskRoutineEachFrame());
      PVT_TrialsLoopScheduler.add(End_taskRoutineEnd(snapshot));
      PVT_TrialsLoopScheduler.add(PVT_TrialsLoopEndIteration(PVT_TrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PVT_TrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(PVT_Trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function PVT_TrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var randISI;
var overall_timer;
var realISI;
var message;
var _dontrespond_allKeys;
var ISIComponents;
function ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI' ---
    t = 0;
    ISIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from ISIcode
    randISI = ((Math.random() * (maxISI - minISI)) + minISI);
    if ((PVT_Trials.thisN === 0)) {
        overall_timer = new util.Clock();
        realISI = 0;
    }
    if ((PVT_Trials.thisN > 0)) {
        realISI = feed;
    }
    message = "You did not hit the button!";
    psychoJS.experiment.addData("ISI", randISI);
    
    dontrespond.keys = undefined;
    dontrespond.rt = undefined;
    _dontrespond_allKeys = [];
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(ISI_text);
    ISIComponents.push(dontrespond);
    
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var frameRemains;
function ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI' ---
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from ISIcode
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = dontrespond.getKeys({"keyList": ["space"], "waitRelease": false});
    keys = function () {
        var _pj_a = [], _pj_b = keys;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var key = _pj_b[_pj_c];
            _pj_a.push(key.name);
        }
        return _pj_a;
    }
    .call(this);
    if (_pj.in_es6("space", keys)) {
        message = "Too soon!";
        continueRoutine = false;
    }
    
    
    // *ISI_text* updates
    if (t >= 0.0 && ISI_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI_text.tStart = t;  // (not accounting for frame time here)
      ISI_text.frameNStart = frameN;  // exact frame index
      
      ISI_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + (randISI - realISI) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ISI_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI_text.setAutoDraw(false);
    }
    
    // *dontrespond* updates
    if (t >= 0.0 && dontrespond.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dontrespond.tStart = t;  // (not accounting for frame time here)
      dontrespond.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dontrespond.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dontrespond.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dontrespond.clearEvents(); });
    }

    frameRemains = 0.0 + (randISI - 1) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dontrespond.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dontrespond.status = PsychoJS.Status.FINISHED;
  }

    if (dontrespond.status === PsychoJS.Status.STARTED) {
      let theseKeys = dontrespond.getKeys({keyList: ['space'], waitRelease: false});
      _dontrespond_allKeys = _dontrespond_allKeys.concat(theseKeys);
      if (_dontrespond_allKeys.length > 0) {
        dontrespond.keys = _dontrespond_allKeys[_dontrespond_allKeys.length - 1].name;  // just the last key pressed
        dontrespond.rt = _dontrespond_allKeys[_dontrespond_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI' ---
    ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(dontrespond.corr, level);
    }
    psychoJS.experiment.addData('dontrespond.keys', dontrespond.keys);
    if (typeof dontrespond.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dontrespond.rt', dontrespond.rt);
        routineTimer.reset();
        }
    
    dontrespond.stop();
    // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Response_allKeys;
var TargetComponents;
function TargetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Target' ---
    t = 0;
    TargetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Target_code
    timing.reset();
    if ((message === "Too soon!")) {
        psychoJS.experiment.addData("Accuracy", 0);
        psychoJS.experiment.addData("RTms", NaN);
        continueRoutine = false;
    }
    
    Response.keys = undefined;
    Response.rt = undefined;
    _Response_allKeys = [];
    // keep track of which components have finished
    TargetComponents = [];
    TargetComponents.push(Targetstim);
    TargetComponents.push(Response);
    
    TargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var time;
function TargetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Target' ---
    // get current time
    t = TargetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from Target_code
    //time = Number.parseInt((Math.round(timing.getTime(), 3) * 1000));
    
    // time = timing.getTime() * 1000;
    
    // time = Number.parseFloat((Math.round(timing.getTime(), 3) * 1000));
    
    time = Math.round((timing.getTime() * 1000)).toString();
    
    // *Targetstim* updates
    if (t >= 0.0 && Targetstim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Targetstim.tStart = t;  // (not accounting for frame time here)
      Targetstim.frameNStart = frameN;  // exact frame index
      
      Targetstim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Targetstim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Targetstim.setAutoDraw(false);
    }
    
    if (Targetstim.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Targetstim.setText(time, false);
    }
    
    // *Response* updates
    if (t >= 0.0 && Response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response.tStart = t;  // (not accounting for frame time here)
      Response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Response.clearEvents(); });
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Response.status = PsychoJS.Status.FINISHED;
  }

    if (Response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Response.getKeys({keyList: ['space'], waitRelease: false});
      _Response_allKeys = _Response_allKeys.concat(theseKeys);
      if (_Response_allKeys.length > 0) {
        Response.keys = _Response_allKeys[_Response_allKeys.length - 1].name;  // just the last key pressed
        Response.rt = _Response_allKeys[_Response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TargetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Target' ---
    TargetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from Target_code
    if (typeof Response.rt == 'number' && !isNaN(Response.rt)) {
        if (!Number.isInteger(Response.rt)) {
            message = Math.round((Response.rt * 1000)).toString();
            psychoJS.experiment.addData("Accuracy", 1);
            psychoJS.experiment.addData("RTms", (Response.rt * 1000));
            }
    }
    if ((timing.getTime() >= 2.99)) {
        message = "No response!";
        // warning_beep.play();
        Response.rt = timing.getTime();
        psychoJS.experiment.addData("RTms", NaN);
        psychoJS.experiment.addData("Accuracy", 0);
        continueRoutine = false;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Response.corr, level);
    }
    psychoJS.experiment.addData('Response.keys', Response.keys);
    if (typeof Response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Response.rt', Response.rt);
        routineTimer.reset();
        }
    
    Response.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Feedback_text.setText(message);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(Feedback_text);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback_text* updates
    if (t >= 0.0 && Feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback_text.tStart = t;  // (not accounting for frame time here)
      Feedback_text.frameNStart = frameN;  // exact frame index
      
      Feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + feed - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var End_taskComponents;
function End_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End_task' ---
    t = 0;
    End_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    End_taskComponents = [];
    
    End_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function End_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End_task' ---
    // get current time
    t = End_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    End_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var time_in_task;
function End_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End_task' ---
    End_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from End_task_2
    time_in_task = overall_timer.getTime();
    if ((time_in_task >= length_of_task)) {
        continueRoutine = false;
        PVT_Trials.finished = true;
    }
    
    // the Routine "End_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _GoodbyeEnd_allKeys;
var The_endComponents;
function The_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'The_end' ---
    t = 0;
    The_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    GoodbyeEnd.keys = undefined;
    GoodbyeEnd.rt = undefined;
    _GoodbyeEnd_allKeys = [];
    // keep track of which components have finished
    The_endComponents = [];
    The_endComponents.push(Goodbye);
    The_endComponents.push(GoodbyeEnd);
    
    The_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function The_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'The_end' ---
    // get current time
    t = The_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Goodbye* updates
    if (t >= 0.0 && Goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Goodbye.tStart = t;  // (not accounting for frame time here)
      Goodbye.frameNStart = frameN;  // exact frame index
      
      Goodbye.setAutoDraw(true);
    }

    
    // *GoodbyeEnd* updates
    if (t >= 0.0 && GoodbyeEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GoodbyeEnd.tStart = t;  // (not accounting for frame time here)
      GoodbyeEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { GoodbyeEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { GoodbyeEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { GoodbyeEnd.clearEvents(); });
    }

    if (GoodbyeEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = GoodbyeEnd.getKeys({keyList: ['space'], waitRelease: false});
      _GoodbyeEnd_allKeys = _GoodbyeEnd_allKeys.concat(theseKeys);
      if (_GoodbyeEnd_allKeys.length > 0) {
        GoodbyeEnd.keys = _GoodbyeEnd_allKeys[_GoodbyeEnd_allKeys.length - 1].name;  // just the last key pressed
        GoodbyeEnd.rt = _GoodbyeEnd_allKeys[_GoodbyeEnd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    The_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function The_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'The_end' ---
    The_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GoodbyeEnd.corr, level);
    }
    psychoJS.experiment.addData('GoodbyeEnd.keys', GoodbyeEnd.keys);
    if (typeof GoodbyeEnd.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GoodbyeEnd.rt', GoodbyeEnd.rt);
        routineTimer.reset();
        }
    
    GoodbyeEnd.stop();
    // the Routine "The_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
