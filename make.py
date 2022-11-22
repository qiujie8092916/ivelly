import sys
import os

def build():
#    os.system("rm -rf src/.umi-production")
#    os.system("rm -rf dist")
#    os.system("rm -rf node_modules")
    os.system("pnpm install")
    os.system("pnpm build")
    pass


def docker(version):
    version = version.strip()
    os.system("docker buildx build --platform=linux/amd64 -t ivelly:" + version + " .")
#    os.system("docker tag ivelly/ui:" + version + " hub.xjjj.co/bs-logging/ui:" + version)
#    os.system("docker push hub.xjjj.co/bs-logging/ui:" + version)
    pass


if __name__ == '__main__':
    version = sys.argv[1]
    action = sys.argv[2]

    os.system("git fetch")
    os.system("git checkout tags/" + version)

    if 'build' in action:
        build()

    if 'docker' in action:
        docker(version)
