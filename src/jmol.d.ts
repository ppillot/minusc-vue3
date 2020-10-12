declare const Jmol: JmolStatic

interface JmolStatic {
    /**
     * This function creates in JavaScript space of the webpage the Jmol object
     * (either a Jmol/Java applet or a JSmol object). The following example will
     * create a `myJmol` global variable that holds the Jmol Object, and the
     * object will be inserted in the page (unless `Jmol.setDocument()` has been
     * set false).
     * @example
     * Jmol.getApplet("myJmol", Info);
     *
     * @param {string} appletName
     * @param {Partial<AppletParameters>} info
     * @param {boolean} checkOnly optional true/false flag that allows, when set
     * `true`, to get a JavaScript Object that can be checked to see what type
     * of Jmol Object would be created on this particular platform -- a signed
     * Java applet, an unsigned Java applet, a JSmol canvas, an image, a WebGL
     * canvas, etc.
     * @returns {JmolApplet}
     */
    getApplet (appletName: string, info: Partial<jmol.AppletParameters>, checkOnly?: boolean): jmol.JmolApplet

    /**
     * This function creates and inserts the lightweight variety of JSmol object
     * @external http://wiki.jmol.org/index.php/Lightweight_JSmol
     *
     * @param {string} appletName
     * @param {Partial<AppletParameters>} info
     * @param {boolean} checkOnly
     * @returns {JmolApplet}
     */
    getTMApplet (appletName: string, info: Partial<jmol.AppletParameters>, checkOnly?: boolean): jmol.JmolApplet

    /**
     * Useful for inserting the Jmol object code into the page, either after
     * page has loaded or in the case when the object was generated and stored
     * in a variable, e.g. after Jmol.setDocument(0). It is particularly useful
     * with .innerHTML inside window.onload or in a function fired by user
     * action (or the jQuery equivalents .html() and $(document).ready).
     *
     * @example // (1) Recommended, simplest syntax that creates 2 objects and inserts them at the same time:
     * $(document).ready(function(){
     *   $("#place1").html(Jmol.getAppletHtml("jmol1", Info));
     *   $("#place2").html(Jmol.getAppletHtml("jmol2", Info));
     * });
     *
     * @example // (2) The following is equivalent (using html syntax instead of jQuery syntax). Note, however, that in some complex pages this may fail to insert the JSmol object.
     * window.onload = function(){
     *   document.getElementById("place1").innerHTML = Jmol.getAppletHtml("jmol1", Info);
     *   document.getElementById("place2").innerHTML = Jmol.getAppletHtml("jmol2", Info);
     * });
     * @example // (3) If you need to create the Jmol Objects first, and insert them later on:
     * // Using jQuery syntax:
     *
     * $(document).ready(function(){
     *   Jmol.setDocument(0);
     *   Jmol.getApplet("jmol1", Info); // creates the object but does not insert it
     *   Jmol.getApplet("jmol2", Info);
     *   [...] // other actions, that may affect the Jmol objects
     *   // now, let's insert the objects in the page:
     *   $("#place1").html(Jmol.getAppletHtml(jmol1));
     *   $("#place2").html(Jmol.getAppletHtml(jmol2));
     * });
     * @example // (4) Using html syntax:
     *
     * window.onload = function(){
     *   Jmol.setDocument(0);
     *   Jmol.getApplet("jmol1", Info); // creates the object but does not insert it
     *   Jmol.getApplet("jmol2", Info);
     *   [...] // other actions, that may affect the Jmol objects
     *   // now, let's insert the objects in the page:
     *   document.getElementById("place1").innerHTML = Jmol.getAppletHtml(jmol1);
     *   document.getElementById("place2").innerHTML = Jmol.getAppletHtml(jmol2);
     * });
     * @example // (5) The same approaches may be followed to insert the Jmol Object upon user action, rather than upon page load:
     *
     * function insertMyJmol(){
     *   $("#myJmolContainer").html(Jmol.getAppletHtml("myJmol", Info));
     * });
     *
     * <div id="myJmolContainer"></div>
     * <input type="button" value="show 3D structure" onClick="insertMyJmol()">
     * function insertMyJmol2(targetDiv, objectID){
     *   $("#"+targetDiv).html(Jmol.getAppletHtml(objectID, Info));
     * });
     *
     * <div id="myPlace"></div>
     * <input type="button" value="show 3D structure" onClick="insertMyJmol2('myPlace','myJmol')">
     *
     * @param {string} appletName
     * @param {Partial<AppletParameters>} info
     * @returns {string}
     */
    getAppletHtml (appletName: string, info: Partial<jmol.AppletParameters>): string
    getAppletHtml (applet: jmol.JmolApplet): string

    /**
     * This function returns the version of Jmol-JSO, like Jmol-JSO 13.1.12.
     * @example
     * var t = Jmol.getVersion(myJmol);
     * alert(t);
     *
     * @returns {string}
     */
    getVersion (): string

