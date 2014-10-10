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
		"rect" : [ 85.0, 170.0, 640.0, 480.0 ],
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
					"bgcolor" : [ 1.0, 0.305548, 0.681535, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-9",
					"linecount" : 8,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 408.0, 272.0, 150.0, 114.0 ],
					"text" : "1 - musics\n2 - breathing\n3 - conversation\n4 (2) - dmtf\n5 (3) - is that you\n6 (1) - musics\n7 (3) - breathing\n8 (2) - dmtf"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-7",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 56.0, 279.0, 172.0, 60.0 ],
					"text" : "1 - BLANK --> is that you? (5)\n2 - emergency facebooks\n3 - breathing\n4 - DMTF"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 456.5, 132.0, 32.5, 20.0 ],
					"text" : "t b l"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-3",
					"maxclass" : "number",
					"maximum" : 128,
					"minimum" : 1,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 456.5, 100.0, 50.0, 21.0 ],
					"varname" : "number[1]"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 408.0, 172.0, 112.5, 21.0 ],
					"text" : "pack open 0"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 408.0, 214.0, 90.0, 20.0 ],
					"text" : "poly~ playlist 3"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 213.5, 132.0, 32.5, 20.0 ],
					"text" : "t b l"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-81",
					"maxclass" : "number",
					"maximum" : 128,
					"minimum" : 1,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 213.5, 100.0, 50.0, 21.0 ],
					"varname" : "number"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 165.0, 172.0, 112.5, 21.0 ],
					"text" : "pack open 0"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 165.0, 214.0, 113.0, 20.0 ],
					"text" : "poly~ multi_fucks 4"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-81", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1.1::obj-33" : [ "live.gain~[4]", "live.gain~", 0 ],
			"obj-1.4::obj-30" : [ "live.gain~[30]", "live.gain~", 0 ],
			"obj-5.1::obj-54" : [ "live.gain~[16]", "live.gain~[1]", 0 ],
			"obj-5.2::obj-55" : [ "live.gain~[19]", "live.gain~[3]", 0 ],
			"obj-1.3::obj-30" : [ "live.gain~[13]", "live.gain~", 0 ],
			"obj-1.2::obj-43" : [ "live.gain~[10]", "live.gain~", 0 ],
			"obj-1.4::obj-38" : [ "live.gain~[28]", "live.gain~[2]", 0 ],
			"obj-5.1::obj-52" : [ "live.gain~[18]", "live.gain~", 0 ],
			"obj-5.2::obj-52" : [ "live.gain~[22]", "live.gain~", 0 ],
			"obj-5.3::obj-53" : [ "live.gain~[25]", "live.gain~[1]", 0 ],
			"obj-1.1::obj-38" : [ "live.gain~[2]", "live.gain~[2]", 0 ],
			"obj-1.3::obj-33" : [ "live.gain~[15]", "live.gain~", 0 ],
			"obj-1.2::obj-30" : [ "live.gain~[7]", "live.gain~", 0 ],
			"obj-1.4::obj-43" : [ "live.gain~[27]", "live.gain~", 0 ],
			"obj-5.2::obj-53" : [ "live.gain~[21]", "live.gain~[1]", 0 ],
			"obj-5.3::obj-55" : [ "live.gain~[23]", "live.gain~[3]", 0 ],
			"obj-1.3::obj-38" : [ "live.gain~[14]", "live.gain~[2]", 0 ],
			"obj-1.2::obj-242" : [ "live.gain~[8]", "live.gain~", 0 ],
			"obj-1.4::obj-242" : [ "live.gain~[31]", "live.gain~", 0 ],
			"obj-1.1::obj-242" : [ "live.gain~[5]", "live.gain~", 0 ],
			"obj-1.1::obj-43" : [ "live.gain~[3]", "live.gain~", 0 ],
			"obj-5.2::obj-54" : [ "live.gain~[20]", "live.gain~[1]", 0 ],
			"obj-5.3::obj-54" : [ "live.gain~[24]", "live.gain~[1]", 0 ],
			"obj-1.3::obj-242" : [ "live.gain~[12]", "live.gain~", 0 ],
			"obj-1.1::obj-30" : [ "live.gain~", "live.gain~", 0 ],
			"obj-1.2::obj-38" : [ "live.gain~[6]", "live.gain~[2]", 0 ],
			"obj-1.4::obj-33" : [ "live.gain~[29]", "live.gain~", 0 ],
			"obj-5.1::obj-55" : [ "live.gain~[17]", "live.gain~[3]", 0 ],
			"obj-5.3::obj-52" : [ "live.gain~[26]", "live.gain~", 0 ],
			"obj-1.3::obj-43" : [ "live.gain~[11]", "live.gain~", 0 ],
			"obj-1.2::obj-33" : [ "live.gain~[9]", "live.gain~", 0 ],
			"obj-5.1::obj-53" : [ "live.gain~[1]", "live.gain~[1]", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "multi_fucks.maxpat",
				"bootpath" : "/Users/kevinroark/code/art/strength.js/patches",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kinect_example.maxpat",
				"bootpath" : "/Users/kevinroark/code/art/strength.js/patches",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "playlist.maxpat",
				"bootpath" : "/Users/kevinroark/code/art/strength.js/patches",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ]
	}

}
