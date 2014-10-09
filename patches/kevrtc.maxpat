{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 6,
			"minor" : 1,
			"revision" : 8,
			"architecture" : "x86"
		}
,
		"rect" : [ 0.0, 44.0, 1039.0, 806.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-81",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.127716, 125.435699, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 364.0, 424.316376, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 1.0, 0.221317, 0.624216, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-82",
					"maxclass" : "slider",
					"min" : 10.0,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 405.127716, 88.0, 159.744553, 19.038324 ],
					"presentation" : 1,
					"presentation_rect" : [ 419.255402, 424.316376, 159.744553, 19.038324 ],
					"size" : 5000.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-80",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 331.0, 61.0, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 61.0, 150.0, 20.0 ],
					"text" : "volume, lowpass"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-78",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.5, 11.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 778.5, 84.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-71",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 1131.5, 61.0, 65.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 778.5, 111.0, 65.0, 20.0 ],
					"text" : "metro 100"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-57",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1131.5, 94.0, 81.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 778.5, 144.0, 81.0, 20.0 ],
					"text" : "drunk 100 10"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-75",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1015.0, 249.090912, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 924.636353, 267.090912, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.603922, 0.341291, 0.42267, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-76",
					"knobcolor" : [ 0.909854, 0.930665, 1.0, 1.0 ],
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1045.0, 103.090912, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 946.0, 121.090912, 20.0, 140.0 ],
					"size" : 1.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-73",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 975.0, 249.090912, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 878.0, 267.090912, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.603922, 0.339703, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-74",
					"knobcolor" : [ 0.909854, 0.930665, 1.0, 1.0 ],
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1005.0, 103.090912, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 908.0, 121.090912, 20.0, 140.0 ],
					"size" : 1.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-72",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 940.0, 249.090912, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 843.0, 267.090912, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-70",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 970.0, 76.090912, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 832.0, 76.090912, 150.0, 20.0 ],
					"text" : "freq, pressure, stiffness"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.27164, 0.304704, 0.602582, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-31",
					"knobcolor" : [ 0.909854, 0.930665, 1.0, 1.0 ],
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 970.0, 103.090912, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 873.0, 121.090912, 20.0, 140.0 ],
					"size" : 2000.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-69",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 947.0, 11.0, 156.0, 47.0 ],
					"presentation" : 1,
					"presentation_linecount" : 3,
					"presentation_rect" : [ 582.0, 84.0, 156.0, 47.0 ],
					"text" : "grainhop, hopjitter, \nmindur, maxdur, \npitch, pitchjitter"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-39",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 912.0, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 747.0, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-45",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 912.0, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 747.0, 137.0, 20.0, 140.0 ],
					"size" : 16.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-48",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 862.0, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 697.0, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-55",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"min" : 0.1,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 892.0, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 727.0, 137.0, 20.0, 140.0 ],
					"size" : 25.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-37",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 815.0, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 650.0, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-38",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"min" : 0.05,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 815.0, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 650.0, 137.0, 20.0, 140.0 ],
					"size" : 7.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-35",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 765.0, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 600.0, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-36",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 795.0, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 630.0, 137.0, 20.0, 140.0 ],
					"size" : 4.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-33",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 716.127686, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 551.127686, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-34",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"mult" : 0.2,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 716.127686, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 551.127686, 137.0, 20.0, 140.0 ],
					"size" : 1.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-32",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 666.127686, 142.752075, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 501.127686, 278.752075, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-30",
					"knobcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"maxclass" : "slider",
					"min" : 0.001,
					"mult" : 0.75,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 696.127686, 1.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 531.127686, 137.0, 20.0, 140.0 ],
					"size" : 1.0
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.106339, 0.002308, 1.0, 1.0 ],
					"id" : "obj-16",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1024.0, 369.090912, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1133.0, 339.0, 20.0, 140.0 ],
					"size" : 160.0
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.773665, 0.433094, 1.0, 1.0 ],
					"id" : "obj-8",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 773.744568, 268.0, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 939.636353, 339.0, 20.0, 140.0 ],
					"size" : 160.0
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 1.0, 0.264172, 0.153765, 1.0 ],
					"id" : "obj-12",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 489.744568, 249.090912, 20.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 715.5, 339.0, 20.0, 140.0 ],
					"size" : 160.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-68",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1245.0, 339.0, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1133.0, 271.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-56",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1192.0, 339.0, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1080.0, 271.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-50",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1131.5, 339.0, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1019.5, 271.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-46",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1131.5, 171.0, 173.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1019.5, 103.0, 173.0, 20.0 ],
					"text" : "pitch // slide length // tip thing"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.887456, 0.560755, 1.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-44",
					"maxclass" : "slider",
					"min" : 30.0,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1142.627686, 193.090912, 20.0, 136.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1030.627686, 125.090912, 20.0, 136.0 ],
					"size" : 15000.0
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.224502, 1.0, 0.204983, 1.0 ],
					"id" : "obj-41",
					"maxclass" : "slider",
					"min" : 140.0,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1245.0, 193.090912, 20.0, 136.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1133.0, 125.090912, 20.0, 136.0 ],
					"size" : 800.0
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 1.0, 0.773612, 0.253573, 1.0 ],
					"id" : "obj-40",
					"maxclass" : "slider",
					"min" : 10.0,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1192.0, 193.090912, 20.0, 136.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1080.0, 125.090912, 20.0, 136.0 ],
					"size" : 260.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-58",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1024.0, 584.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-59",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1162.0, 600.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-60",
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1109.0, 444.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1098.0, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-61",
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1077.5, 444.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1066.5, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1039.0, 658.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1030.627686, 459.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-63",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1132.127686, 710.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-64",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1077.5, 710.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-65",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1162.0, 369.090912, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1020.5, 309.090912, 150.0, 20.0 ],
					"text" : "brass - toggle with 4"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 1045.0, 331.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1030.627686, 418.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-67",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "signal", "" ],
					"patching_rect" : [ 1083.0, 369.090912, 73.0, 20.0 ],
					"save" : [ "#N", "rtcmix~", 2, 3, ";", "#X", "restore", 0, 970, 970, "// brass band boogie\r\n// MBRASS(outsk, dur, AMP, FREQ, SLIDELEN, LIPFILT, maxpressure[, PAN, BREATHENV])\r\n// GVERB(outsk, insk, dur, AMP, ROOMSIZE, RVBTIME, DAMPING, BANDWIDTH, DRYLEVEL, EARLYREFLECT, RVBTAIL, RINGDOWN[, INCHAN])\r\n\r\nbus_config(\"MBRASS\", \"aux 0-1 out\")\r\nbus_config(\"GVERB\", \"aux 0-1 in\", \"out 0-1\")\r\n\r\nsrand()\r\n\r\n// set up the pitch knob\r\npitchinlet = makeconnection(\"inlet\", 1, 120)\r\nslideinlet = makeconnection(\"inlet\", 2, 50) // 10 -> 270\r\nlipinlet = makeconnection(\"inlet\", 3, 340) // should go 140 -> 940\r\n\r\n// generate a bunch of pockets of brass\r\nstart = 0\r\nhop = 0.35\r\nnoises = 2500\r\nfor (i = 0; i < noises; i = i + 1) {\r\n\tamp = irand(1500, 16000)\r\n\tpan = random()\r\n\tdur = irand(0.2, 2.0)\r\n\tpressure = irand(0.05, 0.65)\r\n\tpan = random()\r\n\r\n\tMBRASS(start, dur, amp, pitchinlet, slideinlet, lipinlet, pressure, pan)\r\n\tstart = start + hop\r\n}\r\n\r\n// gverb everything\r\nGVERB(0, 0, start, 1.0, 250, 12.0, 0.5, 0.5, -10, -1, -1.0, 0, 0)\r\n\r\nMAXBANG(start)", ";" ],
					"text" : "rtcmix~ 2 3"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-19",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 809.0, 488.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-20",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 947.0, 504.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.666667, 0.662475, 0.042181, 1.0 ],
					"id" : "obj-21",
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 894.0, 348.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 904.5, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.666667, 0.015716, 0.0, 1.0 ],
					"id" : "obj-22",
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 862.5, 348.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 873.0, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 824.0, 562.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 832.0, 459.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-24",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 917.127686, 614.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 862.5, 614.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-26",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 962.0, 273.090912, 156.0, 33.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 839.0, 296.090912, 153.0, 33.0 ],
					"text" : "decimated clarinet - toggle with 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-27",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 830.0, 235.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 832.0, 418.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "signal", "" ],
					"patching_rect" : [ 868.0, 273.090912, 73.0, 20.0 ],
					"save" : [ "#N", "rtcmix~", 2, 3, ";", "#X", "restore", 0, 1097, 1097, "\r\n// CLAR(outsk, dur, noiseamp, length1 (samples), length2 (samples), outputamp, d2gain[, pan])\r\n// DECIMATE(outsk, insk, dur, PREAMP, POSTAMP, NBITS[, LOWPASSFREQ, inputchan, PAN])\r\n\r\nbus_config(\"MCLAR\", \"aux 0-1 out\")\r\nbus_config(\"DECIMATE\", \"aux 0-1 in\", \"out 0-1\")\r\n\r\nsrand()\r\n\r\nfreqinlet = makeconnection(\"inlet\", 1, 160)\r\npressureinlet = makeconnection(\"inlet\", 2, 0.5)\r\nstiffnessinlet = makeconnection(\"inlet\", 3, 0.5)\r\n\r\n// generate clarinet sounds\r\nstart = 0\r\nhop = 0.33\r\nnoises = 1000\r\nfor (i = 0; i < noises; i = i + 1) {\r\n\tdur = irand(0.3, 4.0)\r\n\r\n\tnoiseamp = irand(0.32, 0.92)\r\n\r\n\tamp = 18000\r\n\tpan = random()\r\n\r\n\tMCLAR(start, dur, amp, freqinlet, noiseamp, pressureinlet, stiffnessinlet, pan)\r\n\tstart = start + hop\r\n}\r\n\r\n// DECIMATE THE CLARINET\r\ndec_start = 0\r\nwhile (dec_start < start) {\r\n\tdec_hop = irand(hop / 2, hop * 1.5)\r\n\r\n\tbits = 16\r\n\tcutoff = 6666\r\n\r\n\tif (random() < 0.64) {\r\n\t\tbits = trand(1, 4)\r\n    }\t\r\n\r\n\tif (random() < 0.5) {\r\n\t\tcutoff = irand(100, 1000)\r\n    }\r\n\r\n\tDECIMATE(dec_start, 0, dec_hop, 1.0, 1.0, bits, cutoff)\r\n\t\r\n\tdec_start += dec_hop\r\n}\r\n\r\nMAXBANG(start)", ";" ],
					"text" : "rtcmix~ 2 3"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-18",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 588.0, 408.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-15",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 726.0, 424.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.21494, 0.119251, 0.666667, 1.0 ],
					"id" : "obj-9",
					"interp" : 93.0,
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 673.0, 268.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 682.0, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.079185, 0.244511, 0.666667, 1.0 ],
					"id" : "obj-2",
					"maxclass" : "gain~",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 641.5, 268.0, 22.0, 140.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 650.5, 339.0, 22.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-52",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 603.0, 482.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 614.5, 460.752075, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-53",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 696.127686, 534.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-54",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 641.5, 534.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-51",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 300.0, 717.0, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 289.0, 612.0, 150.0, 20.0 ],
					"text" : "start musics with s"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-49",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 300.0, 678.0, 34.0, 18.0 ],
					"text" : "start"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 249.0, 482.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 329.0, 460.752075, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-43",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 342.127716, 534.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-42",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 287.5, 534.0, 41.0, 20.0 ],
					"text" : "gate~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-28",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 765.0, 193.090912, 150.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 614.5, 309.090912, 121.0, 20.0 ],
					"text" : "gran - toggle with 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 609.0, 155.0, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 614.5, 418.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-13",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "float", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 281.0, 125.435699, 50.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 364.0, 399.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.534454, 0.989776, 1.0, 1.0 ],
					"floatoutput" : 1,
					"id" : "obj-6",
					"maxclass" : "slider",
					"min" : 0.1,
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 237.127716, 88.0, 159.744553, 19.038324 ],
					"presentation" : 1,
					"presentation_rect" : [ 419.255402, 399.0, 159.744553, 19.038324 ],
					"size" : 15.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 6,
					"outlettype" : [ "bang", "bang", "bang", "bang", "bang", "" ],
					"patching_rect" : [ 55.75, 424.0, 131.0, 20.0 ],
					"text" : "select 115 49 50 51 52"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-10",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 10.0, 473.0, 50.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 4,
					"outlettype" : [ "int", "int", "int", "int" ],
					"patching_rect" : [ 44.0, 388.0, 59.5, 20.0 ],
					"text" : "key"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-4",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 350.0, 180.090912, 150.0, 33.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 384.127716, 363.090912, 150.0, 33.0 ],
					"text" : "noise generator - toggle with 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 8,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "signal", "" ],
					"patching_rect" : [ 647.0, 193.090912, 113.5, 20.0 ],
					"save" : [ "#N", "rtcmix~", 2, 6, ";", "#X", "restore", 0, 1015, 1015, "// GRANSYNTH(outsk, dur, AMP, WAVETABLE, GRAINENV, GRAINHOP, OUTTIMEJITTER, MINDUR, MAXDUR, MINAMP, MAXAMP, PITCH[, TRANSPTABLE, PITCHJITTER, seed, MINPAN, MAXPAN])\r\n\r\n// a little granular synthesis sounders\r\n\r\nsrand()\r\n\r\nfinal_length = 2000\r\n\r\nstart = 0\r\n\r\ngrainhop = makeconnection(\"inlet\", 1, 0.05)\r\nhopjitter = makeconnection(\"inlet\", 2, 0.1)\r\n\r\nmindur = makeconnection(\"inlet\", 3, 0.02)\r\nmaxdur = makeconnection(\"inlet\", 4, 0.2)\r\n\r\npitch = makeconnection(\"inlet\", 5, 4)\r\npitchjitter = makeconnection(\"inlet\", 6, 4)\r\n\r\nminamp = 0.2\r\nmaxamp = 4.5\r\n\r\nwhile (start < final_length) {\r\n\r\ndur = irand(1.3, 6)\r\n\r\ntimehop = irand(0.6, 2.0)\n  \nwave = maketable(\"wave\", 2000, 1, .5, .3, .2, .1)\r\ngranenv = maketable(\"window\", 2000, \"hanning\")\r\ntranspcoll = maketable(\"literal\", \"nonorm\", 0, 0, .02, .03, .05, .07, .10, .12, .14, .15)\r\n\nGRANSYNTH(start, dur, 25000, wave, granenv, grainhop, hopjitter,\n      mindur, maxdur, minamp, maxamp, pitch, transpcoll, pitchjitter, irand(0, 100),\r\n \t  0, 1)\r\n\r\nstart += timehop\r\n\r\n}", ";" ],
					"text" : "rtcmix~ 2 6"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 210.190079, 142.752075, 20.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 329.0, 418.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "ezdac~",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 462.5, 672.0, 45.0, 45.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 289.0, 560.0, 45.0, 45.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 3,
					"outlettype" : [ "signal", "signal", "" ],
					"patching_rect" : [ 273.0, 180.090912, 70.0, 20.0 ],
					"save" : [ "#N", "rtcmix~", 2, 2, ";", "#X", "restore", 0, 1157, 1157, "// this is the noise generator\r\n\r\n// the noise function prototype: NOISE(time, dur, amp, pan)\r\n// distortion function prototype: DISTORTION(outsk, insk, dur, amp, type, preamp, lowpass)\r\n\r\nbus_config(\"NOISE\", \"aux 0-1 out\")\r\nbus_config(\"DISTORT\", \"aux 0-1 in\", \"aux 2-3 out\")\r\nbus_config(\"TRANS\", \"aux 2-3 in\", \"out 0-1\")\r\n\r\nsrand()\r\n\r\nampinlet = makeconnection(\"inlet\", 1, 2.0)\r\nlowpassinlet = makeconnection(\"inlet\", 2, 1800)\r\n\r\n// generate a bunch of pockets of random noise and spit them into a bus\r\nstart = 0\r\nhop = 0.19\r\nnoises = 10000\r\nfor (i = 0; i < noises; i = i + 1) {\r\n\tamp = irand(2000, 24000)\r\n\tpan = random()\r\n\tduration = irand(0.19, 0.27)\r\n\r\n\tNOISE(start, duration, amp, pan)\r\n\tstart = start + hop\r\n}\r\n\r\n// distort the noise packets and send 'em through a low pass filter\r\nDISTORT(0, 0, start, 1.0, 2, 2.0, lowpassinlet)\r\n\r\n// pitch shift the distorted noise at intervals faster than the noise was generated\r\ntrans_start = 0\r\nwhile (trans_start < start) {\r\n\ttrans_hop = irand(hop / 4, hop / 1.7)\r\n\r\n\ttrans = irand(-0.3, 0.2)\r\n\r\n\tTRANS(trans_start, 0, trans_hop, ampinlet, trans)\r\n\r\n\ttrans_start = trans_start + trans_hop\r\n}\r\n\r\nMAXBANG(start)", ";" ],
					"text" : "rtcmix~ 2 2"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 65.25, 477.0, 236.0, 477.0, 236.0, 225.0, 586.0, 225.0, 586.0, 150.0, 618.5, 150.0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 132.449997, 519.0, 833.5, 519.0 ],
					"source" : [ "obj-11", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 65.25, 456.0, 815.0, 456.0, 815.0, 231.0, 839.5, 231.0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 65.25, 520.0, 180.095032, 520.0, 180.095032, 132.752075, 219.690079, 132.752075 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 154.850006, 645.0, 1048.5, 645.0 ],
					"source" : [ "obj-11", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 65.25, 456.0, 848.0, 456.0, 848.0, 327.0, 1054.5, 327.0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-14", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-21", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-22", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-29", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 3 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 4 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 5 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-37", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 7 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-41", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-43", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 6 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 3 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-60", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-61", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-67", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-67", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 4 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-71", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 3 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 4 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-76", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-71", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 3 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "rtcmix~.mxo",
				"type" : "iLaX"
			}
 ]
	}

}