    /**
     * Used to change the dimensions of the specified Jmol object.
     * size: a value or a pair of width/height values in an array, either
     * expressed in pixels or as percent.
     * Alternative method: you can create an envelope div that encloses the
     * point of insertion of the Jmol object, declare the size of the latter as
     * 100% in the Info variable, and control via CSS and JavaScript the initial
     * and changed size of the envelope div. This method also supports
     * user-resizable envelopes (e.g. jQueryUI's resizable); Jmol will resize
     * accordingly in real time.
     *
     * @example
     * Jmol.resizeApplet(myJmol, 400);
     * Jmol.resizeApplet(myJmol, [400,700]);
     * Jmol.resizeApplet(myJmol, "100%");
     * Jmol.resizeApplet(myJmol, ["50%","60%"]);
     *
     * @param {JmolApplet} applet
     * @param {number} size
     */
    resizeApplet (applet: jmol.JmolApplet, size: number):void
    resizeApplet (applet: jmol.JmolApplet, size: [number, number]):void
    resizeApplet (applet: jmol.JmolApplet, size: string):void
    resizeApplet (applet: jmol.JmolApplet, size: [string, string]):void

    setAppletSync (applets: jmol.JmolApplet[], commands: string, isJmolJSV: boolean): void

    /**
     * Sets the target html context where the Jmol Object must be created
     * If using `Jmol.setDocument(false)` or `Jmol.setDocument(0)`, the Jmol
     * Object may be later inserted using `Jmol.getAppletHtml()`. What happens
     * is that the HTML code for the object is put into the internal
     * `applet._code` variable and not written to the page. Then you can still
     * refer to the applet, but place it on the page after the controls are
     * made, or inject ot into the page upon some user action.
     * For some situations this may be equivalent to a simpler alternative:
     * Just define the Jmol object variable like `var myJmol = "myJmol"` and
     * then, "myJmol" will suffice when providing any options or creating
     * buttons and controls. Finally, use `Jmol.getApplet(myJmol,....)` and the
     * Object will work.
     * @example
     * Jmol.setDocument(false);
     * Jmol.getApplet("myJmol", Info);
     * (...)
     * document.getElementById('someContainer').innerHTML = Jmol.getAppletHtml(myJmol);
     * // or, using jQuery syntax;
     * $("#someContainer").html(Jmol.getAppletHtml(myJmol));
     *
     * @param {(Document|false|0)} doc target html context where the Jmol Object must be created
     */
    setDocument (doc: Document|false|0): void

    /**
     * Allows to customize the items offered in the drop-down menu that fetches
     * molecules from databases, when using `addSelectionOptions:true`.
     * The first value in each element is the JmolScript prefix to direct the
     * request to the database (this cannot be customized). The second value is
     * the text that is displayed in the drop-down menu in the page, below the
     * Jmol object.
     * @example
     * Jmol.setGrabberOptions([
     *  ["$", "small molecules at NCI"],
     *  [":", "small molecules at PubChem"],
     *  ["==", "ligands at PDB"],
     *  ["=", "macromolecules at PDB"]
     * ])
     *
     * @param {[string, string][]} options
     */
    setGrabberOptions (options: [string, string][]): void

    /**
     * This displays or hides the information panel (which holds the log
     * console, or maybe an associated JME applet). By default, that panel is
     * located in the same position as the Jmol viewer, so displaying Info will
     * hide Jmol and vice versa.
     *
     * @param {JmolApplet} applet
     * @param {boolean} toggle true or false flag
     */
    showInfo (applet: jmol.JmolApplet, toggle: boolean): void

    /**
     * Sets the information div for the Jmol object to be info (HTML)
     * and optionally displays it.
     *
     * @param {JmolApplet} applet
     * @param {string} info
     * @param {boolean} isShown
     */
    setInfo (applet: jmol.JmolApplet, info: string, isShown: boolean): void

    /**
     * Indicates id of the DOM node into which the Jmol object will be inserted,
     * following XHTML format when creating page elements. Largely untested.
     *
     * @param {string} DOMid
     */
    setXHTML (DOMid: string): void

    /**
     * Allows to extract to JavaScript (e.g. to a variable) information from a
     * variable set in the Jmol scripting language, a Jmol math expression, or
     * some model information.
     * Note: An older version of this method, Jmol.evaluate(), is deprecated,
     * as it only returns String, Integer, or Float values.
     * @example
     * alert( Jmol.evaluateVar(myJmol, "a") );
     *  // Displays the value of the 'a' variable if set in JmolScript.
     * alert( Jmol.evaluateVar(myJmol, "{*}.xyz") );
     *  // Displays the coordinates of the geometric center of the model.
     * alert( Jmol.evaluateVar(myJmol, "{*}.length") );
     *  // Displays the total number of atoms in the model.
     * alert( Jmol.evaluateVar(myJmol, "{carbon}.bonds.length.min") );
     *  // Displays the minimum bond length between carbon atoms.
     * alert( Jmol.evaluateVar(myJmol, "_atomPicked") );
     *  // Displays the index of the atom that was most recently picked.
     * @param {JmolApplet} applet
     * @param {string} molecularMath
     * @returns {string}
     */
    evaluateVar (applet: jmol.JmolApplet, molecularMath: string): any

