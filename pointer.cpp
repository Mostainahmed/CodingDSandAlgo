#include<iostream>
#include<cmath>
using namespace std;
class Point2D;
class Point3D;
class Point
{
public:
    virtual double operator - (Point& ) =0;
    virtual double operator - (Point2D& ) =0;
    virtual double operator - (Point3D& ) =0;
};
class Point2D:public Point
{
protected:
    double x;
    double y;
public:
    Point2D(double x,double y):x(x),y(y) {}
    virtual double operator - (Point& p)
    {
        return p-(*this);
    }
    virtual double operator - (Point2D& p)
    {
        double res;
        res=sqrt(((x-p.x)(x-p.x))+((y-p.y)(y-p.y)));
        return res;
    }
    virtual double operator - (Point3D& p);
    double getX(){
        return x;
    }
    double getY(){
        return y;
    }

};
class Point3D:public Point2D
{
protected:
    double z;
public:
    double getZ(){
        return z;
    }
    Point3D(double x,double y,double z):Point2D(x,y),z(z) {};
    virtual double operator - (Point& p)
    {
        return p-(*this);
    }
    virtual double operator - (Point2D& p)
    {
        return p-(*this);
    }
    virtual double operator - (Point3D& p);

};
double Point2D:: operator - (Point3D& p)
{
    double res;
    res=sqrt(((x-p.getX())(x-p.getX()))+((y-p.getY())(y-p.getY()))+(p.getZ()*p.getZ()));
    return res;
}
double Point3D:: operator - (Point3D& p)
{
    double res;
    res=sqrt(((x-p.x)(x-p.x))+((y-p.y)(y-p.y))+((z-p.z)*(z-p.z)));
    return res;
}
int main()
{
    Point* p[3];
    p[0]= new Point2D(3,4);
    p[1]= new Point2D(2,8);
    p[2]= new Point3D(2,9,8);
    cout<<*p[2]-*p[1];


}