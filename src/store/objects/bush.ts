import { MAP_SIZE } from "../../constants";
import { CircleHitbox, Vec2 } from "../../types/maths";
import { GameObject } from "../../types/objects";

export default class Bush extends GameObject {
	type = "bush";
	noCollision = true;

	constructor(objects: GameObject[]) {
		const hitbox = new CircleHitbox(1.5).scaleAll(1 + (Math.random() - 0.5) / 5);
		super(hitbox, hitbox, 100, 100);
		while (objects.find(object => this.collided(object.hitbox, object.position, object.direction))) this.position = new Vec2((Math.random() + 1) * MAP_SIZE[0] / 2, (Math.random() + 1) * MAP_SIZE[1] / 2);
	}
}