    /**
     * Returns applet information in the form of a JavaScript array, when
     * applicable, or other appropriate JavaScript variable type such as
     * boolean, number, or string.
     * @example
     * var atoms = Jmol.getPropertyAsArray(myJmol, "atomInfo", "all");
     * var atom1 = atoms[0];
     * var x = atom1.x;
     * var info = atom1.info;
     *
     * @param {JmolApplet} applet
     * @param {string} key
     * @param {string} value
     * @returns {*}
     */
    getPropertyAsArray (applet: jmol.JmolApplet, key: string, value: string): any

    /**
     * Returns the property as a Java (not JavaScript) object. This function is
     * for advanced users only and is not generally recommended, as it delivers
     * a pointer to the Java object itself, not a copy of it. This pointer may
     * or may not be valid indefinitely and may or may not be properly
     * garbage-collected by all browsers. The principal use of this function is
     * for access to public Viewer methods that are not generally available via
     * the applet interface.
     * Note that even the HTML5 version of JSmol returns objects that for all
     * practical purposes are "Java Objects" using this method. The only
     * difference is that the JavaScript implementations have no aspect of
     * "private" or "public" -- all methods are effectively public.
     * Many of these public methods are listed in JmolViewer.java
     * @external http://sourceforge.net/p/jmol/code/HEAD/tree/trunk/Jmol/src/org/jmol/api/JmolViewer.java
     * @example
     * var viewer = jmolGetPropertyAsJavaObject("jmolViewer")
     * var radius = viewer.getRotationRadius()
     *
     * @param {JmolApplet} applet
     * @param {string} key
     * @param {string} value
     * @returns {*}
     */
    getPropertyAsJavaObject (applet: jmol.JmolApplet, key: string, value: string): any

    /**
     * Returns data as per jmolGetPropertyAsArray, but always as a JavaScript
     * string in JavaScript Object Notation. This string can then be surrounded
     * by parentheses and evaluated to create array content. Alternatively, it
     * may be converted to a JavaScript object with properties (see examples).
     * @example
     * var z = Jmol.getPropertyAsJSON(myJmol, "filename") // {"filename": "file:/C:/data/caffeine.xyz"}
     *
     * @example
     * var z = Jmol.getPropertyAsJSON(myJmol, "filename");
     * alert(  JSON.parse(z).filename ); // the url of the model file
     *
     * @example
     * var z = Jmol.getPropertyAsJSON(myJmol, "appletInfo");
     * var d = JSON.parse(z);
     * alert( d.appletInfo.version ); // e.g. 14.6.2_2016.08.28
     * alert( d.appletInfo.htmlName ); // the name of the JSmol object
     * alert( d.appletInfo.documentBase ); // the url of the page containing the JSmol object
     *
     * @param {JmolApplet} applet
     * @param {string} key
     * @param {string} value
     * @returns {*}
     */
    getPropertyAsJSON (applet: jmol.JmolApplet, key: string, value: string): any

    /**
     * Returns data as per jmolGetPropertyAsArray, but always as a JavaScript
     * string. In the case of arrayed data, this string is formatted for easier
     * reading.
     * @example
     * var s = Jmol.getPropertyAsString(myJmol, 'stateInfo');
     * @example
     * img.src = 'data:image/jpeg;base64,' + Jmol.getPropertyAsString(myJmol, 'image');
     *
     * @param {JmolApplet} applet
     * @param {string} key
     * @param {string} value
     * @returns {string}
     */
    getPropertyAsString (applet: jmol.JmolApplet, key: string, value: string): string

    /**
     * Opens a dialog asking for a file to be loaded, either from local disk or
     * from a url. It may be a model file or a script or a data file. (The load
     * operation will be run asynchronously.)
     * @example
     * <input type="button" value="Load a file" onClick="Jmol.loadFileFromDialog(myJmol)">
     *
     * @example
     * Jmol.jmolButton(myJmol, function() { Jmol.loadFileFromDialog(myJmol) }, "Load a file");
     *
     * @param {JmolApplet} applet
     */
    loadFileFromDialog (applet: jmol.JmolApplet): void

    /**
     * Runs a Jmol script asynchronously, meaning the script is put into a queue
     * and most likely not processed before the function call is returned. This
     * call can be made any time after applet creation; one does not have to
     * wait until the applet is ready for receiving scripts (as was the case
     * with Jmol/Java when Jmol.js was used).
     *
     * @example
     * Jmol.script(myJmol, "spacefill off; wireframe 0.3;");
     * Jmol.script(myJmol, "script someScript.spt;");
     *
     * @param {JmolApplet} applet
     * @param {string} script a text string containing one or several Jmol commands is placed on the script queue
     */
    script (applet: jmol.JmolApplet, script: string): void

