function hascollided(bullet, wall) 
{
bulletrightedge = bullet.x + bullet.width;
wallLeftedge = wall.x;

if (bulletrightedge>=wallLeftedge) {

return true;
}

return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

}