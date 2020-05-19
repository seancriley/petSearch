# Sean Riley Project 2 Proposal Worksheet

## Project Description

My app is called PetSearch. Users are presented with a series of pet fields to search for available pets near them.

## Wireframes

![Main Page](https://vectr.com/scriley/eC3SOUK56.svg?width=640&height=640&select=eC3SOUK56page0)

![Pet details](https://vectr.com/scriley/a2EGpPa8VR.svg?width=640&height=640&select=a2EGpPa8VRpage0)

## MVP User Stories

- _The User should be presented with a summary screen upon search showing thumbnails of pets brought up._
- _The User should be presented with a pet detail upon clicking on a pet._
- _All search functions should be easily usable and reliable._

_**Post MVP Stretch Goals**_

- _Storage of pets to bring up later_
- _Random search combined with filters aka: random small dogs in 2 miles_
- _Graphics_

## API

https://www.petfinder.com/developers/v2/docs/

_**Response example:**_

{
age: "Baby"
attributes: {spayed_neutered: false, house_trained: false, declawed: null, special_needs: false, shots_current: false}
breeds: {primary: "Labrador Retriever", secondary: "German Shepherd Dog", mixed: true, unknown: false}
coat: null
colors: {primary: null, secondary: null, tertiary: null}
contact: {email: "adopt@operationpetsalive.org", phone: null, address: {…}}
description: "Hi my name is Blain. I&amp;#39;m about 11 weeks old and thought to be a German shepherd and lab mix...."
distance: null
environment: {children: null, dogs: true, cats: true}
gender: "Male"
id: 47883489
name: "Blain"
organization_id: "TX1531"
photos: []
primary_photo_cropped: null
published_at: "2020-04-27T15:34:04+0000"
size: "Medium"
species: "Dog"
status: "adoptable"
status_changed_at: "2020-04-27T15:34:04+0000"
tags: []
type: "Dog"
url: "https://www.petfinder.com/dog/blain-47883489/tx/the-woodlands/operation-pets-alive-tx1531/?referrer_id=a99535e6-6813-4d5f-b9de-8db949c32933"
videos: []
_links:
organization: {href: "/v2/organizations/tx1531"}
self: {href: "/v2/animals/47883489"}
type: {href: "/v2/types/dog"}
}

## Component Hierarchy

![Heirachy](https://vectr.com/scriley/a48nRgxUaM.svg?width=640&height=640&select=a48nRgxUaMpage0)