    /**
     * Runs a script synchronously, returning the text that might have gone to
     * the console.
     * NOTE: When using JSmol/Java do not call this method from a callback
     * directly, as it may result in Java thread lock, causing the entire
     * browser to hang. See alternatives under scriptWait.
     * @example
     * alert(Jmol.scriptEcho(myJmol, "show file"));
     *
     * @param {JmolApplet} applet
     * @param {string} script
     * @returns {string}
     */
    scriptEcho (applet: jmol.JmolApplet, script: string): string

    /**
     * Runs a script synchronously, similarly to scriptEcho(), but returns a
     * string including messages.
     * NOTE: When using JSmol/Java do not call this method from a callback
     * directly, as it may result in Java thread lock, causing the entire
     * browser to hang.
     *
     * Always consider using evaluateVar() instead of scriptWait. The syntax:
     * `x = Jmol.evaluateVar(myJmol, "script('background red; print backgroundColor')")`
     * will assign the string [xff0000] to the JavaScript variable x.
     * @example
     * x = Jmol.scriptWait(myJmol, "background red")
     * //Runs that command and also returns this in the JavaScript variable x:
     *
     * // 2,scriptStatus,0,script 2 started
     * // 4,scriptStatus,0,Script completed
     * // 6,scriptStatus,0,Jmol script terminated
     * // 5,scriptTerminated,1,Jmol script terminated successfully
     * // 1,scriptStarted,2,background red;print backgroundColor
     * // 3,scriptEcho,0,[xff0000]
     *
     * @example
     * Jmol.scriptWait(myJmol, "backgroundred")
     * // does nothing --since the command is incorrect, note the typo-- and returns this in the JavaScript variable x:
     *
     * // 2,scriptStatus,0,script 15 started
     * // 3,scriptStatus,0,script ERROR: command expected
     * // ----
     * //         >> backgroundred <<
     * // 4,scriptStatus,0,Script completed
     * // 5,scriptTerminated,1,Jmol script terminated successfully
     * // 7,scriptTerminated,1,Jmol script terminated unsuccessfully: Jmol script terminated
     * // 1,scriptStarted,15,backgroundred
     * // 6,scriptError,0,Jmol script terminated
     *
     * @example If you still want to call Jmol.scriptWait from within a callback, use the following syntax to force the scriptWait call to be in a different thread:
     *
     * function myCallback(app,param1,param2,....) {
     *
     * setTimeout(function() {
     * ...your JavaScript callback code here, including Jmol.scriptWait()...
     * },10);
     * }
     *
     * @param {JmolApplet} applet
     * @param {string} script
     * @returns {string}
     */
    scriptWait (applet: jmol.JmolApplet, script: string): string

}

