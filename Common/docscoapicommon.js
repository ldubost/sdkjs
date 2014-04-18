﻿"use strict";/* docscoapicommon.js * * Author: Alexander.Trofimov * Date: 09.11.12 */(	/**	 * @param {Window} window	 * @param {undefined} undefined	 */	function (window, undefined) {		/*		 * Import		 * -----------------------------------------------------------------------------		 */		var asc = window["Asc"] ? window["Asc"] : (window["Asc"] = {});		var prot;				/**		 * Класс user для совместного редактирования/просмотра документа		 * -----------------------------------------------------------------------------		 *		 * @constructor		 * @memberOf Asc		 */		function asc_CUser (val) {			if ( !(this instanceof asc_CUser) ) {				return new asc_CUser(val);			}			this.id				= null;					// уникальный id - пользователя			this.userName		= null;					// имя пользователя			this.state			= undefined;			// состояние (true - подключен, false - отключился)			this.color			= null;					// цвет пользователя			this._setUser(val);			return this;		}		asc_CUser.prototype = {			constructor: asc_CUser,			_setUser: function (val) {				if (val) {					this.id = val["id"];					this.userName = val["username"];					this.color = val["color"];					this.state = val["state"];				} else {					this.color = asc.generateColor();				}			},			asc_getId: function () { return this.id; },			asc_getUserName: function () { return this.userName; },			asc_getState: function () { return this.state; },			asc_getColor: function () { return this.color; },			asc_setId: function (val) { this.id = val; },			asc_setUserName: function (val) { this.userName = val; },			asc_setState: function (val) { this.state = val; },			asc_setColor: function (val) { this.color = val; }		};				/*		 * Export		 * -----------------------------------------------------------------------------		 */		window["Asc"]["asc_CUser"] = window["Asc"].asc_CUser = asc_CUser;		prot = asc_CUser.prototype;		prot["asc_getId"]				= prot.asc_getId;		prot["asc_getUserName"]			= prot.asc_getUserName;		prot["asc_getState"]			= prot.asc_getState;		prot["asc_setId"]				= prot.asc_setId;		prot["asc_getColor"]			= prot.asc_getColor;		prot["asc_setUserName"]			= prot.asc_setUserName;		prot["asc_setState"]			= prot.asc_setState;		prot["asc_setColor"]			= prot.asc_setColor;	})(window);