﻿#pragma strict

private var anim : Animator;
private var audioSrc : AudioSource;
private var rb : Rigidbody2D;

public var thrust : float = 5;
public var destroyDelay = 10.0f;
function Start () {
	anim = GetComponent.<Animator>();
	audioSrc = GetComponent.<AudioSource>();
	rb = GetComponent.<Rigidbody2D>();

	rb.AddForce(transform.up * thrust);
	Destroy(gameObject, destroyDelay);
}

function Update () {
	
}


function OnMouseDown(){
//	Debug.Log("You clicked the bubble!");
	audioSrc.Play();
	anim.SetTrigger("Popping");
	Destroy(gameObject, 0.5);
	Debug.Log("Bubble Popped!");
}