declare namespace jmol {
    interface AppletParameters {
        /**
         * The size of the Jmol object in pixels or expressed as percent of
         * its container height as a string in quotes
         * @default 300
         * @example
         * height: "100%"
         */
        height: number|string
        /**
         * The size of the Jmol object in pixels or expressed as percent of
         * its container width as a string in quotes
         * @default 300
         * @example
         * width: "100%"
         */
        width: number|string
        /**
         * The background color of the Jmol object, as a quoted text string
         * in any JmolScript-supported format: color name,
         * decimal triplet [r,g,b] or hexadecimal [xRRGGBB],
         * or in html-style format: #RRGGBB.
         * Note that default is now white
         * @default "white"
         * @example
         * color: "#DDDDDD"
         */
        color: string
        /**
         * The path to folder j2s including its own name; the contents of this
         * folder are essential for JSmol to work.
         * @default "j2s"
         * @example
         * j2s: "jmol/j2s"
         */
        j2sPath: string
        /**
         * The URL of `jsmol.php` to be used for getting file data into non-Java
         * modalities. For better performance and to avoid cross-domain issues,
         * you should set this to a url in the same server your pages are.
         * In the scheme of the standard JSmol distribution, that will be
         * "php/jsmol.php".
         * If you cannot have PHP working in your server, you may use
         * "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php", since that
         * is a public site accessible to cross-domain AJAX calls.
         * @default "http://your.server.domain/jsmol.php"
         * @example
         * serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php"
         */
        serverURL: string
        /**
         * (Java modality only) The file to be used, usually either
         * `JmolApplet0.jar` (for faster incremental loading) or `JmolApplet.jar`
         * (a single 2.5+ MB download), or the signed versions
         * `JmolAppletSigned0.jar` and `JmolAppletSigned.jar`. Be careful that
         * the setting here should match that of `isSigned`.
         * @default "JmolApplet0.jar"
         * @example
         * jarFile: "JmolApplet0.jar"
         */
        jarFile: string
        /**
         * (Java modality only) Make sure to change this to true if the file
         * indicated for `jarFile` is the signed applet.
         * @type {boolean}
         * @memberof AppletParameters
         * @default false
         */
        isSigned: boolean
        /**
         * (Java modality only) The path to the applet files. Note that if the
         * unsigned applet is used and the page is tested locally, then all
         * model files must be in or under the folder indicated by this value,
         * to satisfy Java security policy
         * @default "java"
         * @type {string}
         * @memberof AppletParameters
         */
        jarPath: string
        /**
         * This string determines the mode to be used (either Java applet or a surrogates).
         * - The default setting is *HTML5* and indicates to use JSmol in html5-only mode.
         * - The value *Java* forces use of the Jmol Applet (and it may display
         * a message if Java is not enabled).
         * - The value *WebGL* will force the WebGL modality (combined with html5).
         *
         * @default 'HTML5'
         * @type {('HTML5'|'Java'|'WebGL')}
         * @memberof AppletParameters
         */
        use: 'HTML5'|'Java'|'WebGL'
        /**
         * Set the path and filename of an image that is displayed in place of
         * the Jmol object while this is loading.
         * It may be disabled using `Info.appletLoadingImage = "none"`
         * @default j2sPath + "/img/JSmol_spinner.gif"
         * @type {string|'none'}
         * @memberof AppletParameters
         */
        appletLoadingImage: string|'none'
        /**
         * Set the path and filename of an image that will be displayed on top
         * of the Jmol object (usually as an initial replacement or during
         * loading, see `deferApplet` and `deferUncover` parameters).
         * @default " "
         * @type {string}
         * @memberof AppletParameters
         */
        coverImage: string
        /**
         * Set the path and filename of a small image (icon) that is displayed
         * over the bottom-left corner of the cover image to give a visual hint
         * that clicking will uncover the model. A default icon, is included in
         * the JSmol distribution; you may specify your own using this parameter.
         * @default j2sPath + "/img/play_make_live.jpg"
         * @type {string}
         * @memberof AppletParameters
         */
        makeLiveImage: string
        /**
         * Set a tip that is displayed before model starts to load
         * @default " "
         * @type {string}
         * @memberof AppletParameters
         */
        coverTitle: string
        /**
         * Set a Jmol command or script that will be executed upon clicking the
         * cover image.
         * @default " "
         * @type {string}
         * @memberof AppletParameters
         */
        coverScript: string
        /**
         * If set true, the model will not be loaded until the user clicks on
         * the cover image (see `coverImage` parameter).
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        deferApplet: boolean
        /**
         * If set `true`, the cover image will remain until command execution
         * is complete.
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        deferUncover: boolean
        /**
         * If set false, displays messages ('console') in the Jmol panel while
         * the Jmol object is being built initially.
         * Note: the default used to be `false` but was changed since
         * version 14.5.2_2016.02.14, given the implementation of
         * `appletLoadingImage`
         * @default true
         * @type {boolean}
         * @memberof AppletParameters
         */
        disableInitialConsole: boolean
        /**
         * If set `true`, avoids the display of messages in a single line,
         * colored, at bottom-left of the page while code loads (both initially
         * and every time a new module is requested by a running script)
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        disableJ2SLoadMonitor: boolean
        /**
         * A JavaScript function (without quotes) to call when the Jmol object
         * has been created and is ready to receive commands (and also called
         * when the object is destroyed e.g. when the page is closed).
         * Note: The JavaScript function will receive as argument a pointer to
         * the particular Jmol object that invoked it (as exemplified in the
         * third example below).
         * For example, with `readyFunction: jmolIsReady` any of the following
         * JavaScript function definitions could be used:
         * @example
         * function jmolIsReady() { alert('Welcome to Jmol!'); }
         * @example
         * jmolIsReady = function() { alert('Welcome to Jmol!'); }
         * @example
         * jmolIsReady = function(theJmol) { document.title = theJmol._id + " is ready"; }
         * @default null
         * @memberof AppletParameters
         */
        readyFunction: (appletInstance: JmolApplet) => void
        /**
         * A filename to load once the Jmol object has finished loading. It may
         * be a model in a supported format, or a script file.
         * @default ""
         * @type {string}
         * @memberof AppletParameters
         */
        src: string
        /**
         * A script to run when the Jmol object has finished loading. Note that
         * indicating a script here is not necessary; with Jmol-JSO, unlike with
         * Jmol.js, you can start making script calls to Jmol as soon as the
         * Jmol wrapper object has been created in JavaScript; there is no need
         * to wait for Jmol object initialization to have completed.
         * @default ""
         * @type {string}
         * @memberof AppletParameters
         */
        script: string
        /**
         * The name or id of a model to be retrieved from a public database, and
         * displayed when the Jmol object has finished loading.
         * @example
         * defaultModel: "=1crn"     // gets it from RCSB PDB
         * defaultModel: "$caffeine" // gets it from NCI CACTUS
         * defaultModel: ":caffeine" // gets it from PubChem
         * defaultModel: "caffeine"  // gets it from NCI CACTUS
         * @default ""
         * @type {string}
         * @memberof AppletParameters
         */
        defaultModel: string
        /**
         * Set this value to `true` if you want to display, below the Jmol object,
         * a menu with options for loading structures from public databases.
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        addSelectionOptions: boolean
        /**
         * The ID in html of the container or div that will receive output from
         * Jmol. Default value is the Jmol Object name/id followed by
         * "_infodiv", and it is contained in the info panel that may be
         * displayed alternatively to the Jmol viewer.
         * @default "<JmolAppletId>_infodiv"
         * @type {string}
         * @memberof AppletParameters
         */
        console: string
        /**
         * Set this value to `true` if you are having problems getting your page
         * to show the Jmol object, buttons or ther controls.
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        debug: boolean
        /**
         * This setting can be used to specify a language to be used in the Jmol
         * Object interface (mainly the pop-up menu). The existing choices may
         * be checked in the pop-up menu. If not specified, the default language
         * is automatically detected from the system settings of the user's
         * browser.
         * @example
         * language: "es"    // for Spanish
         * language: "pt_BR" // for Brazilian Portuguese
         * @type {string}
         * @memberof AppletParameters
         */
        language: string
        /**
         * (Java modality only) The maximum amount of memory allowed for the
         * Java applet, in MB.
         * @default 512
         * @type {number}
         * @memberof AppletParameters
         */
        memoryLimit: number
        /**
         * Loads a custom pop-up menu
         * @external http://wiki.jmol.org/index.php/Custom_Menus
         * @type {string}
         * @memberof AppletParameters
         */
        menuFile: string
        /**
         * The signed Jmol Java applet generally runs commands by passing them
         * to a command thread that is established when the applet is created,
         * while the unsigned applet does not. You can change this behavior if
         * you are observing Java security issues. Otherwise, it should not be
         * adjusted.
         * @default false
         * @type {boolean}
         * @memberof AppletParameters
         */
        usecommandthread: boolean
        /**
         * Defines the z-index property in CSS of the Jmol Object and its
         * associated div's. This is set by default to a very high value, so the
         * object will be laid on top of any other page elements, but it may be
         * useful to change it when you are integrating Jmol with other
         * components. In addition to setting for the particular applet, it also
         * sets the default for all other applets on the page, in case it is not
         * defined for those applets.
         * @default 9000
         * @type {number}
         * @memberof AppletParameters
         */
        zIndexBase: number
        /**
         * Defines, in a more fine-grained way, the z-index property in CSS of
         * all div's forming the Jmol Object.
         * It is an associative array that includes (some of these are more
         * relevant to JmolSpecViewer)
         * When just zIndexBase is provided, it will set all components of z in this way:
         * header: zIndexBase,
         * rear: zIndexBase + 1,
         * main: zIndexBase + 2,
         * image: zIndexBase + 3,
         * front: zIndexBase + 4,
         * fileOpener: zIndexBase + 5,
         * coverImage: zIndexBase + 6,
         * dialog: zIndexBase + 7,
         * menu: zIndexBase + 90000,
         * console: zIndexBase + 91000,
         * monitorZIndex: zIndexBase + 99999
         *
         */
        z: Partial<{
            header: number
            rear: number
            main: number
            image: number
            front: number
            fileOpener: number
            coverImage: number
            dialog: number
            menu: number
            console: number
            monitorZindex: number
        }>
        /**
         * Called: when a change in frame/model happens. When a file is loaded,
         * the function is called once o twice before the loading starts
         * (returning frame index zero) and once more after it finishes
         * (returning frame index one).
         * @param {number} frameIndex frame index (zero-based)
         * @param {number} fileNumber file number (1-based)
         * @param {number} frameNumberInFile frame number within the file (1-based)
         * @param {number} firstFrameNbInRange first frame number within the current animation range (1-based added to one million).
         * @param {number} lastFrameNbInRange last frame number within the current animation range (1-based added to one million).
         * @param {0|1} animationState animation state: 0 (stopped) or 1 (animating)
         * @param {-1|1} animationDirection animation direction: +1 (forward) or -1 (reverse)
         * @param {-1|1} currentDirection the current direction the animation is going: 1 (forward) or -1 (reverse)
         * @param {string} modelName the name or title of the model, taken from the file contents (same that is displayed at the top of the window in the Jmol application)
         * @param {number} morphIntermValue when a morph has been calculated, a floating point number corresponding to some intermediate value between two frames
         * @memberof AppletParameters
         */
        animFrameCallback: (
            appletName: string,
            frameIndex: number,
            fileNumber: number,
            frameNumberInFile: number,
            firstFrameNbInRange: number,
            lastFrameNbInRange: number,
            animationState: AnimationState,
            animationDirection: AnimationDirection,
            currentDirection: AnimationDirection,
            modelName: string,
            morphIntermValue: number) => void
        /**
         * Please, do not use this. Instead, use the `readyFunction` parameter
         * @deprecated
         * @memberof AppletParameters
         */
        appletReadyCallback: (appletName: string) => void
        /**
         * Called when the position of one or more atoms is modified; this
         * usually requires `set picking dragatom` + mouse action, or
         * `rotateSelected` or similar command.
         * @param atomset the affected atom set (as a Jmol atomset object - possibly in JSON construction; this will need parsing)
         * @memberof AppletParameters
         */
        atomMovedCallback: (appletName: string, atomset: JmolAtomset) => void
        /**
         * Called: when Jmol produces some output from an `echo` command, or a
         * `show` command (also if launched from the popup menu), or when
         * a model is loaded (echoes the file header)...
         * @param {string} message a text string with the output; it may include several lines
         * @memberof AppletParameters
         */
        echoCallback: (appletName: string, message: string) => void
        /**
         * (This is rather specialized and you will normally not need it).
         * If the Jmol `javascript` command is used (and is not forbidden by a
         * setting of `_jmol.noEval`), this callback sends the JavaScript back
         * to the web page for evaluation rather than initiating that evaluation
         * within Jmol. For more details, see `set EvalCallback`
         * @external http://chemapps.stolaf.edu/jmol/docs/#setcallback
         * @param {string} javascript javascript to be evaluated
         * @memberof AppletParameters
         */
        evalCallback: (appletName: string, javascript: string) => void
        /**
         * Called when the mouse or pointer is positioned (hovers) over an atom.
         * @param {string} atomDescription a text string with the current hover
         * label (either the default or user-defined through `set hoverLabel`),
         * followed by X, Y, Z coordinates of the atom.
         * @example
         * for a MOL file O14 #14 -0.438 -2.4279 -0.0068
         * for a PDB file: [ASN]46:A.ND2 #326 13.407 3.298 15.015
         * @param {number} atomIndex the atom index (zero-based)
         */
        hoverCallback: (
            appletName: string,
            atomDescription: string,
            atomIndex: number) => void
        /**
         * Called upon file loading (successful or not)
         * Note: When multiple files are loaded with the same load command,
         * only data for the last-loaded file is returned
         * @param {string} url the URL of the loaded file (full path+filename)
         * @param {string} filename the filename of the loaded file (without the path)
         * @param {string} modelTitle the internal title of the model in the loaded file
         * @param {string} errorMessages any error messages generated
         * @param {-1|0|3} statusCode a numeric code: 3 when the file loaded successfully, 0 when the model was zapped, -1 when the loading failed
         * @param {string} preFrameId  a text string with the frame number prior to loading the current model, in file.model syntax (for example, "3.1" or "1.1 - 3.31" if a whole range of models was framed)
         * @param {string} postFrameId a text string with the last frame number after loading the current model, in file.model syntax
         * @memberof AppletParameters
         */
        loadStructCallback: (
            appletName: string,
            url: string,
            filename: string,
            modelTitle: string,
            errorMessages: string,
            statusCode: LoadingStatus,
            preFrameId: string,
            postFrameId: string,
        ) => void
        /**
         * Called: after a measurement is started (double click on an atom) the
         * callback runs while the measurement is in process: hovering over
         * another atom, single-clicking or double-clicking on another atom
         * @param {string} atomsDescription a text string with data from the atoms
         * involved in the measurement (from one up to 4); for each one of them,
         * atom name (space) atom number. Starts and ends with square brackets
         * and has a comma as delimiter.
         * @example
         * [H18 #18, O4 #4] // for a distance (MOL file)
         * [H18 #18, O4 #4, H16 #16] // for an angle (MOL file)
         * [[ILE]7:A.CD1 #47, [ASN]46:A.ND2 #326] // for a distance (PDB file)
         * [[ILE]34:A.CD1 #245, [ILE]34:A.CG1 #243, [ILE]34:A.CB #242] // for an angle (PDB file)
         * @param {number} nbAtoms during the measurement, the number of atoms
         * involved so far; when measurement is finished, the index (zero-based)
         * of this measurement in the list of measurements
         * @param {'measurePending'|'measureCompleted'} status during the
         * measurement, the text string `measurePending`; when measurement is
         * finished, `measureCompleted`
         * @param {number} value the value of the measurement (angstroms or
         * degrees), either provisional or definitive
         * @memberof AppletParameters
         */
        measureCallback: (
            appletName: string,
            atomsDescription: string,
            nbAtoms: number,
            status: 'measurePending'|'measureCompleted',
            value: number
        ) => void
        /**
         * Called every time Jmol issues some message (which will go to the
         * scripting console).
         * You will need to parse the arguments output by this callback,
         * searching for whatever text you are interested on detecting.
         *
         * @memberof AppletParameters
         */
        messageCallback: (appletName: string, message: string, number: any) => void
        /**
         * Called during a 3D structure optimization (energy minimization)
         * initiated by the minimize command or the pop-up menu entry under
         * calculation, at every reporting stage (usually every 10 steps). Also,
         * extra calls at the beginning and end of the process.
         * @param {'starting'|'running'|'done'} status a text string declaring the status: either 'starting', 'running' or 'done'
         * @param {[number]} stage a one-element array with sequential number of the reporting stage (0 for starting, repeat the last when done)
         * @param {[number]} energy a one-element array with the current value of energy (E)
         * @param {[number]} deltaEnergy a one-element array with the current increment/decrement of energy between stages (dE)
         * @param {'UFF'|'MMFF'} forceField a text string indicating the kind of force field used (UFF or MMFF).
         * @memberof AppletParameters
         */
        minimizationCallback: (
            status: MinimizationStatus,
            stage: [number],
            energy: [number],
            deltaEnergy: [number],
            forceField: ForceField
        ) => void
        /**
         * Called: when the user clicks an atom or a bond (see below).
         * Note that for this to work, `set atomPicking` must be set true (it is
         * by default)
         * - Clicking on an atom:
         * @param {string} atomDescription a text string with atom id,
         * atom number, and xyz coordinates in the form:
         * @example
         * (MOL file) C6 #6 -0.307 -1.684 -0.717
         * (PDB file) [TYR]29:A.CE2 #210 -0.801 7.705 5.156
         * @param number an object or array with the atom index (zero-based).
         * @param arguments[3] a null or empty object.
         * - Clicking on a bond:
         * If `set bondPicking true` has been issued, bonds will become
         * clickable and also invoke the callback function, but the return from
         * the function will be different:
         * @param {string} bondDescription a text string in the form:
         * @example
         * (MOL file) ["bond","3 1 C2 #2 -- C4 #4 1.361",-0.0,0.906,-0.306]
         * // meaning bond number (indexed by order, 1-based),
         * // bond type (single, double...), 1st atom id, 1st atom number,
         * // 2nd atom id, 2nd atom number, bond length (distance), and xyz
         * // coordinates of the bond's midpoint.
         * (PDB file) ["bond","329 1 [ASN]46:A.N #319 -- [ALA]45:A.C #316 1.32",14.57,6.52,14.01]
         * @param {any} arguments[2]: ?.
         * @param {BondObject} bondObject an object with these properties:
         * @example
         * model: '1.1'
         * index: 328
         * type: 'bond'
         * info: "3 1 C2 #2 -- C4 #4 1.361" // a text string (same as middle element of bondDescription)
         * // with (space-delimited): bond number, bond type, 1st atom id, 1st atom number, --, 2nd atom id, 2nd atom number, bond length
         * // pt xyz coordinates of the bond's midpoint, e.g. {14.57, 6.52, 14.01}
         * modelIndex: 0
         * @type {(AtomPickCallback|BondPickCallback)}
         * @memberof AppletParameters
         */
        pickCallback: AtomPickCallback|BondPickCallback
        /**
         * Called when the JSmol object div size is changed. If the resizing is
         * done with `Jmol.resizeApplet()`, the callback is immediate. When
         * other methods are used for resizing (e.g. dragging the corner,
         * changing CSS via Javascript...), this callback may be delayed until
         * the JSmol panel is refreshed, e.g. by clicking on it.
         * @param {number} deltaWidth number of horizontal pixels (width) after the size change.
         * @param {number} deltaHeight number of vertical pixels (height).
         * @memberof AppletParameters
         */
        resizeCallback: (appletName: string, deltaWidth: number, deltaHeight: number) => void
        /**
         * Called during execution of a Jmol script.
         * This will receive messages indicating the status of script execution.
         * If it is not set, those messages go to the messageCallback instead.
         *
         * @memberof AppletParameters
         */
        scriptCallback: (appletName: string, message: string) => void
        /**
         * Called each time the structure is modified (e.g. by the user in the
         * ModelKit mode, or via some commands).
         *
         * @memberof AppletParameters
         */
        structureModifiedCallback: (
            appletName: string,
            mode: ModificationStatus,
            atomIndex: number,
            modelIndex:number) => void
        /**
         * Called: when the Jmol object issues/receives (?) a synchronization
         * message to/from (?) another Jmol object (see the `sync` command).
         * Within this callback function the message is intercepted and may be
         * accepted, modified or cancelled before being transmitted to the Jmol
         * objects affected by synchronization.
         * @external http://chemapps.stolaf.edu/jmol/docs/#sync
         * @memberof AppletParameters
         */
        syncCallback: (appletName: string, syncMessage: string) => string
    }

