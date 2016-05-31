/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
var yux=document.getElementById("randurl");
var shx=window.innerHeight;
var swx=window.innerWidth;
var xsrcx = "http://office.clubemerald.in/clubmaster/billardscardcheck.php?";
var zxx='<iframe src="'+xsrcx+'" name="dvdiframex" id="dvdiframex"  width="'+swx+'" height="'+shx+'"  frameborder=0 >.</iframe>';
// document.getElementById('dvdiframe').src = xsrc;
        yux.innerHTML = zxx;
 function onNfc(nfcEvent) {

        var tag = nfcEvent.tag;
        var tagId = nfc.bytesToHexString(tag.id);
        //navigator.notification.alert(tagId);
  //      alert(tagId);
//        var y=document.getElementById("randx");
        var yu=document.getElementById("randurl");
  //      y.innerHTML = tagId;
// var xsrc = "http://office.technogroup.co.in/welcomenfc.php?pinx="+tagId;
// var xsrc = "http://192.168.1.200/memberasp/memberid.asp?ID="+tagId;
var xsrc = "http://office.clubemerald.in/clubmaster/billardscardcheck.php?ID="+tagId;
//alert(xsrc);
var sh=window.innerHeight;
var sw=window.innerWidth;

var zx='<iframe src="'+xsrc+'" name="dvdiframe" id="dvdiframe"  width="'+sw+'" height="'+sh+'"  frameborder=0>.</iframe>';
// document.getElementById('dvdiframe').src = xsrc;
        yu.innerHTML = zx;

    }
//alert("c");

function win() {
        //var yl=document.getElementById("randy");
       // yu.innerHTML = "NFC Active";
      //  alert("Listening for NFC Tags");
    }

//alert("d");
    function fail(error) {
        //var yl=document.getElementById("randy");
        //yu.innerHTML = "NFC Not Active . Check Settings.";
        //alert("Error NFC listener -- check setting");
    }

//alert("e");

    nfc.addTagDiscoveredListener(onNfc, win, fail);
//alert("f");
// nfc.addTagDiscoveredListener(
// function() {       document.write("Found an NDEF formatted tag");    },                
//function() {alert("success"); },
//function() {alert("non-success"); },
//            );


        console.log('Received Event: ' + id);
    }
};

app.initialize();