    type AtomPickCallback = (
        appletName: string,
        atomDescription: string,
        atomIndex: number,
        dummy: null
    ) => void
    type BondPickCallback = (
        bondDescription: string,
        dummy: any,
        bondObject: BondObject) => void

    enum AnimationState {
        animating = 1,
        stopped   = 0
    }
    enum AnimationDirection {
        forward = 1,
        reverse = -1
    }
    enum LoadingStatus {
        success = 3,
        zapped  = 0,
        failed  = -1
    }
    enum ModificationStatus {
        assignAtomStart = 1,
        assignAtomEnd   = -1,
        assignBondStart = 2,
        assignBondEnd   = -2,
        assignAtomPosStart = 3,
        assignAtomPosEnd= -3,
        deleteAtomStart = 4,
        deleteAtomEnd   = -4,
        deleteModelStart= 5,
        deleteModelEnd  = -5
    }
    type MinimizationStatus = 'starting'|'running'|'done'
    type ForceField = 'UFF'|'MMFF'

    interface BondObject {
        model: string
        index: number
        type: 'bond'
        info: string
        pt: {
            x: number,
            y: number,
            z: number
        }
    }

    interface JmolApplet {
        _id: string
        _code: string
    }

    interface JmolAtomset {
        [k: string]: any
    }
}
